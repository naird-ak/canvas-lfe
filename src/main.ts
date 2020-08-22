import CanvasContext from "~renderer/canvas-render";


const main = () => {
    const canvas: HTMLCanvasElement = document.getElementById('root') as HTMLCanvasElement;
    const canvasContext: CanvasContext = new CanvasContext(canvas.getContext('2d'));
}

main();