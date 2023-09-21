import { async } from "regenerator-runtime";

class Music {
    constructor(animation) {
        this.animation = animation;
        this.song = animation.song;
        this.audio = this.getAudio()
        this.audio.volume = 0.2;
        this.setMute();
        this.setPause();
    }

    getAudio() {
        if (this.song === 'eye-of-the-tiger') return new Audio("./music/eye_of_the_tiger.mov");
        else return new Audio("./music/dance_the_night.mov");
    }

    setMute() {
        const that = this;
        const volumeOff = document.querySelector(".fa-volume-high");
        volumeOff.addEventListener('click', function(e){
            that.audio.volume = 0
            volumeOff.className = "fa-solid fa-volume-xmark fa-beat";
            that.setUnmute();
        })
    }

    setUnmute() {
        const that = this;
        const volumeOn = document.querySelector(".fa-volume-xmark");
        volumeOn.addEventListener('click', function(e){
            that.audio.volume = 0.2
            volumeOn.className = "fa-solid fa-volume-high fa-beat";
            that.setMute();
        })
    }

    setPause() {
        const that = this;
        const pauseGame = document.querySelector(".fa-pause");
        pauseGame.addEventListener('click', function(e) {
            that.audio.pause();
            that.animation.pauseAnimation();
            pauseGame.className = "fa-solid fa-play fa-beat";
            that.setReplay();
        }, {once: true})
    }

    setReplay() {
        const that = this;
        const replayGame = document.querySelector(".fa-play");
        replayGame.addEventListener('click', function(e) {
            that.audio.play();
            that.animation.restartAnimation();
            replayGame.className = "fa-solid fa-pause fa-beat";
            that.setPause();
        }, {once: true})
    }
}

export default Music;