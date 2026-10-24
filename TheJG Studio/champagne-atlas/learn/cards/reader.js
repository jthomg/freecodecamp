/* Bubble Cards reader.
 * The page carries no card content. The library index (threads.json) and each
 * thread (threads/<dir>/<id>.json) are fetched as separate resources, so a
 * future per-path gate can refuse a thread while this page stays public. */
(function () {
  "use strict";

  var INDEX_URL = "threads.json?v=3333bc7985";
  var THEME_KEY = "bc:theme";
  var PROGRESS_KEY = "bc:progress";

  var library = [];       // entries from threads.json
  var threads = {};       // id -> loaded thread, or null if refused
  var activeTag = null;
  var query = "";
  var view = null;        // { thread, ep, i, cards }
  var opener = null;

  var $ = function (id) { return document.getElementById(id); };

  // ---------- storage (optional; the page works without it) ----------
  function readStore(key, fallback) {
    try { var v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
    catch (e) { return fallback; }
  }
  function writeStore(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* ignore */ }
  }
  var progress = readStore(PROGRESS_KEY, {});

  function epProgress(id, n) { return (progress[id] && progress[id][n]) || 0; }
  function markSeen(id, n, seen, total) {
    progress[id] = progress[id] || {};
    if (seen > (progress[id][n] || 0)) progress[id][n] = Math.min(seen, total);
    writeStore(PROGRESS_KEY, progress);
  }

  // ---------- theme ----------
  function applyTheme(t) {
    if (t === "light" || t === "dark") document.documentElement.setAttribute("data-theme", t);
    else document.documentElement.removeAttribute("data-theme");
    var btn = $("theme");
    var dark = t === "dark" || (!t && window.matchMedia("(prefers-color-scheme: dark)").matches);
    btn.setAttribute("aria-pressed", dark ? "true" : "false");
    btn.textContent = dark ? "Light mode" : "Dark mode";
  }
  function initTheme() {
    applyTheme(readStore(THEME_KEY, null));
    $("theme").addEventListener("click", function () {
      var dark = $("theme").getAttribute("aria-pressed") === "true";
      var next = dark ? "light" : "dark";
      writeStore(THEME_KEY, next);
      applyTheme(next);
    });
  }

  // ---------- data ----------
  function getJSON(url) {
    return fetch(url, { credentials: "same-origin" }).then(function (r) {
      if (!r.ok) throw new Error(r.status);
      return r.json();
    });
  }
  function loadThread(entry) {
    if (entry.id in threads) return Promise.resolve(threads[entry.id]);
    return getJSON(entry.path + "?v=" + entry.v)
      .then(function (t) { threads[entry.id] = t; return t; })
      .catch(function () { threads[entry.id] = null; return null; });
  }

  // ---------- library ----------
  function el(tag, attrs, text) {
    var e = document.createElement(tag);
    if (attrs) for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (text != null) e.textContent = text;
    return e;
  }

  function threadText(entry) {
    var parts = [entry.title, entry.subtitle, (entry.tags || []).join(" ")];
    var t = threads[entry.id];
    if (t) t.episodes.forEach(function (ep) {
      parts.push(ep.title, ep.hook, ep.callback || "", ep.setup || "");
      parts.push.apply(parts, ep.cards);
    });
    return parts.join(" ").toLowerCase();
  }

  function renderChips() {
    var tags = [];
    library.forEach(function (e) { (e.tags || []).forEach(function (t) { if (tags.indexOf(t) < 0) tags.push(t); }); });
    tags.sort();
    var ul = $("chips");
    ul.textContent = "";
    [null].concat(tags).forEach(function (tag) {
      var li = el("li");
      var b = el("button", { type: "button", "aria-pressed": String(activeTag === tag) }, tag || "All");
      b.addEventListener("click", function () { activeTag = tag; renderChips(); renderLibrary(); });
      li.appendChild(b);
      ul.appendChild(li);
    });
  }

  function renderLibrary() {
    var list = $("library");
    list.textContent = "";
    var words = query.toLowerCase().split(/\s+/).filter(Boolean);
    var shown = library.filter(function (e) {
      if (activeTag && (e.tags || []).indexOf(activeTag) < 0) return false;
      var hay = threadText(e);
      return words.every(function (w) { return hay.indexOf(w) >= 0; });
    });
    shown.forEach(function (entry) { list.appendChild(renderThread(entry)); });
    var msg = shown.length === 1 ? "1 thread" : shown.length + " threads";
    $("status").textContent = shown.length ? msg + " shown." : "No threads match. Try a different word, or choose All.";
    $("empty").hidden = shown.length > 0;
  }

  function renderThread(entry) {
    var t = threads[entry.id];
    var art = el("article", { "class": "thread", "aria-labelledby": "t-" + entry.id });
    art.appendChild(el("h2", { id: "t-" + entry.id }, entry.title));
    art.appendChild(el("p", { "class": "sub" }, entry.subtitle));
    var have = t ? t.episodes.length : 0;
    var meta = (entry.tags || []).join(" · ");
    meta += (meta ? " · " : "") + have + " of " + entry.planned + " episodes available";
    art.appendChild(el("p", { "class": "meta" }, meta));
    if (!t) {
      art.appendChild(el("p", { "class": "empty" }, "This thread is not available to read here just now."));
      return art;
    }
    var ol = el("ol", { "class": "episodes", "aria-label": "Episodes of " + entry.title });
    t.episodes.forEach(function (ep) {
      var total = ep.cards.length + 1;
      var seen = epProgress(entry.id, ep.n);
      var state = seen >= total ? "Read" : seen > 0 ? "Card " + seen + " of " + total : total + " cards";
      var li = el("li");
      var b = el("button", { type: "button", "data-ep": entry.id + "/" + ep.n });
      b.appendChild(el("span", null, ep.n + ". " + ep.title));
      b.appendChild(el("span", { "class": "state" }, state));
      b.addEventListener("click", function () {
        var start = seen > 0 && seen < total ? seen - 1 : 0;
        openEpisode(entry.id, ep.n, start, b);
      });
      li.appendChild(b);
      ol.appendChild(li);
    });
    for (var n = have + 1; n <= entry.planned; n++) {
      ol.appendChild(el("li", { "class": "coming" }, n + ". Still being written"));
    }
    art.appendChild(ol);
    return art;
  }

  // ---------- reader dialog ----------
  function cardsFor(ep) {
    // Card zero carries the callback (if any) with the hook; the setup closes the episode.
    var list = [{ kind: "zero" }];
    ep.cards.forEach(function (c) { list.push({ kind: "card", text: c }); });
    if (ep.setup) list[list.length - 1].setup = ep.setup;
    return list;
  }

  function openEpisode(id, n, i, from) {
    var t = threads[id];
    if (!t) return;
    var ep = t.episodes.filter(function (e) { return e.n === n; })[0];
    if (!ep) return;
    if (from !== undefined) opener = from && from.getAttribute("data-ep");
    view = { thread: t, ep: ep, i: i || 0, cards: cardsFor(ep) };
    $("r-thread").textContent = t.title;
    $("r-title").textContent = "Episode " + ep.n + ": " + ep.title;
    var dlg = $("reader");
    if (!dlg.open) dlg.showModal();
    renderCard();
    $("next").focus();
  }

  function renderCard() {
    var c = view.cards[view.i], ep = view.ep, total = view.cards.length;
    var box = $("r-card");
    box.textContent = "";
    if (c.kind === "zero") {
      if (ep.callback) box.appendChild(el("p", { "class": "callback" }, ep.callback));
      box.appendChild(el("p", null, ep.hook));
    } else {
      box.appendChild(el("p", null, c.text));
      if (c.setup) {
        box.appendChild(el("p", { "class": "setup-label" }, "Next time"));
        box.appendChild(el("p", null, c.setup));
      }
    }
    $("r-count").textContent = "Card " + (view.i + 1) + " of " + total;
    $("r-bar").style.width = ((view.i + 1) / total * 100) + "%";
    $("prev").disabled = view.i === 0;
    var last = view.i === total - 1;
    var nextEp = nextEpisode();
    $("next").textContent = !last ? "Next card" : nextEp ? "Next episode" : "Finish";
    markSeen(view.thread.id, ep.n, view.i + 1, total);
    try { history.replaceState(null, "", "#" + view.thread.id + "/" + ep.n + "/" + (view.i + 1)); } catch (e) { /* ignore */ }
  }

  function nextEpisode() {
    var eps = view.thread.episodes;
    var idx = eps.indexOf(view.ep);
    return eps[idx + 1] || null;
  }

  function step(d) {
    if (!view) return;
    var j = view.i + d;
    if (j < 0) return;
    if (j >= view.cards.length) {
      var ne = nextEpisode();
      if (ne) { openEpisode(view.thread.id, ne.n, 0); return; }
      $("reader").close();
      return;
    }
    view.i = j;
    renderCard();
  }

  function initReader() {
    var dlg = $("reader");
    $("prev").addEventListener("click", function () { step(-1); if ($("prev").disabled) $("next").focus(); });
    $("next").addEventListener("click", function () { step(1); });
    $("close").addEventListener("click", function () { dlg.close(); });
    dlg.addEventListener("keydown", function (e) {
      if (e.target.tagName === "BUTTON" && (e.key === " " || e.key === "Enter")) return;
      if (e.key === "ArrowRight") { e.preventDefault(); step(1); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); step(-1); }
    });
    // Keep Tab inside the dialog (showModal makes the page inert; this also wraps focus).
    dlg.addEventListener("keydown", function (e) {
      if (e.key !== "Tab") return;
      var f = Array.prototype.filter.call(dlg.querySelectorAll("button"), function (b) { return !b.disabled; });
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });
    dlg.addEventListener("close", function () {
      view = null;
      try { history.replaceState(null, "", location.pathname + location.search); } catch (e) { /* ignore */ }
      renderLibrary();
      var back = opener && document.querySelector('[data-ep="' + opener + '"]');
      if (back) back.focus();
      else { var h = $("main-title"); h.setAttribute("tabindex", "-1"); h.focus(); }
    });
  }

  function openFromHash() {
    var m = /^#([a-z0-9-]+)\/(\d+)(?:\/(\d+))?$/.exec(location.hash);
    if (!m || !threads[m[1]]) return;
    var ep = threads[m[1]].episodes.filter(function (e) { return e.n === Number(m[2]); })[0];
    if (!ep) return;
    var i = Math.max(0, Math.min(Number(m[3] || 1) - 1, ep.cards.length));
    openEpisode(m[1], ep.n, i, null);
  }

  // ---------- start ----------
  function init() {
    initTheme();
    initReader();
    $("q").addEventListener("input", function () { query = this.value; renderLibrary(); });
    getJSON(INDEX_URL)
      .then(function (idx) {
        library = idx.threads || [];
        return Promise.all(library.map(loadThread));
      })
      .then(function () { renderChips(); renderLibrary(); openFromHash(); })
      .catch(function () {
        $("status").textContent = "The cards could not be loaded just now. Please try again in a moment.";
      });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
