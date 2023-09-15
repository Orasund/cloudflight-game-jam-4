import { config } from '../../config'
import { Control } from '../../control';
import { Game } from '../types';
import { updateBall } from './ball';
import { collisionDetection } from './game';




export function tick(control: Control, game: Game) {
    movePaddle(control, game);
    collisionDetection(game);
    updateBall(game)
}

/******************************************************************
 * Private Functions
 ******************************************************************/

function movePaddle(control: Control, game: Game) {
    if (control.pressed.size == 0) {
        game.paddleX = control.mousePos[0] - config.paddleWidth / 2;
    }
    else if (control.pressed.has("Right") && game.paddleX < config.canvasWidth - config.paddleWidth) {
        game.paddleX += 7;
    }
    else if (control.pressed.has("Left") && game.paddleX > 0) {
        game.paddleX -= 7;
    }
}

