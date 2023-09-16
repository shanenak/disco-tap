import {ARROW_WIDTH, ARROW_HEIGHT, GAP, COLORS, IMAGE_SRC} from "./constants";

class Arrow {
    constructor(ctx, dir, coords) {
        this.ctx = ctx;
        this.dir = dir;
        this.coords = coords;
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

    createImage() {
        let imageObject = this.newImage;
        imageObject.onload = this.draw.bind(this);
    }

    drawCircle() {
        const radius = ARROW_HEIGHT/2 + GAP/15;
        let centerX, centerY;
        if (this.dir === 'l' || this.dir === 'r') {
            // if arrow is horizontal
            centerX = this.coords[0] + ARROW_HEIGHT/2;
            centerY = this.coords[1] + ARROW_WIDTH/2;
        } else {
            // if arrow is vertical
            centerX = this.coords[0] + ARROW_WIDTH/2;
            centerY = this.coords[1] + ARROW_HEIGHT/2;
        }
        // this.ctx.restore();
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, radius, 0, 2*Math.PI, false);
        this.ctx.lineWidth = 3;


        
        this.ctx.strokeStyle = COLORS[this.dir];
        this.ctx.stroke();
        // this.ctx.save();
    }
}
export default Arrow;
