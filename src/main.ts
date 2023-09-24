import './style.css'
import { config } from "./config"
import * as draw from "./Game/render";
import { Game } from './Game/types';
import { Control } from './control';
import { newGame } from './Logic/game';
import { tick } from './Logic/main';
import { Sound } from './sound';
import { Canvas } from './canvas';
import { counter } from './Logic/counter';

//Create Canvas
const container = document.querySelector('#app') as HTMLDivElement;
const canvas = document.createElement('canvas');
canvas.width = config.canvasWidth;
canvas.height = config.canvasHeight;
container.append(canvas);
container.appendChild(counter)


//Initiate State
let game: Game = newGame(0);
let control: Control = new Control();
let sound: Sound = new Sound();

//Add Event Listeners
document.addEventListener("keydown", onKeydown, false);
document.addEventListener("keyup", onKeyup, false);
document.addEventListener("mousemove", control.mouseMoveHandler(canvas), false);
document.addEventListener("mousedown", () => control.mouseDown = true);
document.addEventListener("mouseup", () => control.mouseDown = false);
document.addEventListener("click", () => control.clicked = true);
canvas.ontouchmove = control.touchMoveHandler(canvas);
canvas.ontouchstart = () => control.mouseDown = true;
canvas.ontouchend = () => control.mouseDown = false;

function onKeydown(e: { code: string; }) {
    control.keyDownHandler(e)
}

function onKeyup(e: { code: string; }) {
    control.keyUpHandler(e)
}


//Start gameloop
const ctx = canvas.getContext("2d")!
const can = new Canvas(ctx);

function nextFrame() {
    game = tick(control, sound, game);
    draw.toCanvas(game, can);
    control.clicked = false;
    requestAnimationFrame(nextFrame);
}
nextFrame();