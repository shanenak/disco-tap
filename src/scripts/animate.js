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
    static SEC_PER_MIN = 60;
    static FPS = 24;
    static FRAMES_PER_BEAT = 13;

    
    startGame() {
        this.canvas.addTargets();   
        console.log(this.choreo[1])
        this.startAnimating(1000 / Animate.FPS);
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
                // console.log(beat, ALL_DIRS[i])
                if (this.choreo[beat][ALL_DIRS[i]]) {
                    this.canvas.createArrow(ALL_DIRS[i]);
                }
            }
        }
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