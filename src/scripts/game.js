import { DIM_X, DIM_Y } from "./constants";
import Animate from "./animate";

class Game {
    constructor(ctx) {
        this.ctx = ctx
        this.showInstructions()
    }
    showInstructions() {
        let that = this;
        document.addEventListener('keydown', function(e) {
            if (e.code === 'Space') {
                e.preventDefault()
                that.closePopup();
            }
        }, {once: true});
        const popup = document.querySelector('.popup');
        popup.style.display = 'block';
    }

    closePopup() {
        this.setupBoard()
        const popup = document.querySelector('.popup');
        popup.style.display = 'none';
    }

    setupBoard() {
        this.ctx.clearRect(0,0,DIM_X, DIM_Y)
        const animation = new Animate(this.ctx);
        animation.getChoreo.then((res)=> {
            animation.choreo = res;
            animation.startGame()
        })
    }
    
}

export default Game;