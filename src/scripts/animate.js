import Arrow from "./arrow";
import Music from "./music";
import {ARROW_HEIGHT, ARROW_KEYS, DIM_X, DIM_Y, ALL_DIRS, COORDS } from "./constants";

class Animate {
    constructor(ctx) {
        this.ctx = ctx;
        this.arrows = [];
        this.score = 0;

        this.done = false;
        this.targets = this.createTargets();
    }

    static PRESSED_FRAMES = 25;
    static DIST_THRESHOLD = 25;
    static BPM = 110;
    static SEC_PER_MIN = 60;
    static BEATS_PER_SEC = Animate.BPM / Animate.SEC_PER_MIN;

    static FRAMES_PER_BEAT = 20;
    static BEATS_PER_FRAME = 1/Animate.FRAMES_PER_BEAT;
    
    startGame() {
        this.addTargets();   
        this.startAnimating(3 * (Animate.BEATS_PER_SEC/Animate.BEATS_PER_FRAME));
        document.addEventListener("keydown", this.keyTap.bind(this));
    };

    keyTap(event) {
        if (ALL_DIRS.includes(ARROW_KEYS[event.key])) {
            event.preventDefault()
            let dir = ARROW_KEYS[event.key];
            let targetArrow = this.targets[dir];
            targetArrow.pressed = Animate.PRESSED_FRAMES;
            
            let possibleArrows = this.arrows.filter((arrow)=>(
                arrow.dir === targetArrow.dir) && (Math.abs(arrow.coords[1] - targetArrow.coords[1]) < Animate.DIST_THRESHOLD));
            
            if (possibleArrows.length) {
                possibleArrows[0].pressed = Animate.PRESSED_FRAMES;
                this.score += 5
            } else this.score -= 1;

            const scoreText = document.querySelector("#score");
            scoreText.innerText = 'Score: '+this.score;
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
            console.log('added target')
        })
    };

    createArrow() {
        let randDir = ALL_DIRS[Math.floor(Math.random()*4)];
        let startCoords = COORDS[randDir].slice();
        startCoords[1] = DIM_Y-ARROW_HEIGHT;
        let randArrow = new Arrow(this.ctx, randDir, startCoords);
        randArrow.createImage();
        this.arrows.push(randArrow); 
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

    startAnimating(fps) {
        this.frameCount = 0;

        console.log(this.fps)
        this.fpsInterval = 1000 / fps;
        this.then = window.performance.now();
        this.startTime = this.then;
        this.animate();
    }

    animate() {
        // if (this.arrows.length < 50) window.requestAnimationFrame(this.animate.bind(this));

        let now = Date.now();
        let elapsed = now - this.then;
        if (elapsed > this.fpsInterval) {
            this.then = now - (elapsed % this.fpsInterval);

            this.ctx.clearRect(0,0,DIM_X, DIM_Y)
            if (this.frameCount === 0 || this.frameCount % 20 === 0) {
            this.createArrow();
        }
            this.draw();
            this.update();

            var sinceStart = now - this.startTime;
            var currentFps = Math.round(1000 / (sinceStart / ++this.frameCount) * 100) / 100;
            const fps = document.querySelector("#FPS")
            fps.innerText = "Elapsed time= " + Math.round(sinceStart / 1000 * 100) / 100 + " secs @ " + currentFps + " fps.";
        }
    }
}

export default Animate;