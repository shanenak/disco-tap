const ARROW_WIDTH = 40;
const ARROW_HEIGHT = 80;
const GAP = 10;

const COLORS = {
    "l": "#BF95FF", 
    "d": "#FF899E",
    "u": "#C5C5FF",
    "r": "#A3E9A3"
}

const IMAGE_SRC = { 
    "l": "../images/left-arrow.png",
    "d": "../images/down-arrow.png",
    "u": "../images/up-arrow.png",
    "r": "../images/right-arrow.png"
}

class Arrow {
    constructor(ctx, dir, coords) {
        this.ctx = ctx;
        this.dir = dir;
        this.coords = coords;
    }
    
    getImage() {
        let newImage = new Image()
    
        if (this.dir === 'l' || this.dir === 'r') {
            // if arrow is horizontal
            newImage = new Image(ARROW_HEIGHT, ARROW_WIDTH)
        } else {
            // else if arrow is vertical
            newImage = new Image(ARROW_WIDTH, ARROW_HEIGHT)
        }
        newImage.src = IMAGE_SRC[this.dir]
    
        return newImage
    }

    drawImage() {
        let imageObject = this.getImage()
        let draw = ()=> {
            this.ctx.drawImage(imageObject, ...this.coords, imageObject.width, imageObject.height)
        }
        imageObject.onload = draw;
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
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, radius, 0, 2*Math.PI, false);
        this.ctx.lineWidth = 3;
        
        this.ctx.strokeStyle = COLORS[this.dir];
        this.ctx.stroke();
    }
}
export default Arrow;
