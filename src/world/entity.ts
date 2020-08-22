import { Coordinates } from "./interfaces";

const lifeStateColors = ["#FFFFFF", "#8b0000", "#FF0000"];

export default class Entity {
    position: Coordinates;
    size: number;
    color: string;

    constructor(position: Coordinates) {
        this.position = position;
        this.size = 5;
        this.color = lifeStateColors[0];
    }

    live() {
        this.pulse();
    }

    pulse() {
        this.color === lifeStateColors[0] ? this.color = lifeStateColors[1] : this.color = lifeStateColors[0];
    }
}

