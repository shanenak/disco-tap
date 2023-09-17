import Arrow from "./arrow";
import {ARROW_HEIGHT, ARROW_KEYS, DIM_X, DIM_Y, ALL_DIRS, COORDS } from "./constants";

class Animate {
    constructor(ctx) {
        this.ctx = ctx;
        this.arrows = [];
        this.score = 0;
        this.targets = this.createTargets();
    }

    static PRESSED_FRAMES = 25;
    static DIST_THRESHOLD = 25;
    
    startGame() {
        this.addTargets();
        for (let i = 0; i < 4; i++) {
            let newArrow = this.createArrow();
            this.arrows.push(newArrow); 
        }         
        window.requestAnimationFrame(this.step.bind(this));
        document.addEventListener("keydown", this.keyTap.bind(this));
    };

    keyTap(event) {
        event.preventDefault()
        if (ALL_DIRS.includes(ARROW_KEYS[event.key])) {
            let dir = ARROW_KEYS[event.key];
            let targetArrow = this.targets[dir];
            targetArrow.pressed = Animate.PRESSED_FRAMES;
            
            let possibleArrows = this.arrows.filter((arrow)=>(
                arrow.dir === targetArrow.dir) && (Math.abs(arrow.coords[1] - targetArrow.coords[1]) < Animate.DIST_THRESHOLD));
            
            if (possibleArrows.length) {
                possibleArrows[0].pressed = Animate.PRESSED_FRAMES;
                this.score += 5
            } else this.score -= 1;
            // todo: add feedback on moving arrows if pressed key
        }
    };

    createTargets() {
        const allTargets = {};
        ALL_DIRS.forEach((dir)=> {
            let arrow = new Arrow(this.ctx, dir, COORDS[dir]);
            allTargets[dir] = arrow;
        })
        return allTargets
    }

    addTargets() {
        Object.values(this.targets).forEach((arrow)=> {
            arrow.targetCircle();
            arrow.draw();
        })
    };

    createArrow() {
        let randDir = ALL_DIRS[Math.floor(Math.random()*4)];
        let startCoords = COORDS[randDir].slice();
        startCoords[1] = DIM_Y-ARROW_HEIGHT;

        let randArrow = new Arrow(this.ctx, randDir, startCoords);
        randArrow.createImage();
        return randArrow
    };

    draw() {
        this.addTargets(this.ctx);
        this.arrows.forEach((arrow)=> {
            arrow.pressedAttempt();
            arrow.draw();
        })
    }

    update() {
        this.arrows = this.arrows.filter((arrow)=> arrow.coords[1]> -ARROW_HEIGHT)
        this.arrows.forEach((arrow)=> {
            arrow.coords[1] -= 1
        })
    }
    
    step() {
        this.ctx.clearRect(0,0,DIM_X, DIM_Y)
        this.draw();
        this.update();
        if (this.arrows.length) window.requestAnimationFrame(this.step.bind(this));
    }
}

export default Animate;