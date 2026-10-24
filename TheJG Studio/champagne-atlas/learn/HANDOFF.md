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
