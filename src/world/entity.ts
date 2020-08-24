import { Coordinates, Velocity } from "./interfaces";
import { generateUuid, generateRandomVelocity, generateRandomNumber } from "./utilities";

const lifeStateColors = ["#FFFFFF", "#8b0000", "#FF0000"];

export default class Entity {
    id: string;
    position: Coordinates;
    size: number;
    color: string;
    velocity: Velocity;

    constructor(position: Coordinates) {
        this.id = generateUuid();
        this.position = position;
        this.size = 5;
        this.color = lifeStateColors[0];
        this.velocity = generateRandomVelocity();
        // this.velocity = new Velocity(generateRandomNumber(0.5, -0.5), new Coordinates(0,0));
    }

    live() {
        this.pulse();
        this.move();
    }

    pulse() {
        this.color === lifeStateColors[0] ? this.color = lifeStateColors[1] : this.color = lifeStateColors[0];
    }

    move() {
        this.position.h += this.velocity.direction.h ;
        this.position.v += this.velocity.direction.v ;
    }
}

