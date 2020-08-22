import CanvasContext from "~render/canvas";
import World from "~world/world";
import Logger from "~render/logger";

const runWorldEngine = (canvasContext, logger) => {
    const world = new World(canvasContext, logger);
    world.spawnEntities();
    world.renderEntities();
    world.runWorld()
    
}


const main = () => {
    const canvas: HTMLCanvasElement = document.getElementById('root') as HTMLCanvasElement;
    canvas.height = canvas.parentElement.clientHeight;
    canvas.width = canvas.parentElement.clientWidth;
    canvas.style.background = "#000000";
    const canvasContext: CanvasContext = new CanvasContext(canvas.getContext('2d'));
    const logger = new Logger();
    runWorldEngine(canvasContext, logger);
}

main();