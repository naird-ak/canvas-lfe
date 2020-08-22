import CanvasContext from "~renderer/canvas-render";
import { Coordinates } from "./interfaces";
import Entity from "./entity";
import { generateRandomNumber, generateLifeSpanTime } from './utilities';

export default class World {
    private size: Coordinates;
    private entities: Entity[];
    private renderContext: CanvasContext;
    private lifeSpan = 100;

    constructor(canvas: CanvasContext) {
        this.renderContext = canvas;
        this.size = {
            v: canvas.canvasCtx.canvas.height,
            h: canvas.canvasCtx.canvas.width
        };
    }

    spawnEntities(population: number = 100) {
        this.entities = [];
        for (let pop = 0; pop < population; pop++) {
            const positionV = generateRandomNumber(this.size.v);
            const positionH = generateRandomNumber(this.size.h);
            this.entities.push(new Entity({ v: positionV, h: positionH }));
        }
    }

    renderEntities() {
        this.renderContext.renderEntities(this.entities);
    }

    runWorld() {
        this.entities.forEach((entity) => entity.live());
        this.renderEntities();
        requestAnimationFrame(() => this.runWorld());
    }
}