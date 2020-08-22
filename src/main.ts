import CanvasContext from "~renderer/canvas-render";
import World from "~world/world";

const runWorldEngine = (canvasContext: CanvasContext) => {
    const world = new World(canvasContext);
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
    runWorldEngine(canvasContext);
}

main();