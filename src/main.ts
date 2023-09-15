import './style.css'
import { config } from "./config"
import * as draw from "./Game/render";
import { Game } from './Game/types';
import { Control } from './control';
import { newGame } from './Game/Logic/game';
import { tick } from './Game/Logic/main';

//Create Canvas
const container = document.querySelector('#app') as HTMLDivElement;
const canvas = document.createElement('canvas');
canvas.width = config.canvasWidth;
canvas.height = config.canvasHeight;
container.append(canvas);

//Initiate State
let game: Game = newGame();
let control: Control = new Control();

//Add Event Listeners
document.addEventListener("keydown", onKeydown, false);
document.addEventListener("keyup", onKeyup, false);
document.addEventListener("mousemove", control.mouseMoveHandler(canvas), false);

function onKeydown(e: { code: string; }) {
    control.keyDownHandler(e)
}

function onKeyup(e: { code: string; }) {
    control.keyUpHandler(e)
}


//Start gameloop
const ctx = canvas.getContext("2d")!
function nextFrame() {
    tick(control, game);
    draw.toCanvas(game, ctx);
    requestAnimationFrame(nextFrame);
}
nextFrame();