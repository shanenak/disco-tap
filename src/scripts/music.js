import { async } from "regenerator-runtime";

class Music {
    constructor() {
        this.audio = new Audio("../music/Dance the Night clip.mov");
        this.audio.volume = 0.5;
        this.setMute();
    }

    setMute() {
        const that = this;
        const volumeOff = document.querySelector(".fa-volume-high")
        volumeOff.addEventListener('click', function(e){
            that.audio.volume = 0
            volumeOff.className = "fa-solid fa-volume-xmark fa-beat";
            that.setUnmute();
        })
    }

    setUnmute() {
        const that = this;
        const volumeOn = document.querySelector(".fa-volume-xmark")
        volumeOn.addEventListener('click', function(e){
            that.audio.volume = 0.5
            volumeOn.className = "fa-solid fa-volume-high fa-beat";
            that.setMute();
        })
    }
}

export default Music;