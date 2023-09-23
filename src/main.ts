import './style.css'
import { config } from "./config"
import * as draw from "./Game/render";
import { Game } from './Game/types';
import { Control } from './control';
import { newGame } from './Logic/game';
import { tick } from './Logic/main';
import { Sound } from './sound';

//Create Canvas
const container = document.querySelector('#app') as HTMLDivElement;
const canvas = document.createElement('canvas');
canvas.width = config.canvasWidth;
canvas.height = config.canvasHeight;
container.append(canvas);

//Initiate State
let game: Game = newGame(1);
let control: Control = new Control();
let sound: Sound = new Sound();

//Add Event Listeners
document.addEventListener("keydown", onKeydown, false);
document.addEventListener("keyup", onKeyup, false);
document.addEventListener("mousemove", control.mouseMoveHandler(canvas), false);
document.addEventListener("mousedown", () => control.mouseDown = true);
document.addEventListener("mouseup", () => control.mouseDown = false);
document.addEventListener("click", () => control.clicked = true);

function onKeydown(e: { code: string; }) {
    control.keyDownHandler(e)
}

function onKeyup(e: { code: string; }) {
    control.keyUpHandler(e)
}


//Start gameloop
const ctx = canvas.getContext("2d")!
function nextFrame() {
    game = tick(control, sound, game);
    draw.toCanvas(game, ctx);
    control.clicked = false;
    requestAnimationFrame(nextFrame);
}
nextFrame();