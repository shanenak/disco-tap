import Arrow from "./arrow";
import {ARROW_HEIGHT, ARROW_KEYS, DIM_Y, ALL_DIRS, COORDS } from "./constants";

class Canvas {
    constructor(ctx){
        this.ctx = ctx;
        this.score = 0;
        this.arrows = [];
        this.targets = this.createTargets();

        document.addEventListener("keydown", this.keyTap.bind(this))
    }  

    static SPEED = 10;
    static PRESSED_FRAMES = 5;
    static DIST_THRESHOLD = 25;

    keyTap(event) {
        if (ALL_DIRS.includes(ARROW_KEYS[event.key])) {
            event.preventDefault()
            let dir = ARROW_KEYS[event.key];
            let targetArrow = this.targets[dir];
            targetArrow.pressed = Canvas.PRESSED_FRAMES;
            
            let dirArrows = this.arrows.filter((arrow)=> arrow.dir === targetArrow.dir);
            const closestArrow = dirArrows.sort((arrow)=> Math.abs(arrow.coords[1] - targetArrow.coords[1]))[0];
            if (closestArrow) {
                closestArrow.attempt = closestArrow.coords[1] - targetArrow.coords[1];
                closestArrow.addMessage()
                const score = closestArrow.getScore()
                this.updateScore(score)
                if (score > 0) this.arrows = this.arrows.filter((arrow)=> !Object.is(arrow, closestArrow))
            };
        }
    };

    updateScore(scoreUpdate) {
        this.score += scoreUpdate
        const scoreText = document.querySelector("#score")
        scoreText.innerText = "Score: "+this.score
        if (scoreUpdate!==0) {
            const positive = this.score>0 ? 'positive' : 'negative'
            // code inspired from https://codepen.io/carlosriera/pen/WxMjgJ
            const spanElement = document.createElement('h2');
            spanElement.className = 'plus-one neonText';
            spanElement.id = positive;
            spanElement.innerHTML = scoreUpdate > 0 ? '+'+scoreUpdate : scoreUpdate;
    
            const scoreAnimate = document.querySelector(".overlay")
            scoreAnimate.appendChild(spanElement);
    
            spanElement.style.transition = 'opacity 1s';
            spanElement.style.opacity = '1';
    
            // Schedule removal of the span element after 2 seconds
            setTimeout(function() {
            // Fade out the span element
            spanElement.style.opacity = '0';
            
            // Remove the span element after the fade out animation
            setTimeout(function() {
                spanElement.remove();
            }, 1000);
            }, 2000);
        }
    }

    createTargets() {
        const allTargets = {};
        ALL_DIRS.forEach((dir)=> {
            let arrow = new Arrow(this.ctx, dir, COORDS[dir]);
            allTargets[dir] = arrow;
        })
        return allTargets
    };

    addTargets() {
        Object.values(this.targets).forEach((arrow)=> {
            arrow.targetCircle();
            arrow.draw();
        })
    };

    createArrow(dir) {
        let startCoords = COORDS[dir].slice();
        startCoords[1] = DIM_Y-ARROW_HEIGHT;
        let newArrow = new Arrow(this.ctx, dir, startCoords);
        newArrow.createImage();
        this.arrows.push(newArrow); 
    };

    draw() {
        this.addTargets(this.ctx);
        this.arrows.forEach((arrow)=> {
            arrow.draw();
        })
    };

    update() {
        this.arrows = this.arrows.filter((arrow)=> arrow.coords[1]> -ARROW_HEIGHT)
        this.arrows.forEach((arrow)=> {
            arrow.coords[1] -= Canvas.SPEED;
        })
    };
};

export default Canvas;