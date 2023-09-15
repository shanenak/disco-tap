import Arrow from "./arrow";
import {ARROW_WIDTH, ARROW_HEIGHT, GAP} from "./constants";

const HORIZ_Y = 50;
const VERT_Y = 30;

const TAB_X = 100

const COORDS = {
    "l": [TAB_X, HORIZ_Y],
    "d": [TAB_X + ARROW_HEIGHT + 7*GAP, VERT_Y],
    "u": [TAB_X + ARROW_HEIGHT + ARROW_WIDTH + 16*GAP, VERT_Y],
    "r": [TAB_X + ARROW_HEIGHT + 2*ARROW_WIDTH + 23*GAP, HORIZ_Y]
}

export default function addTargets(ctx) {
    ['l', 'd', 'u', 'r'].forEach((dir)=> {
        let arrow = new Arrow(ctx, dir, COORDS[dir]);
        arrow.drawImage();
        arrow.drawCircle();
    })
}
