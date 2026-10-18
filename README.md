# PIP’S HIDDEN TOWN

An original, buildless spot-the-difference game. Pip is a fox detective with round ears, a looking-glass tail and one striped sock. Original SVG scenery and locally synthesized marimba music; no external fonts, libraries, recordings or art downloads.

12 scenes / six neighborhoods, five differences per scene, no timer or penalties, unlimited cycling hints, synchronized zoom panels, local progress, Japanese and English. Each pair uses identical background rendering; only the five bounded search objects change. Any scene is available from the town passport. Replaying a scene resets its five finds while keeping completed passport stamps.

Run `node serve.cjs` then visit http://127.0.0.1:4201/. Run `node --test tests.cjs` for target separation, pair generation, completion and save sanitization checks. Deploy the root files with GitHub Pages (main / root). No build step. Save key: `pips-hidden-town-v1`.

iPhone Safari: tap start to enable audio; compare both images; tap five differences; test hints and zoom panning; close/reopen and continue; rotate phone; switch language; background the tab and verify music stops; tap after returning to resume audio. Check mute switch/device volume if silent. Windows: same flows with mouse; Tab reaches search areas; Escape closes dialogs. Small-screen layout permits normal page scrolling.

This is a browser test release, not a certified YouTube Playables submission. Before platform submission: add/validate the official SDK lifecycle, first-frame and ready callbacks, host audio, cloud progress, pause/resume, offline/network restrictions and package limits; run the official test suite in an approved developer environment. No SDK script or platform approval is claimed in this build. Existing nine game repositories are unchanged.

## Variety release (v2)
The current page uses engine-v2.js and scenes.js in addition to the original mascot art module. Twelve distinct compositions replace the repeated town street: kitchen, rooftop café, lighthouse quay, captain’s cabin, glasshouse, picnic park, covered arcade, night stall, sorting room, cloud airfield, carousel and observatory. Each scene has 16 seeded curios, five of which differ in a subtle detail (hand direction, stitching, leaf veins, shell ridges, label marks, etc.). Replaying or choosing New arrangement generates a new seed, object mix and five targets. Reloading preserves the seed and exact puzzle.

The existing save key is retained. Version-1 saves keep completed passport stamps, language and sound preferences; old in-progress answer positions are cleared because the artwork changed. Version-2 saves retain the seed and partial finds. Before-change backup: PIPS-HIDDEN-TOWN-before-variety.zip outside this repository.

Current checks: node --test variety-tests.cjs music-tests.cjs. Tests verify 288 generated pairs contain exactly five changed curios and identical backgrounds, deterministic restore, replay variation, all twelve distinct backgrounds and save migration. Original tests.cjs targets the archived v1 engine.
