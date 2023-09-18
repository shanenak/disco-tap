// import Arrow from "./arrow";
import Canvas from "./canvas";
import { DIM_X, DIM_Y } from "./constants";

class Animate {
    constructor(ctx) {
        this.ctx = ctx;
        this.canvas = new Canvas(ctx);
    }

    static PRESSED_FRAMES = 25;
    static DIST_THRESHOLD = 25;
    static BPM = 110;
    static SEC_PER_MIN = 60;
    static BEATS_PER_SEC = Animate.BPM / Animate.SEC_PER_MIN;

    static FRAMES_PER_BEAT = 20;
    static BEATS_PER_FRAME = 1/Animate.FRAMES_PER_BEAT;
    
    startGame() {
        this.canvas.addTargets();   
        this.startAnimating(3 * (Animate.BEATS_PER_SEC/Animate.BEATS_PER_FRAME));
    };

    startAnimating(fps) {
        this.frameCount = 0;
        this.fpsInterval = 1000 / fps;
        this.then = window.performance.now();
        this.startTime = this.then;
        this.animate();
    };

    animate() {
        if (this.canvas.arrows.length < 10) window.requestAnimationFrame(this.animate.bind(this));

        let now = Date.now();
        let elapsed = now - this.then;
        if (elapsed > this.fpsInterval) {
            this.then = now - (elapsed % this.fpsInterval);

            this.ctx.clearRect(0,0,DIM_X, DIM_Y)
            if (this.frameCount === 0 || this.frameCount % 20 === 0) {
            this.canvas.createArrow();
        }
            this.canvas.draw();
            this.canvas.update();

            var sinceStart = now - this.startTime;
            var currentFps = Math.round(1000 / (sinceStart / ++this.frameCount) * 100) / 100;
            const fps = document.querySelector("#FPS")
            fps.innerText = "Elapsed time= " + Math.round(sinceStart / 1000 * 100) / 100 + " secs @ " + currentFps + " fps.";
        }
    }
}

export default Animate;