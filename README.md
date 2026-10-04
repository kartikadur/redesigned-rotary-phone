# Neon Snake

A compact browser game built with Phaser 3, TypeScript, Vite, and a DOM-based interface.

This repository is intentionally a small game only. It does not contain the Famobi SDK, analytics, a backend, or a dashboard.

## Gameplay

- Clear three increasingly fast levels.
- Eat the required number of fruit to advance.
- Avoid walls, your own trail, and level obstacles.
- Pause, resume, retry, or return to the main menu.
- Unlock levels, retain a best score, and restore mute preferences between sessions.
- Hear lightweight procedural sound effects without external audio assets.
- Play with arrow keys, WASD, swipe gestures, or the on-screen direction pad.

## Run locally

Requirements: Node.js 22 or newer and pnpm.

```bash
pnpm install
pnpm dev
```

Then open the local URL printed by Vite.

## Checks

```bash
pnpm check
pnpm build
pnpm preview
```

## Project structure

```text
src/
├── application/
│   ├── GameController.ts
│   └── gameEvents.ts
├── core/
│   ├── audio/
│   │   └── GameAudio.ts
│   ├── events/
│   │   └── EventBus.ts
│   └── storage/
│       └── GameStorage.ts
├── game/
│   ├── input.ts
│   ├── levels.ts
│   ├── scenes/
│   │   └── SnakeScene.ts
│   ├── snakeGame.ts
│   └── types.ts
├── main.ts
└── style.css
```

The game simulation remains independent from Phaser. An application controller coordinates commands, persistence, audio, and domain events. The Phaser scene adapts simulation state into graphics and input, while the HUD and menus remain accessible DOM elements.

Player preferences, the best score, completed runs, and unlocked levels are saved locally. Audio is generated in the browser without external media files.

The included workflow builds and deploys the game whenever the default branch is updated.

## License

MIT

## Notes
- Added an `index.d.ts` file so TypeScript would stop complaining about the `GameInterface` object on the window object.
- everything should work as is, out of the box, as described above.
- haven't stress tested the game, nor have I completed it since my reflexes aren't great for games like these. I've instead opted to create a script in the nodejs backend server that will auto generate data for use in the React frontend.

## Next Step
In the interest of time boxing the effort of integrating the SDK, the following steps are yet to be implemented or implemented only partially
- Implement loading indicator for when the scripts are loading
- Implement tracking game start, while game ready and resume are being tracked. I'm not actively using any of these, so all of them could technically be removed.
- The Game documentation suggests passing scripts to the `GameInterface.init` function, but that would break the loading process as well as the game, hence the current proces where I manually import the modules once the `GameInterface` object is available. Short of changing multiple things in the development environment I am at least currently unaware how best to handle it, so for now I've left it as is, in the interest of time.
- had to use `uuid` lib to create unique id for users, ideally this would be handled by the authz/authn system once it is implemented for production.
