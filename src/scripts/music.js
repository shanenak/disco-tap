import { async } from "regenerator-runtime";

class Music {
    constructor() {
        this.audio = new Audio("../music/Dance the Night clip.mov");
        this.audio.play();
    }

    setMute() {
        volumeOff = document.querySelector(".fa-volume-high")
        volumeOff.addEventListener('click', function(e){
            this.audio.volume = 0
            volumeOff.className = "fa-solid fa-volume-xmark fa-beat"
        })
    }

    setUnmute() {
        volumeOn = document.querySelector(".fa-volume-xmark")
        volumeOn.addEventListener('click', function(e){
            this.audio.volume = 0.5
            volumeOff.className = "fa-solid fa-volume-high fa-beat"
        })


    }
}

export default Music;