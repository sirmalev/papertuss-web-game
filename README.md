# Paper Tuss — Web Game 🏀📄

An arcade paper-toss game. Drag back, aim, and toss crumpled paper into the office bin —
while a desk fan blows wind that curves your shot. Chain baskets for combo bonuses.

**Play:** https://autumn-satellite-777.higgsfield.gg/

## Features
- Drag-to-aim physics with a radial power ring and live trajectory preview
- Wind mechanics (fan blows the paper sideways) with ambient wind streaks
- Combo system — consecutive baskets stack bonus points
- Juice: particle bursts, screen shake, screen flash, floating score, spinning paper + trail
- Rim-bounce near-misses
- Procedural WebAudio sound effects + mute toggle (🔊 / `M`)
- 4 progressively harder rooms, persistent best score & best combo (localStorage)
- Responsive: desktop mouse + mobile touch, resolution-independent rendering

## Tech
- Single-file HTML5 Canvas game, no frameworks
- Higgsfield AI-generated sprites (Nano Banana 2) with runtime magenta key-color removal
- Fixed-timestep game loop (60 Hz), DPR-aware canvas

## Files
- `index.html` — the whole game (render, physics, audio, UI)
- `strings.js` — externalized UI strings
- `logic.js` — turn-rules module stub for the apps engine
- `assets/` — generated sprites & background
- `design/assets.csv` — asset manifest
