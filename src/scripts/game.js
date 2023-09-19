import { DIM_X, DIM_Y } from "./constants";
import Animate from "./animate";

class Game {
    constructor(ctx) {
        this.ctx = ctx
        this.setupBoard()
    }

    setupBoard() {
        this.ctx.clearRect(0,0,DIM_X, DIM_Y)
        // start music
        const animation = new Animate(this.ctx);

        animation.getChoreo.then((res)=> {
            animation.choreo = res;
            animation.startGame()
        })
        // animation.startGame()
    }
    
}

export default Game;