import Arrow from "./arrow";
import {ARROW_HEIGHT, ARROW_KEYS, DIM_Y, ALL_DIRS, COORDS } from "./constants";

class Canvas {
    constructor(ctx){
        this.ctx = ctx;
        this.score = 0;
        this.arrows = [];
        this.targets = this.createTargets();

        document.addEventListener("keydown", this.keyTap.bind(this))
    }  
    static SPEED = 5;
    static PRESSED_FRAMES = 10;
    static DIST_THRESHOLD = 25;


    keyTap(event) {
        if (ALL_DIRS.includes(ARROW_KEYS[event.key])) {
            event.preventDefault()
            let dir = ARROW_KEYS[event.key];
            let targetArrow = this.targets[dir];
            targetArrow.pressed = Canvas.PRESSED_FRAMES;
            
            let possibleArrows = this.arrows.filter((arrow)=>(
                arrow.dir === targetArrow.dir) && (Math.abs(arrow.coords[1] - targetArrow.coords[1]) < Canvas.DIST_THRESHOLD));
            
            if (possibleArrows.length) {
                possibleArrows[0].pressed = Canvas.PRESSED_FRAMES;
                this.score += 5
            } else this.score -= 1;

            const scoreText = document.querySelector("#score");
            scoreText.innerText = 'Score: '+this.score;
        }
    };

    createTargets() {
        const allTargets = {};
        ALL_DIRS.forEach((dir)=> {
            let arrow = new Arrow(this.ctx, dir, COORDS[dir]);
            allTargets[dir] = arrow;
        })
        return allTargets
    };

    addTargets() {
        Object.values(this.targets).forEach((arrow)=> {
            arrow.targetCircle();
            arrow.draw();
            console.log('added target')
        })
    };

    createArrow(dir) {
        // let randDir = ALL_DIRS[Math.floor(Math.random()*4)];
        let startCoords = COORDS[dir].slice();
        startCoords[1] = DIM_Y-ARROW_HEIGHT;
        let newArrow = new Arrow(this.ctx, dir, startCoords);
        newArrow.createImage();
        this.arrows.push(newArrow); 
    };

    draw() {
        this.addTargets(this.ctx);
        this.arrows.forEach((arrow)=> {
            arrow.pressedAttempt();
            arrow.draw();
        })
    };

    update() {
        this.arrows = this.arrows.filter((arrow)=> arrow.coords[1]> -ARROW_HEIGHT)
        this.arrows.forEach((arrow)=> {
            arrow.coords[1] -= Canvas.SPEED;
        })
    };
};

export default Canvas;