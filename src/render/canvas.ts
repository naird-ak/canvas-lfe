import Entity from "~world/entity";

export default class CanvasContext {
    constructor(public canvasCtx: CanvasRenderingContext2D) {}

    renderEntities(entities: Entity[]) {
        entities.forEach(entity => {
            this.canvasCtx.fillStyle = entity.color;
            this.canvasCtx.beginPath();
            this.canvasCtx.arc(entity.position.h, entity.position.v, entity.size, 0, Math.PI * 2, true);
            this.canvasCtx.fill();
        })

    }

}