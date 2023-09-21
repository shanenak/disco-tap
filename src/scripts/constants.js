export const ALL_DIRS = ['l', 'd', 'u', 'r'];

export const DIM_X = window.innerWidth;  
export const DIM_Y = 600; 

export const ARROW_WIDTH = 40;
export const ARROW_HEIGHT = 80;

export const HORIZ_Y = 100;
export const VERT_Y = 80;

export const GAP = 10;
export const TAB_X =  DIM_X/2 - ARROW_HEIGHT - 16*GAP // 400;

export const COORDS = {
    "l": [TAB_X, HORIZ_Y],
    "d": [TAB_X + ARROW_HEIGHT + 7*GAP, VERT_Y],
    "u": [TAB_X + ARROW_HEIGHT + ARROW_WIDTH + 16*GAP, VERT_Y],
    "r": [TAB_X + ARROW_HEIGHT + 2*ARROW_WIDTH + 23*GAP, HORIZ_Y]
};

export const ARROW_KEYS = {
    "ArrowLeft": "l",
    "ArrowDown": "d",
    "ArrowUp": "u",
    "ArrowRight": "r"
}

export const COLORS = {
    "l": "#BF95FF", 
    "d": "#FF899E",
    "u": "#C5C5FF",
    "r": "#A3E9A3"
}

export const IMAGE_SRC = { 
    "l": "/disco-tap/images/left-arrow.png",
    "d": "/disco-tap/images/down-arrow.png",
    "u": "/disco-tap/images/up-arrow.png",
    "r": "/disco-tap/images/right-arrow.png"
}