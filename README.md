# PIP’S HIDDEN TOWN

An original, buildless spot-the-difference game. Pip is a fox detective with round ears, a looking-glass tail and one striped sock. Original SVG scenery and locally synthesized marimba music; no external fonts, libraries, recordings or art downloads.

12 scenes / six neighborhoods, five differences per scene, no timer or penalties, unlimited cycling hints, synchronized zoom panels, local progress, Japanese and English. Each pair uses identical background rendering; only the five bounded search objects change. Any scene is available from the town passport. Replaying a scene resets its five finds while keeping completed passport stamps.

Run `node serve.cjs` then visit http://127.0.0.1:4201/. Run `node --test tests.cjs` for target separation, pair generation, completion and save sanitization checks. Deploy the root files with GitHub Pages (main / root). No build step. Save key: `pips-hidden-town-v1`.

iPhone Safari: tap start to enable audio; compare both images; tap five differences; test hints and zoom panning; close/reopen and continue; rotate phone; switch language; background the tab and verify music stops; tap after returning to resume audio. Check mute switch/device volume if silent. Windows: same flows with mouse; Tab reaches search areas; Escape closes dialogs. Small-screen layout permits normal page scrolling.

This is a browser test release, not a certified YouTube Playables submission. Before platform submission: add/validate the official SDK lifecycle, first-frame and ready callbacks, host audio, cloud progress, pause/resume, offline/network restrictions and package limits; run the official test suite in an approved developer environment. No SDK script or platform approval is claimed in this build. Existing nine game repositories are unchanged.
