import { generateRandomNumber } from "./utilities";

export class Coordinates {
    v: number;
    h: number;

    constructor(h?, v?) {
        this.h = h;
        this.v = v;
    }
}

export class Velocity {
    speed: number;
    direction: Coordinates;

    constructor(sp: number, dir: Coordinates) {
        this.speed = sp;
        this.direction = dir;
    }
}