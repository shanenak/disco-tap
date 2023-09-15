import addTargets from "./target";

class Game {
    constructor(ctx) {
        this.ctx = ctx

        this.score = 0;
        // this.testCanvas();
        addTargets(ctx);
    }

    static DIM_X = 1000; // document.body.clientWidth;
    static DIM_Y = 600; // document.body.clientHeight;
    static FPS = 32;
    static BG_COLOR = "#000000";

    testCanvas(){
        this.ctx.fillStyle = Game.BG_COLOR;
        this.ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y)
    }
    // allObjects() {
    //     return [].concat(this.)
    // }

    // draw(ctx) {
    //     ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y)
    //     ctx.fillStyle = Game.BG_COLOR;
    //     ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y)

    //     this.allObjects().forEach((object) => {
    //         object.draw(ctx);
    //     })
    // }
}

export default Game;