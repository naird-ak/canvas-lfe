import Entity from "~world/entity";

export default class CanvasContext {
    canvasCtx: CanvasRenderingContext2D;
    constructor(ctx: CanvasRenderingContext2D) {
        this.canvasCtx = ctx;
    }

    renderEntities(entities: Entity[]) {
        entities.forEach(entity => {
            this.canvasCtx.fillStyle = entity.color;
            this.canvasCtx.beginPath();
            this.canvasCtx.arc(entity.position.h, entity.position.v, entity.size, 0, Math.PI * 2, true);
            this.canvasCtx.fill();
        })

    }

}