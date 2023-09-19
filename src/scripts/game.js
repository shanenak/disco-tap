import { DIM_X, DIM_Y } from "./constants";
import Animate from "./animate";

class Game {
    constructor(ctx) {
        this.ctx = ctx
        this.showInstructions()
        this.setupBoard()
    }
    showInstructions() {
        document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
            closePopup();
        }
        });

        function closePopup() {
        const popup = document.getElementById('popup');
        popup.style.display = 'none';
        }

        // Display the popup at the start of the game
        window.onload = function() {
        const popup = document.getElementById('popup');
        popup.style.display = 'block';
        };
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