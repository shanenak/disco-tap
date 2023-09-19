import { DIM_X, DIM_Y } from "./constants";
import Animate from "./animate";

class Game {
    constructor(ctx) {
        this.ctx = ctx
        this.showInstructions()
    }
    showInstructions() {
        let that = this;
        document.addEventListener('keydown', function(event) {
            if (event.code === 'Space') {
                that.closePopup();
            }
        });
        const popup = document.getElementById('popup');
        popup.style.display = 'block';
    }

    closePopup() {
        const popup = document.getElementById('popup');
        popup.style.display = 'none';
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
    }
    
}

export default Game;