import { DIM_X, DIM_Y } from "./constants";
import Animate from "./animate";
import Canvas from "./canvas";

class Game {
    constructor(ctx) {
        this.ctx = ctx
        console.log('start')
        console.time()
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
        const popup = document.getElementById('popup');
        popup.style.display = 'block';

        // const demoCanvas = document.querySelector("#mini-canvas")
        // demoCanvas.width = DIM_X;
        // demoCanvas.height = DIM_Y*0.5;
        // console.log(demoCanvas.width, demoCanvas.height);
        // const demoCtx = demoCanvas.getContext("2d");
        // const demo = new Canvas(demoCtx);
        // demo.addTargets();
    }

    closePopup() {
        this.setupBoard()
        const popup = document.getElementById('popup');
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