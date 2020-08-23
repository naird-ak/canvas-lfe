import Entity from "~world/entity";
import Logger from "~render/logger";
import { Coordinates } from "~world/interfaces";

export default class Collision {

    constructor(private entities: Entity[], private logger: Logger, private worldBounds: Coordinates) { }

    checkCollision() {
        for (let i = 0; i < this.entities.length; i++) {
            const ent1 = this.entities[i];

            for (let j = i + 1; j < this.entities.length; j++) {
                
                const ent2 = this.entities[j];
                
                

                if (this.checkBoundingEntityOverlap(ent1, ent2)) {
                    if (this.checkEntityCollision(ent1, ent2)) {
                        this.logger.logMessage(ent1.id + " Collided with " + ent2.id + " at position ");
                        this.logger.logMessage("Position " + ent1.position.h);
                        this.logger.logMessage("Position " + ent2.position.v);
                        this.collide(ent1, ent2);
                    }
                }

            }
            this.collideOutOfBounds(ent1);
        }
    }

    checkBoundingEntityOverlap(ent1: Entity, ent2: Entity) {

        if ((ent1.position.h + ent1.size + ent2.size > ent2.position.h
            && ent1.position.h < ent2.position.h + ent1.size + ent2.size
            && ent1.position.v + ent1.size + ent2.size > ent2.position.v
            && ent1.position.v < ent2.position.v + ent1.size + ent2.size)) {

            return true;
        }

        return false;
    }

    checkEntityCollision(ent1: Entity, ent2: Entity) {
        const ab = ((ent1.position.h - ent2.position.h) * (ent1.position.h - ent2.position.h))
            + ((ent1.position.v - ent2.position.v) * (ent1.position.v - ent2.position.v))
        const distance = Math.sqrt(ab);
        if (distance < ent1.size + ent2.size) {
            return true;
        }

        return false;
    }

    collide(ent1: Entity, ent2: Entity) {
        ent1.velocity.direction.h = ( (ent1.velocity.direction.h * (ent1.size - ent2.size)) + (2 * ent2.size * ent2.velocity.direction.h)) / (ent1.size + ent2.size)
        ent1.velocity.direction.v = ( (ent1.velocity.direction.v * (ent1.size - ent2.size)) + (2 * ent2.size * ent2.velocity.direction.v)) / (ent1.size + ent2.size)
        ent2.velocity.direction.h = ( (ent2.velocity.direction.h * (ent2.size - ent1.size)) + (2 * ent1.size * ent1.velocity.direction.h)) / (ent2.size + ent1.size)
        ent2.velocity.direction.v = ( (ent2.velocity.direction.v * (ent2.size - ent1.size)) + (2 * ent1.size * ent1.velocity.direction.h)) / (ent2.size + ent1.size)
    }

    collideOutOfBounds(ent1: Entity) {

        if((ent1.position.h + ent1.size) >= this.worldBounds.h) {
            ent1.velocity.direction.h = ent1.velocity.direction.h * -1;
        }

        if((ent1.position.h - ent1.size) <= 0) {
            ent1.velocity.direction.h = ent1.velocity.direction.h * -1;
        }

        if((ent1.position.v + ent1.size) >= this.worldBounds.v) {
            ent1.velocity.direction.v = ent1.velocity.direction.v * -1;
        }

        if((ent1.position.v - ent1.size) <= 0) {
            ent1.velocity.direction.v = ent1.velocity.direction.v * -1;
        }
    }
} 