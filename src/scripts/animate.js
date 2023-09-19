// import Arrow from "./arrow";
import Canvas from "./canvas";
import Music from "./music";
import { ALL_DIRS, DIM_X, DIM_Y } from "./constants";

// const fs = require("fs");
// const { parse } = require("csv-parse");

class Animate {
    constructor(ctx) {
        this.ctx = ctx;
        this.music = new Music();
        this.canvas = new Canvas(ctx);
        this.getChoreo = this.fetchData("../music/choreo_dance_the_night.json")
    }

    static BPM = 110;
    static FRAMES_PER_BEAT = 13;
    static FRAMES_PER_MIN = Animate.BPM * Animate.FRAMES_PER_BEAT;
    static SEC_PER_MIN = 60;
    static FRAMES_PER_SEC = Animate.FRAMES_PER_MIN / Animate.SEC_PER_MIN;
    static LENGTH_FRAME = 1000/Animate.FRAMES_PER_SEC;

    
    startGame() {
        this.canvas.addTargets();   
        this.startAnimating(Animate.LENGTH_FRAME);
    };

    startAnimating(fps) {
        this.frameCount = 1;
        this.interval = setInterval(this.animate.bind(this),fps)
    };

    async fetchData(filename) {
        let response = await fetch(filename);
        let data = await response.json();
        data = JSON.stringify(data);
        data = JSON.parse(data);
        return data;
    }
                    

    animate() {
        this.ctx.clearRect(0,0,DIM_X, DIM_Y)
        if (this.frameCount%13 === 0){
            const beat = this.frameCount/13
            for (let i = 0; i < ALL_DIRS.length; i++) {
                if (this.choreo[beat][ALL_DIRS[i]]) {
                    this.canvas.createArrow(ALL_DIRS[i]);
                }
            }
        }
        this.canvas.draw();
        this.canvas.update();
        this.frameCount+=1;
        if (this.frameCount > 24*19) {
            clearInterval(this.interval);
        }
    }
}

export default Animate;