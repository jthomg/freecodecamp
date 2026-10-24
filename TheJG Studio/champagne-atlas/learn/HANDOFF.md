# Bubble Cards — answers for SITE (round 2)

Written 2026-10-24. The earlier handoff follows below these answers.

## 1. Push status

FAILED, on every attempt: to the designated branch, then to `bubble-cards` after James asked.
The exact error, every time:

    remote: Claude doesn't have GitHub access to jthomg/freecodecamp for your organization. An org admin can install the Claude GitHub App at https://github.com/apps/claude/installations/select_target, or reconnect GitHub from claude.ai settings (https://claude.ai/customize/connectors?auth_start=github&auth_start_force=1) to re-link an existing installation
    fatal: unable to access 'https://github.com/jthomg/freecodecamp/': The requested URL returned error: 403

The cloud session pushes through the Claude GitHub App, not through James's credentials. No other
route was tried. If you are reading this file, a later push succeeded.

## 2. Inventory

- **Episodes with a finished card set:** 1. Grand Cru, Premier Cru ep1, "The Words on the Label":
  21 cards plus card zero (the hook). It is still a DRAFT; see section 4.
- **Spine-only episodes:** 7 (eps 2-8 of this thread). The other six threads have no spine, only a
  title.
- **Total cards written:** 21 (22 counting card zero).
- **Reader and hub:** yes.
  - `learn/index.html`: the hub.
  - `learn/cards/index.html`, `cards/reader.css`, `cards/reader.js`: the reader.
  - `learn/cards/threads.json`: the library index.
  - `learn/cards/threads/open/grand-cru-premier-cru.json`: the thread.
  - `learn/cards/threads/held/.gitkeep`: reserved for a future gate.

## 3. The spine, verbatim

These are the titles and one-line hooks as proposed and approved (James: "Spine is fine, go").

1. **The Words on the Label.** "When a champagne label says grand cru, it is telling you about the
   village where the grapes were grown. It is not ranking the house or the wine itself. That
   distinction is the gentlest place to begin."
2. **A Ladder Built to Pay Growers.** "The scale behind those words began as an agreement between
   growers and houses about what a kilo of grapes from each village was worth. Its whole purpose
   was the price."
3. **How the Ladder Moved.** "Ratings were revised several times over the century. Villages climbed,
   the lowest rung rose steadily, and five villages became grand cru as recently as 1985."
4. **Seventeen Villages, Two Characters.** "Most grand cru villages are known for Pinot Noir, a
   handful for Chardonnay. This episode follows what that means for the taste of the wines."
5. **Premier Cru and the Villages in Between.** "Premier cru is a broad band of villages rather than a
   single rung. Most champagne is made from grapes grown outside both tiers."
6. **The Ladder Comes Down.** "Grape prices came to be negotiated freely, and later the scale itself
   was formally retired. The village names survived, and this episode explains why."
7. **What a Cru Cannot Tell You.** "Ratings were given to whole villages, never to individual
   vineyards, and blending is central to champagne. So some of the most celebrated bottles carry
   neither phrase on the label."
8. **Scorecard.** "What has held up, what has been overtaken, and what we left out, with the reasons
   for each."

How each differs from the nearest School session (school.html was NOT read):

1. **The Ladder.** School tastes up the ladder. This episode reads the legal label rule.
2. **The Ladder.** Grape-price economics; no tasting.
3. **The Ladder.** The history of the scale's revisions.
4. **The Place and The Grapes.** WEAK. As worded, "what that means for the taste" IS tasting
   territory. This is a likely duplicate.
5. **The Ladder.** The middle band, and the villages outside both tiers.
6. **The Ladder.** The legal and economic end of the scale.
7. **Growers & Houses and The Lieu-dit.** WEAK. This overlaps on blending and single sites.
8. **The Blind Finale.** That session tests the palate; this one tests the stories.

Said plainly: the whole thread is one subject, the échelle, which is School's session 4,
"The Ladder". It does not mirror all eight headings, but it is a deep version of one session.
Whether that is a complement or a duplicate depends on what school.html's Ladder session already
says, and I did not check. In the same way, the seven-thread library has threads named for School
headings: The Grapes; How Champagne Is Made (≈ The Method + Time); Growers and Houses. Those carry
the same risk.

## 4. The unverified list

This covers episode 1 cards (C1 to C21), the ep1 hook and setup, and the spine hooks (S1 to S8).
"Unverified" means no source was consulted. "Secondary only" means I had a search excerpt, not a
primary text.

**Episode 1 cards**

- **C1:** "cru" derives from croître and means "a growth". Unverified (from memory).
- **C2:** grand cru and premier cru are about origin, not the house. Inference from the label rule.
- **C3:** the rank applies to the whole commune, and every vineyard in it shares it. Secondary only.
- **C4:** a Burgundy grand cru is a single named vineyard, and that vineyard's name is on the label.
  Secondary only (one search summary).
- **C5:** Bordeaux classifications rank estates (châteaux), not villages or vineyards. Unverified.
- **C6:** seventeen grand cru villages; the premier cru list is longer. 17 is secondary (INAO
  excerpt, DGCCRF). "Longer" is safe whatever the 41-44 count turns out to be.
- **C7:** "grand cru" only if EVERY grape comes from the 17. Secondary (UMC, DGCCRF).
- **C8:** grand cru villages may use "premier cru", so a premier cru blend may include grand cru
  grapes. Secondary (UMC, Comité Champagne via a third-party site).
- **C9:** any grape from outside the list removes the phrase. Inference from "exclusivement";
  secondary.
- **C10:** naming a village requires every grape to come from it. Secondary (cahier excerpt).
  Ambonnay and Avize are both grand cru villages; secondary list.
- **C11:** "cru classé" is not permitted in Champagne. Secondary (excerpt attributed to the
  DGCCRF/UMC).
- **C12:** the échelle gave EACH of Champagne's wine-growing villages a number. A completeness claim,
  secondary only (Taittinger's 17/44/258 split). Unverified as complete.
- **C13:** grand cru 100%; premier cru 90-99%. Secondary. The UMC frames premier cru as 90-100
  inclusive.
- **C14:** "every other village was rated somewhere in the eighties". TRUE ONLY OF THE FINAL SCALE;
  earlier floors were lower (22.5% or 46% in the sources), and the card does not say "final".
  "Those numbers never appeared on a bottle": UNVERIFIED. "For a long time they shaped the life of
  every vineyard": an unverified causal claim.
- **C15:** the scale was retired and the phrases are still in use. Secondary. No date is given, on
  purpose.
- **C16:** the rank is shared by every grower and slope in the village. Follows from C3.
- **C17:** some growers and writers say sites outside the top villages equal them. Secondary (critic
  quotes in search results).
- **C18:** many great houses blend across villages; assemblage keeps a style consistent year to
  year. Unverified, and the "because" is a causal claim.
- **C19:** a blend can hold grand cru grapes yet carry no cru. Follows from C7.
- **C20:** "very often it means the winemaker chose to draw on more than one place". Unverified
  frequency claim.
- **C21:** a promise about origin. A restatement.
- **Hook:** no specifics.
- **Setup:** the scale began with grape prices. Secondary (several sources).

**Spine hooks**

- **S2:** "an agreement between growers and houses"; "its whole purpose was the price". Secondary;
  "whole purpose" is a flourish.
- **S3:** "revised several times"; "the lowest rung rose steadily" (whether it was steady is
  unverified); "five villages … 1985". Secondary, from Wikipedia via excerpt.
- **S4:** "most grand cru villages are known for Pinot Noir, a handful for Chardonnay". Unverified
  count.
- **S5:** "most champagne is made from grapes grown outside both tiers". Unverified (the area shares
  conflict).
- **S6:** "prices came to be negotiated freely, and later the scale was formally retired". The order
  is secondary; the dates conflict.
- **S7:** "never to individual vineyards"; "some of the most celebrated bottles carry neither
  phrase". Unverified.

## 5. Sources

All of these were seen only as search-result excerpts. The network policy blocked fetching any of
the pages.

- **INAO cahier des charges:**
  - https://extranet.inao.gouv.fr/fichier/PNOCDCAOC-Champagne-20190619.pdf
  - https://extranet.inao.gouv.fr/fichier/CDCPNOChampagne20240911.pdf
  - https://www.sgv-champagne.fr/wp-content/uploads/2023/01/Cahier-des-charges-AOC-Champagne.pdf
  - Used for: the list of 17 grand cru communes, the premier cru list's existence, and the
    commune-name rule.
- **DGCCRF:**
  - https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/champagne-connaitre-le-langage-des-etiquettes
  - https://artois.ufcquechoisir.fr/wp-content/uploads/sites/115/2023/08/DGCCRF-74-champagne-Décembre-2022.pdf
  - Used for: 17 grand cru and 42 premier cru, and "cru classé" being forbidden.
- **UMC:** https://maisons-champagne.com/fr/encyclopedies/histoire-du-champagne/deuxieme-partie-connaissance-du-champagne/chapitre-6-l-appellation-d-origine-controlee/article/la-definition-et-la-legislation-de-l-appellation
  - Used for: grand cru meaning grapes exclusively from 100% communes, and premier cru covering 90-100
    inclusive.
- **Décret n° 2010-1441 du 22 novembre 2010:** https://www.legifrance.gouv.fr/loda/id/JORFTEXT000023126020
  - Title only; not read.
- **Wikipedia (EN and FR), Classification of Champagne vineyards:**
  - Used for: the 1985 promotions (Chouilly, Le Mesnil-sur-Oger, Oger, Oiry, Verzy) and the 2010
    retirement.
- **BKWine, GuildSomm (Tom Stevenson), Taittinger, Cavesa, wine-law.org:**
  - Used for: the origins, the end of the pricing mechanism, and the 17/44/258 split.

The load-bearing numbers:

1. 17 grand cru villages: secondary, but consistent across every source.
2. The scale bands of 100 / 90-99 / 80-89: final scale only.
3. The premier cru village count: UNRESOLVED (41/42/43/44).
4. When fixed grape pricing ended: UNRESOLVED (1990 / 2003-04 / 2010). This may contradict the
   Atlas's own "2010" wording.
5. The scale's origin year: UNRESOLVED (1911 / 1919 / 1927). The 1985 promotions are secondary but
   consistent.

## 6. Atlas links

None in any card or thread JSON. The only site links are page chrome:

- **Hub (`learn/index.html`):** `/guide.html`, `cards/` (relative), `/school.html`, `/` (twice),
  `/privacy.html`, `/accessibility.html`.
- **Reader (`learn/cards/index.html`):** `/learn/` (twice), `/`, `/privacy.html`,
  `/accessibility.html`.

No /atlas/, /montagne/, /sheets.html, /<sector>/ or lat/lng/z links, and no external anchors.

## 7. The reader's dependencies

- **Loaded:** `reader.css?v=…`, `reader.js?v=…` and, via fetch, `threads.json?v=…` and
  `threads/open/grand-cru-premier-cru.json?v=…`. All are same-origin and relative.
- **Fonts:** none are loaded. The CSS names system fonts only (Georgia, "Iowan Old Style",
  "Palatino Linotype", serif). It does NOT load /fonts/fonts.css, because I did not know the
  family names or its ?v= key.
- **Not loaded:** no libraries, no images, no CDN, no Google Fonts, no external URLs.
- **Storage:** localStorage keys `bc:theme` and `bc:progress`, inside try/catch.
- **Test result:** zero foreign requests in a local Chromium test, checked by watching requests in
  Playwright, not with Chrome's net log.

## 8. Tag

- **The set:** I proposed History / Place / Craft / Trade / Myth and asked. James replied "ID and
  taxes are fine", which I took to mean "tags". That approves the SET, not the assignment to this
  thread.
- **This thread:** I chose ["Place", "Trade"] myself. James did not approve that assignment.

## 9. What I assumed

- The Reference Guide is `/guide.html`. James said it exists but gave no path.
- `/school.html`, `/privacy.html` and `/accessibility.html` are at the site root, and the Atlas is
  at `/`.
- school.html's "The Ladder" session covers the échelle. Assumed from its title only.
- The hub's description of the School ("Eight tasting sessions, each a flight of wines with a little
  homework in the Atlas") comes from the brief, not from the page.
- The Reference Guide description on the hub was written without seeing the guide.
- `planned` is an integer: the number of episodes planned.
- Cards are plain strings with no link markup. I never saw the Threads reader at
  thejg.studio/learn/, so its data conventions (for example, how cards carry links) are unknown and
  possibly different.
- Adding `path` and `v` to the threads.json entries is acceptable. I never saw the reference
  threads.json schema.
- The visual design (palette, system serif) is mine. I did not match the Atlas's look; I never saw
  it.
- The focus-ring colour (#0b4f9c light, #9fd2ff dark) has not been measured for contrast against the
  Atlas's surfaces.
- None of the Atlas's data, structure or coverage was used or assumed in the cards: no village
  counts, vineyard counts, sectors, Larmat colours or clos.
- The seven-thread library was not checked against the existing Threads library or against
  school.html for overlap.

## 10. What I would do next with the files

1. Read school.html's Ladder, Place, Grapes and Growers sessions. Then revise or replace eps 4 and 7,
   and decide whether this thread complements session 4 or duplicates it.
2. Resolve the five load-bearing numbers from primary texts (the cahier des charges, the 2010
   décret, the UMC and CIVC histories), then fix C14 and the unverified cards listed above.
3. Run predeploy.py (read-only). Wire /fonts/fonts.css and the site chrome, or hand the shell to
   SITE to rebuild. Add the COMMS.md row.

Stopped. No more cards until SITE has checked the spine against school.html and James has confirmed
it is not a duplicate.

---

# Bubble Cards — handoff from the cloud session

Written 2026-10-24 for SITE. Branch: `claude/chalk-sea-champagne-atlas-exxb9g`
on `jthomg/freecodecamp`. Everything lives under `TheJG Studio/champagne-atlas/learn/`.

This session ran in a cloud container. It never saw school.html, villages.html,
predeploy.py, CHANGE-CHECKLIST.md, PROTOCOL.md, COMMS.md or the project memories,
and it could not reach thechalksea.com. The ship-gate items that depend on those
were not run.

## Decisions James made in this window

- **Library: seven threads** (confirmed). Each has 8 episodes, and episode 8 is always the scorecard.
  1. Grand Cru, Premier Cru
  2. How Champagne Is Made (absorbs time on the lees, rosé, the science of the bubble)
  3. The Grapes
  4. From Label to Glass (sweetness, producer codes, vintage, serving myths)
  5. Growers and Houses (absorbs prestige cuvées)
  6. Champagne Understood (history, absorbs the wars and the fight over the name)
  7. Champagne and the World (rivals and climate)
- **No thread about the map.** In James's words: "people wanna learn champagne, not the map".
- **First thread: Grand Cru, Premier Cru.** Its 8-episode spine is APPROVED ("Spine is fine, go").
- **Ids and tags.** The id `champagne-understood` is approved for the history thread. This thread uses
  `grand-cru-premier-cru`. Approved tag set: History / Place / Craft / Trade / Myth.
- **Reels: ignore entirely** ("ignore reels from now"). No slot is built for them.
- **Reference Guide** is already built and part of the site. The hub links it as `/guide.html`
  (an assumption; please confirm the path).
- **Standing rules: accuracy and voice.** See EDITORIAL.md. The voice is warm, welcoming and in full
  sentences, NOT short and quippy. That overrides the house cadence where the two conflict.

## Pending with James

- **Voice and card length.** Episode 1 averages about 28 words a card (median 28, max 32), against
  the house median of 23-24. James has not yet said whether to keep the warmer, longer register or
  tighten toward 24.
- **Episodes 2-8.** None written yet. Writing waits for that answer, and for primary-source
  access (see Research).

## Approved spine: Grand Cru, Premier Cru

Each episode, with the School session nearest to it and how the episode differs.

1. **The Words on the Label.** What grand cru and premier cru legally promise. Nearest: The Ladder.
   School tastes wines up the ladder; this reads the label rule (village origin, the 100%
   requirement, no "cru classé").
2. **A Ladder Built to Pay Growers.** The échelle as a grape-price agreement. Nearest: The Ladder.
   This is the economic origin, with no tasting.
3. **How the Ladder Moved.** The revisions, the rising floor, the five villages promoted in 1985.
   Nearest: The Ladder. This is the history of the scale itself.
4. **Seventeen Villages, Two Characters.** Pinot Noir and Chardonnay grand crus. Nearest: The Place
   and The Grapes. This is the highest duplication risk. The episode explains why the top ratings
   cluster by grape and region; it is not a tasting of them.
5. **Premier Cru and the Villages in Between.** The 90-99 band, and the villages outside both tiers.
   Nearest: The Ladder.
6. **The Ladder Comes Down.** The end of the fixed grape price, and the formal retirement of the
   scale. Nearest: The Ladder. This is the legal and economic ending.
7. **What a Cru Cannot Tell You.** Village-level ratings, blending, and great wines with no cru on
   the label. Nearest: Growers & Houses and The Lieu-dit. This argues the limits of the label rather
   than tasting single sites.
8. **Scorecard.** What held, what was superseded, and what was excluded. Nearest: The Blind Finale.
   That session tests the palate; this one tests the stories.

Honest note: as a whole, this thread sits on the same subject as School's "The Ladder". The
difference is the form, a reading argument against a tasting session. SITE should check it against
school.html, which this session never saw.

## Files

| Path | State |
|---|---|
| `EDITORIAL.md` | Done. The standing rules (accuracy, voice) and the library. |
| `HANDOFF.md` | This file. |
| `index.html` | Hub. Done, but needs the Atlas's look (fonts.css, header and footer). |
| `cards/index.html`, `cards/reader.css`, `cards/reader.js` | Reader. Working; SITE may rebuild it. |
| `cards/threads.json` | Library index: id, title, subtitle, tags, planned, path, and `v` (the file's cache key). |
| `cards/threads/open/grand-cru-premier-cru.json` | Episode 1 only, in draft. `planned: 8`. |
| `cards/threads/held/` | Empty. Reserved so a future gate can be applied by path. |

Notes on the reader:

- **Data format.** The thread JSON uses the locked format exactly. Every episode carries
  `n, title, hook, callback, cards, setup`, checked by set-equality.
- **Card zero** is the callback (when there is one) plus the hook. The setup is shown on the last card
  under "Next time".
- **Separate fetches.** The reader fetches `threads.json` and then each thread file separately. A
  thread that is refused (403) shows as "not available to read here just now", so the gate story
  works. No card text is in any HTML.
- **Cache keys** are the first 10 hex characters of each file's sha256. The chain runs thread JSON →
  its `v` in threads.json → threads.json key in reader.js → reader.js/css keys in the HTML.
- **Links.** None of the cards contain links, so there are no Atlas deep links to verify yet. The hub
  links `/guide.html`, `/school.html`, `/`, `/privacy.html` and `/accessibility.html`, all
  root-relative. There are no external anchors anywhere.
- **No outside requests.** No fonts, CDNs or embeds; the fonts are system fallbacks only. It still
  needs /fonts/fonts.css with the correct ?v= key.
- **Local test.** Tested on a threaded local server with Chromium, at 390px light and 1100px dark.
  There was no horizontal scroll; every target was at least 44px; the focus ring is a 3px solid
  outline in a blue that is not gold. The keyboard path goes through all 22 cards. The dialog uses
  `<dialog>` with showModal: Tab is trapped, Escape closes it, and focus returns to the episode
  button. Deep links take the form `#<id>/<ep>/<card>`. There were zero foreign requests and zero
  console errors.
- **Not run:** predeploy.py, the Atlas link 200 checks, a real-browser read on the server.

## Research and verification (episode 1)

The container's network policy blocked primary sources (INAO, Légifrance, champagne.fr, Wikipedia).
All research is secondary, from search excerpts. Every claim needs a primary check before shipping.
The full verification record is in the commit message of 1729490. In summary:

- **Used on cards, with sources:**
  - 17 grand cru communes (INAO cahier des charges via excerpt; DGCCRF 2022).
  - "Grand cru" requires 100% of the grapes from grand cru communes (UMC encyclopedia; DGCCRF).
  - 100% communes may also use "premier cru" (UMC; Comité Champagne).
  - A named commune requires all its grapes from that commune (cahier des charges excerpt).
  - "Cru classé" is forbidden in Champagne (DGCCRF/UMC).
  - In the final scale: grand cru 100, premier cru 90-99, others 80-89.
  - Burgundy ranks a vineyard; Champagne ranks a village.
- **Kept OFF the cards, because the sources conflict:**
  - the premier cru count (41/42/43/44; DGCCRF says 42). A guess, unverified: 42 plus Chouilly and
    Tours-sur-Marne as split-rated villages makes 44.
  - the year the scale began (1911, 1919 or 1927).
  - the lowest original rating (22.5% or 46%).
  - the split ratings for Tours-sur-Marne and Chouilly.
  - the grand cru and premier cru shares of the vineyard area.
- **Possible Atlas error, raised for SITE: "abolished as a pricing mechanism in 2010."**
  Secondary sources say the fixed grape price ended earlier: 1990 (BKWine), or 2004 under EU
  competition law (Cavesa, wine-law.org, Wikipedia excerpt). Taittinger implies the scale was in use
  until 2003. 2010 looks like the formal retirement of the scale itself, via décret n° 2010-1441 of
  22 November 2010 relating to the AOC Champagne. If that holds, the Atlas's wording conflates the
  two. SITE should verify this against a primary source before changing anything; this session did
  not touch any Atlas file.

## Not done

- **COMMS.md row** (file not available). Suggested text:
  `| BUBBLE CARDS | TheJG Studio/champagne-atlas/learn/ | Cloud session. Hub + card reader + threads. Does not deploy; hands off to SITE. Never runs predeploy.py --accept. |`
- **predeploy.py**, the Atlas fonts and the site header/footer, and a check against school.html.
- **Episodes 2-8** of Grand Cru, Premier Cru, and the other six threads.
