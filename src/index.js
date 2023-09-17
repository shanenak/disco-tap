import Game from "./scripts/game";
import { DIM_X, DIM_Y } from "./scripts/constants";

const canvasEl = document.getElementById("canvas")
canvasEl.width = window.innerWidth // DIM_X;
canvasEl.height = window.innerHeight //DIM_Y ;

const ctx = canvasEl.getContext("2d");
const game = new Game(ctx);
