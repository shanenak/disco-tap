import Game from "./scripts/game";
import { DIM_X, DIM_Y } from "./scripts/constants";

const canvasEl = document.getElementById("canvas")
canvasEl.width = DIM_X;
canvasEl.height = DIM_Y - 300;

var parentStyle = canvasEl.parentElement.style;
parentStyle.textAlign = "center";


const ctx = canvasEl.getContext("2d");
const game = new Game(ctx);
