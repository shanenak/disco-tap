const HORIZ_Y = 15;
const VERT_Y = 10;
const ARROW_WIDTH = 50;
const ARROW_HEIGHT = 100;

const TAB_X = 100
const GAP = 100;

const COORDS = {
    "l": [TAB_X, HORIZ_Y],
    "d": [TAB_X + ARROW_HEIGHT + GAP, VERT_Y],
    "u": [TAB_X + ARROW_HEIGHT + ARROW_WIDTH + 2*GAP, VERT_Y],
    "r": [TAB_X + ARROW_HEIGHT + 2*ARROW_WIDTH + 3*GAP, HORIZ_Y]
}

const IMAGE_SRC = { 
    "l": "../images/left-arrow.png",
    "d": "../images/down-arrow.png",
    "u": "../images/up-arrow.png",
    "r": "../images/right-arrow.png"
}

const COLORS = {
    "l": "#BF95FF", 
    "d": "#FF899E",
    "u": "#C5C5FF",
    "r": "#A3E9A3"
}

function getImage(dir) {

    let newImage = new Image()

    if (dir === 'l' || dir === 'r') {
        // if arrow is horizontal
        newImage = new Image(ARROW_HEIGHT, ARROW_WIDTH)
    } else {
        // else if arrow is vertical
        newImage = new Image(ARROW_WIDTH, ARROW_HEIGHT)
    }
    newImage.src = IMAGE_SRC[dir]

    return newImage
}

function drawImage(ctx, dir) {
    let imageObject = getImage(dir)
    imageObject.onload = function() {
        ctx.drawImage(imageObject, ...COORDS[dir], imageObject.width, imageObject.height)
    }
}

function drawCircle(ctx, dir) {
    if (dir === 'l' || dir === 'r') {
        // if arrow is horizontal
        const centerX = COORDS[dir] + ARROW_HEIGHT/2;
        const centerY = COORDS[dir] + ARROW_WIDTH/2;
        const radius = ARROW_HEIGHT/2 + GAP/3;
    }
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2*Math.PI, false);
    ctx.lineWidth = 5;
    // ctx.filter = 'blur(2px)'
    ctx.strokeStyle = COLORS[dir];
    ctx.stroke();
}

export default function addTargets(ctx) {
    drawImage(ctx, 'l')
    // drawCircle(ctx, 'l')
    drawImage(ctx, 'd')
    drawImage(ctx, 'u')
    drawImage(ctx, 'r')
}
