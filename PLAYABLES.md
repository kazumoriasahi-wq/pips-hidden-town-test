# PIP’S HIDDEN TOWN — Playables integration test

Official SDK loads before game code. Loading passport screen signals firstFrameReady; successful progress/language loading, visible menu and active controls precede gameReady. Failed loading leaves a retry screen and cannot save defaults. Ready calls are idempotent.

Inside Playables, progress uses loadData/saveData exclusively, with serialized writes and revision tracking. The saved record contains schema version, level, completed scenes, found locations and exact random seed. SDK language and audio settings are not stored in cloud data. Language comes from getLanguage (Japanese or English fallback). The game's overall mute and language controls are hidden in hosted mode. Browser mode keeps pips-hidden-town-v1 local saves and the existing controls.

SDK pause freezes timers (including delayed results, marker removal and confetti cleanup), stops music, pauses CSS animation and disables main, dialog and loading controls. Resume restores remaining timer delays and audio permission. Hosted mode does not subscribe to visibility/pagehide/blur events. Browser mode retains its page lifecycle behavior. The optional sendScore API is not used: this untimed puzzle has a passport rather than a competitive score.

Automated checks: platform-tests.cjs, embedded-tests.cjs and music-tests.cjs (9 tests). Scenery tests cover 480 pairs. Browser simulation: ready order, 3/5 cloud record restored after iframe reload, mute/language controls hidden, pause before completion holds result dialog until resume, audio toggle, load failure and retry with existing record preserved. sdk-lab.html and mock-sandbox.html are clearly labeled development-only simulations; production never loads mock-sdk.js. They are excluded from the submission build archive.

Physical iPhone/browser regression remains for user testing. Official suite results and any remaining limitations are recorded with the release artifacts. Test-suite checks are not certification or partner admission. Publishing to YouTube still requires developer access and YouTube's review; this task does not submit an application or accept terms.

References: https://developers.google.com/youtube/gaming/playables/certification/requirements_integration and https://developers.google.com/youtube/gaming/playables/reference/sdk

Manual iPhone steps: open the public test URL, start, find one difference, reload and continue the same picture/1-of-5 state, try hint/zoom/horizontal panning, switch languages, toggle sound, background and return. In the official hosted suite: test mute, pause during the fifth find, resume, reload cloud progress, change host language, test save/load errors. No changes to the other nine game repositories.
