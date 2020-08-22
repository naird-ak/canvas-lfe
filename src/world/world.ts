import CanvasContext from "~renderer/canvas-render";
import { Coordinates } from "./interfaces";
import Entity from "./entity";
import { generateRandomNumber } from './utilities';
import Collision from "~physics/collision";

export default class World {
    private size: Coordinates;
    private entities: Entity[];
    private collision: Collision;

    constructor(private canvas: CanvasContext) {
        this.size = {
            v: canvas.canvasCtx.canvas.height,
            h: canvas.canvasCtx.canvas.width
        };
    }

    spawnEntities(population: number = 10) {
        this.entities = [];
        for (let pop = 0; pop < population; pop++) {
            const positionV = generateRandomNumber(this.size.v);
            const positionH = generateRandomNumber(this.size.h);
            this.entities.push(new Entity({ v: positionV, h: positionH }));
        }

        this.injectCollidedEntities();
        this.collision = new Collision(this.entities);
    }

    injectCollidedEntities() {
        this.entities.push(new Entity({ v: 100, h: 10 }));
        this.entities.push(new Entity({ v: 100, h: 10 }));
    }

    runWorld() {
        this.keepEntitiesAlive();
        this.collision.checkCollision();
        this.renderEntities();
        requestAnimationFrame(() => this.runWorld());
    }

    keepEntitiesAlive() {
        this.entities.forEach((entity) => entity.live());
    }

    renderEntities() {
        this.canvas.renderEntities(this.entities);
    }

    
}