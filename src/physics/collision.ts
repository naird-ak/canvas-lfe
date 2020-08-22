import Entity from "~world/entity";
import Logger from "~render/logger";

export default class Collision {

    constructor(private entities:Entity[], private logger: Logger) {}

    checkCollision() {
        for(let i=0; i < this.entities.length; i++) {
            for(let j=i+1; j < this.entities.length; j++) {
                this.checkBoundingEntityOverlap(this.entities[i], this.entities[j]);
            }
        }
    }

    checkBoundingEntityOverlap(ent1: Entity, ent2: Entity) {
        
        if (ent1.position.h + ent1.size + ent2.size > ent2.position.h 
            && ent1.position.h < ent2.position.h + ent1.size + ent2.size
            && ent1.position.v + ent1.size + ent2.size > ent2.position.v 
            && ent1.position.v < ent2.position.v + ent1.size + ent2.size)
            {
                this.logger.logMessage(ent1.id + " Collided with " + ent2.id + " at position ");
                this.logger.logMessage("Position " + ent1.position.h);
                this.logger.logMessage("Position " + ent2.position.v);
                return true;
            }
    }
}