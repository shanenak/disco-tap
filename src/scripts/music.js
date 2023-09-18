import { async } from "regenerator-runtime";

class Music {
    constructor() {
        this.song = this.getSong()
    }

    getSong() {

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
        // try {
        //     async function logMovies() {
        //         const response = await fetch("https://api.deezer.com/track/3135556", {
        //             method: "GET",
        //             mode: "no-cors",
        //             headers: {"Content-Type": "application/json"}
        //         });
        //         return response.json();
        //     }
        //     logMovies().then((data)=> {
        //         console.log(data)
        //     });
        // } catch (error) {
        //     console.error("Error:", error);
        // }
    }
}

export default Music;