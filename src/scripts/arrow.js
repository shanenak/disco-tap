import {ARROW_WIDTH, ARROW_HEIGHT, GAP, COLORS, IMAGE_SRC} from "./constants";

class Arrow {
    constructor(ctx, dir, coords) {
        this.ctx = ctx;
        this.dir = dir;
        this.coords = coords;
        this.pressed = 0;
        this.newImage = this.getImage();
    }
    
    getImage() {
        let imageObject;
        if (this.dir === 'l' || this.dir === 'r') {
            // if arrow is horizontal
            imageObject = new Image(ARROW_HEIGHT, ARROW_WIDTH)
        } else {
            // else if arrow is vertical
            imageObject = new Image(ARROW_WIDTH, ARROW_HEIGHT)
        }
        imageObject.src = IMAGE_SRC[this.dir]
        return imageObject
        }

    draw() {
        let imageObject = this.newImage;
        this.ctx.drawImage(imageObject, ...this.coords, imageObject.width, imageObject.height)
    }

    
    addMessage() {
        const dist = this.attempt;
        const message = document.querySelector("#message");
        switch (Math.abs(Math.floor(dist/80))) {
            case 0:
                message.innerText = "PERFECT!";
                break;
            case 1:
                message.innerText = "GREAT!";
                break;
            case 2:
                message.innerText = "GOOD"
                break;
            case 3:
                message.innerText = "BOO"
            default:
                message.innerText = "MISS"
                break;
        }
        setTimeout(()=> {
                message.innerText = ""
            }, 500);
    }

    getScore() {
        const dist = this.attempt;
        switch (Math.abs(Math.floor(dist/80))) {
            case 0:
                return 5;
            case 1:
                return 3;
            case 2:
                return 1;
            case 3:
                return 0;
            default:
                return -1;
        }
    }

    createImage() {
        let imageObject = this.newImage;
        imageObject.onload = this.draw.bind(this);
    }

    getCenter() {
        const radius = ARROW_HEIGHT/2 + GAP/15;

        let [x, y] = this.coords
        const horizArrows = ['l', 'r'];
        const centerX = horizArrows.includes(this.dir) ? x+ARROW_HEIGHT/2 : x+ARROW_WIDTH/2;
        const centerY = horizArrows.includes(this.dir) ? y+ARROW_WIDTH/2 : y+ARROW_HEIGHT/2;

        return [radius, centerX, centerY]
    }

    targetCircle() {
        const [radius, centerX, centerY] = this.getCenter()

        if (this.pressed) {
            this.pressedCircle(radius, centerX, centerY);
            this.pressed -=1;
        } else {
            this.emptyCircle(radius, centerX, centerY);
        }
        this.outlineCircle(radius, centerX, centerY)
    }

    outlineCircle(radius, centerX, centerY) {
        // outline target circle with color
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, radius, 0, 2*Math.PI, false);
        this.ctx.lineWidth = 3;
        this.ctx.strokeStyle = COLORS[this.dir];
        this.ctx.stroke();

        // blur target circle
        this.ctx.shadowBlur = 20;
        this.ctx.shadowColor = "black";
    }

    emptyCircle(radius, centerX, centerY) {
         // fill target circle black
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, radius+4, 0, 2*Math.PI, false);
        this.ctx.fillStyle = "#000000";
        this.ctx.fill();
        this.ctx.strokeStyle = "#000000";
        this.ctx.stroke();
    }

    pressedCircle(radius, centerX, centerY) {
        // fill target circle when clicked
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, radius+4, 0, 2*Math.PI, false);
        this.ctx.fillStyle = COLORS[this.dir];
        this.ctx.fill();
        this.ctx.strokeStyle = "#000000";
        this.ctx.stroke();
    }
}
export default Arrow;
