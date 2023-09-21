import { DIM_X, DIM_Y, ARROW_WIDTH, ARROW_HEIGHT } from "./constants";
import Animate from "./animate";
import Arrow from "./arrow";

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
                that.closeInstructions();
            }
        }, {once: true});

        const startButton = document.querySelector('#start-game')
        startButton.addEventListener('click', that.closeInstructions.bind(that))

        const instructions = document.querySelector('.instructions');
        instructions.style.display = 'block';

        const demoCanvas = document.querySelector('#demo-canvas')
        this.demoCtx = demoCanvas.getContext("2d");
        this.demoArrow = new Arrow(this.demoCtx, 'r', [10, 50]);
        
        document.addEventListener("keydown", this.rightKeyTap.bind(this))
        this.interval = setInterval(this.drawDemoArrow.bind(this),20) 
        
    }

    drawDemoArrow() {
        this.demoCtx.clearRect(0,0,DIM_X, DIM_Y)
        this.demoArrow.targetCircle();
        const imageObject = this.demoArrow.getImage()
        let that = this;
        imageObject.onload = function () {
            that.demoCtx.drawImage(imageObject, ...that.demoArrow.coords, imageObject.width, imageObject.height)
        };
    }
    rightKeyTap(event) {
        if (event.key==="ArrowRight") {
            event.preventDefault()
            this.demoArrow.pressed = 5;
        }
    }

    closeInstructions() {
        clearInterval(this.interval)
        this.setupBoard()
        const instructions = document.querySelector('.instructions');
        instructions.style.display = 'none';
    }

    setupBoard() {
        this.ctx.clearRect(0,0,DIM_X, DIM_Y)
        this.animation = new Animate(this.ctx);
        this.animation.getChoreo.then((res)=> {
            this.animation.choreo = res;
            this.animation.startGame()
        })
        this.animation.music.audio.addEventListener("ended", this.endGame.bind(this))
    }

    endGame() {
        if (typeof this.animation.interval !== 'undefined') clearInterval(this.animation.interval);

        this.showResults()
        this.updateResults()
    }

    updateResults() {
        const score =  this.animation.canvas.score;
        const possPoints = this.animation.possPoints;

        const finalScoreDiv = document.querySelector('.final-score')
        finalScoreDiv.innerText = score

        const possPointsDiv = document.querySelector('.poss-points')
        possPointsDiv.innerText = "of "+ possPoints

        const affirmationSummary = document.querySelector('.affirmation-summary')
        const affirmationSentence= document.querySelector('.affirmation-sentence')

        switch (Math.floor((score/possPoints)/10)) {
            case 10:
                affirmationSummary.innerText = 'Superstar!'
                affirmationSentence.innerText = 'Congratulations, you beat the game!'
                break;
            case 9:
                affirmationSummary.innerText = 'Superb!'
                affirmationSentence.innerText = 'Are you a professional dancer??'
                break;
            case 8:
                affirmationSummary.innerText = 'Fantastic!'
                affirmationSentence.innerText = 'Killer dance moves!'
                break;
            case 7:
                affirmationSummary.innerText = 'Amazing!'
                affirmationSentence.innerText = 'Burning up the dance floor!'
                break;
            case 6:
                affirmationSummary.innerText = 'Terrific!'
                affirmationSentence.innerText = "You're on your way to being a Disco Tap master!"
                break;
            default:
                affirmationSummary.innerText = 'Great job!'
                affirmationSentence.innerText = "Keep dancing!"
                break;
        }
    }

    showResults() {
        let that = this;
        // document.addEventListener('keydown', function(e) {
        //     if (e.code === 'Space') {
        //         console.log('space event')
        //         e.preventDefault()
        //         that.closeResults();
        //     }
        // }, {once: true});
        const playAgain = document.querySelector('#play-again')
        playAgain.addEventListener('click', that.closeResults.bind(that))

        const results = document.querySelector('.results');
        results.style.display = 'block';
    }

    closeResults() {
        this.setupBoard()
        const results = document.querySelector('.results');
        results.style.display = 'none';
    }
    
}

export default Game;