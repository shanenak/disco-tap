import Arrow from "./arrow";
import {ARROW_WIDTH, ARROW_HEIGHT, GAP, DIM_Y} from "./constants";

const HORIZ_Y = 100;
const VERT_Y = 80;

const TAB_X = 400;

const COORDS = {
    "l": [TAB_X, HORIZ_Y],
    "d": [TAB_X + ARROW_HEIGHT + 7*GAP, VERT_Y],
    "u": [TAB_X + ARROW_HEIGHT + ARROW_WIDTH + 16*GAP, VERT_Y],
    "r": [TAB_X + ARROW_HEIGHT + 2*ARROW_WIDTH + 23*GAP, HORIZ_Y]
};

const ALL_DIRS = ['l', 'd', 'u', 'r'];

export function addTargets(ctx) {
    const targets = [];
    ALL_DIRS.forEach((dir)=> {
        let arrow = new Arrow(ctx, dir, COORDS[dir]);
        arrow.createImage();
        arrow.drawCircle();
        targets.push(arrow)
    })
    return targets
};

export function createArrow(ctx) {
    let randDir = ALL_DIRS[Math.floor(Math.random()*4)];
    let startCoords = COORDS[randDir].slice();
    startCoords[1] = DIM_Y-ARROW_HEIGHT;

    let randArrow = new Arrow(ctx, randDir, startCoords);
    randArrow.createImage();
    return randArrow
};
