import Entity from "~world/entity";

export default class Collision {
    entities: Entity[];

    constructor(entities:Entity[]) {
        this.entities = entities;
    }

    checkCollision() {
        this.entities.forEach((currEnt) => {
            this.entities.forEach(entity => {
                if(currEnt.id !== entity.id) {
                    this.checkBoundingEntityOverlap(currEnt, entity);
                };
            })
        })
    }

    checkBoundingEntityOverlap(ent1: Entity, ent2: Entity) {
        console.log("Checking Collision");
        if (ent1.position.h + ent1.size + ent2.size > ent2.position.h 
            && ent1.position.h < ent2.position.h + ent1.size + ent2.size
            && ent1.position.v + ent1.size + ent2.size > ent2.position.v 
            && ent1.position.v < ent2.position.v + ent1.size + ent2.size)
            {
                console.log(ent1.id + " Collided with " + ent2.id + " at position ");
                console.log(ent1.position);
                return true;
            }
    }
}