import { Coordinates } from "./interfaces";
import { generateUuid } from "./utilities";

const lifeStateColors = ["#FFFFFF", "#8b0000", "#FF0000"];

export default class Entity {
    id: string;
    position: Coordinates;
    size: number;
    color: string;

    constructor(position: Coordinates) {
        this.id = generateUuid();
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

