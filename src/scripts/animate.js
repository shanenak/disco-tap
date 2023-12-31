import Canvas from "./canvas";
import Music from "./music";
import { ALL_DIRS, DIM_X, DIM_Y } from "./constants";

class Animate {
    constructor(ctx, song) {
        this.ctx = ctx;
        this.song = song;
        this.canvas = new Canvas(ctx);
        this.music = new Music(this);
        this.getChoreo = this.fetchChoreo()
        this.possPoints = 0;
    }

    static BPM = 110;
    static FRAMES_PER_BEAT = 12;
    static FRAMES_PER_MIN = Animate.BPM * Animate.FRAMES_PER_BEAT;
    static SEC_PER_MIN = 60;
    static FRAMES_PER_SEC = Animate.FRAMES_PER_MIN / Animate.SEC_PER_MIN;
    static LENGTH_FRAME = 1000/Animate.FRAMES_PER_SEC;

    startGame() {
        this.canvas.addTargets();   
        setTimeout(this.music.audio.play.bind(this.music.audio), 1000)
        this.startAnimating();
    };

    startAnimating() {
        this.frameCount = 1;
        this.interval = setInterval(this.animate.bind(this),Animate.LENGTH_FRAME) 
    };

    async fetchChoreo() {
        const filename = this.song === 'eye-of-the-tiger' ? "./music/eye_of_the_tiger_choreo.json" : "./music/dance_the_night_choreo.json"
        let response = await fetch(filename);
        let data = await response.json();
        data = JSON.stringify(data);
        data = JSON.parse(data);
        return data;
    }

    pauseAnimation() {
        this.interval = clearInterval(this.interval);
    }

    restartAnimation() {
        this.interval = setInterval(this.animate.bind(this),Animate.LENGTH_FRAME)
    }
                    

    animate() {
        const eighthNote = Animate.FRAMES_PER_BEAT/2
        this.ctx.clearRect(0,0,DIM_X, DIM_Y)
        if (this.frameCount%eighthNote === 0){
            const beat = this.frameCount/eighthNote
            for (let i = 0; i < ALL_DIRS.length; i++) {
                if (this.choreo[beat][ALL_DIRS[i]]) {
                    this.canvas.createArrow(ALL_DIRS[i]);
                    this.possPoints += 5
                }
            }
        }
        this.canvas.draw();
        this.canvas.update();
        this.frameCount+=1;
        if (this.frameCount > 24*19) {
            this.interval = clearInterval(this.interval);
        }
    }
}

export default Animate;