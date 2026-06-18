# Paper Tuss 🏀📄

## Game Info
- **Play URL**: https://autumn-satellite-777.higgsfield.gg/
- **Game ID**: b3421f4f-bd85-43da-9cd0-0227ee926e6d
- **Created**: 2026-06-18

## How to Play
1. Click/tap and drag BACK from the paper ball to set direction and power
2. Release to toss the paper toward the trash can
3. Watch out for the fan's wind — it pushes the paper sideways!
4. Score 3 baskets to level up and unlock harder rooms
5. You have 10 throws per game

## Levels
1. **Easy Office** — light wind
2. **Busy Office** — medium wind
3. **Corner Office** — strong wind
4. **The Challenge** — very strong wind

## Tech Stack
- Canvas-based HTML5 game (no frameworks)
- Higgsfield AI-generated assets (Nano Banana 2)
- Runtime key-color removal (magenta → transparent)
- Physics-based projectile with wind mechanics
- LocalStorage for high score persistence
- Responsive: desktop + mobile touch

## Assets
All generated via Higgsfield MCP Nano Banana 2 model:
- paper-ball, trash-can, desk-fan sprites (1:1)
- office background (16:9)
- Card images: thumbnail (16:9), favicon (1:1)

## To Update
To push updates, re-zip, re-upload, and call deploy_game with game_id:
`b3421f4f-bd85-43da-9cd0-0227ee926e6d`
