import { async } from "regenerator-runtime";

class Music {
    constructor() {
        // this.song = new Audio("../music/Dance the Night clip.mov").play()
    }



    getDeezerSong() { /// couldn't get it to work!
        const apiRequest = async (url) => {
            const resp = await fetch(url, {
                    method: "get",
                    mode: "cors",
                    // cache: "no-cache",
                    // headers: {"Content-Type": "application/x-www-form-urlencoded"}
            });
            if (!resp.ok) {
                throw new Error("HTTP status " + resp.status);
            }
            return resp.json();
        }; 
        apiRequest("https://api.deezer.com/album/302127?output=jsonp")
    }
}

export default Music;