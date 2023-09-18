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
    static FPS = 24;
    static FRAMES_PER_BEAT = 13;

    
    startGame() {
        this.canvas.addTargets();   
        this.startAnimating(Animate.SEC_PER_MIN / Animate.FPS);
    };

    startAnimating(fps) {
        this.frameCount = 0;
        this.interval = setInterval(this.animate.bind(this),fps)
    };

    animate() {
        this.ctx.clearRect(0,0,DIM_X, DIM_Y)
        if (this.frameCount % Animate.FRAMES_PER_BEAT === 0) this.canvas.createArrow();
        this.canvas.draw();
        this.canvas.update();
        this.frameCount+=1;
        if (this.frameCount > 24*15) {
            clearInterval(this.interval);
            console.log('interval cleared!');
        }
    }
}

export default Animate;