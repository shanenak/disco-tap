import {addTargets, createArrow} from "./target";
import { DIM_X, DIM_Y } from "./constants";
import Animate from "./animate";

class Game {
    constructor(ctx) {
        this.ctx = ctx
        this.animate = new Animate(ctx, this);
        this.setupBoard()
    }

    setupBoard() {
        this.ctx.clearRect(0,0,DIM_X, DIM_Y)
        // start music
        this.animate.startGame()
    }
    
}

export default Game;