export const meta = { game: "papertuss", minPlayers: 1, maxPlayers: 1 };

export function setup() {
  return {
    score: 0,
    best: 0,
    throwsLeft: 10,
    paperX: 0.15,
    paperY: 0.85,
    wind: 0.3,
    windDir: -1, // -1 = left, 1 = right
    gameState: "aiming", // aiming | flying | scored | gameover
  };
}

export function validateAction(action, state) {
  if (typeof action !== "object") return { ok: false };
  if (action.type === "toss" && state.gameState === "aiming") return { ok: true };
  if (action.type === "restart") return { ok: true };
  if (action.type === "setWind") return { ok: true, newWind: action.wind };
  return { ok: false };
}

export function applyAction(state, action) {
  if (action.type === "restart") return setup();
  if (action.type === "setWind") return { ...state, wind: action.wind, windDir: Math.random() > 0.5 ? -1 : 1 };
  return state;
}

export function isGameOver(state) {
  return { over: state.gameState === "gameover" || state.throwsLeft <= 0 };
}

export function viewFor(state) {
  return { ...state };
}
