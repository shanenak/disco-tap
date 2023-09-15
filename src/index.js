import Game from "./scripts/game";

const canvasEl = document.getElementById("canvas")
canvasEl.width = Game.DIM_X;
canvasEl.height = Game.DIM_Y;

const ctx = canvasEl.getContext("2d");
const game = new Game(ctx);
// new GameView(game,ctx).start();
