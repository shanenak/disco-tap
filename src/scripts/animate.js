import {addTargets, createArrow} from "./target"; 
import { DIM_X, DIM_Y } from "./constants";


class Animate {
    constructor(ctx, game) {
        this.ctx = ctx;
        this.game = game;
        this.targets = [];
        this.arrows = [createArrow(ctx)];

    }

    
    startGame() {
        this.targets = addTargets(this.ctx)
        for (let i = 0; i < 4; i++) {
            let newArrow = createArrow(this.ctx);
            this.arrows.push(newArrow);            
        }
        window.requestAnimationFrame(this.step.bind(this));

    }

    draw() {
        this.targets = addTargets(this.ctx)
        this.arrows.forEach((arrow)=> {
            arrow.draw()
        })
    }

    update() {
        this.arrows = this.arrows.filter((arrow)=> arrow.coords[1]>0)
        this.arrows.forEach((arrow)=> {
            arrow.coords[1] -= 1
        })
    }
    
    step() {
        this.ctx.clearRect(0,0,DIM_X, DIM_Y)
        this.draw();
        this.update();
        console.log(this.arrows)
        window.requestAnimationFrame(this.step.bind(this));
    }
}

export default Animate;