// import Arrow from "./arrow";
import Canvas from "./canvas";
import Music from "./music";
import { DIM_X, DIM_Y } from "./constants";

// const fs = require("fs");
// const { parse } = require("csv-parse");

class Animate {
    constructor(ctx) {
        this.ctx = ctx;
        this.music = new Music();
        this.canvas = new Canvas(ctx);
        this.getChoreography();
    }
    

    static BPM = 110;
    static SEC_PER_MIN = 60;
    static FPS = 24;
    static FRAMES_PER_BEAT = 13;

    
    startGame() {
        this.canvas.addTargets();   
        this.startAnimating(1000 / Animate.FPS);
    };

    startAnimating(fps) {
        this.frameCount = 0;
        this.interval = setInterval(this.animate.bind(this),fps)
    };

    getChoreography() {
        const filename = "../music/choreo_dance_the_night.json";
        fetch(filename)
        .then(Response => Response.json())
        .then(data => console.log(data));
    }

    animate() {
        this.ctx.clearRect(0,0,DIM_X, DIM_Y)
        if (this.frameCount % Animate.FRAMES_PER_BEAT === 0) this.canvas.createArrow();
        this.canvas.draw();
        this.canvas.update();
        this.frameCount+=1;
        if (this.frameCount > 24*17) {
            clearInterval(this.interval);
            console.log('interval cleared!');
        }
    }
}

export default Animate;