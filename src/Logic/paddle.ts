import { Game } from "../Game/types";
import { config } from "../config";
import { Control } from "../control";

export function movePaddle(control: Control, game: Game) {
    if (control.pressed.size == 0) {
        game.paddle.x = control.mousePos[0] - config.paddleWidth / 2;
    }
    else if (control.pressed.has("Right") &&
        game.paddle.x < config.canvasWidth - config.paddleWidth
    ) {
        game.paddle.x += 7;
    }
    else if (control.pressed.has("Left") && game.paddle.x > 0) {
        game.paddle.x -= 7;
    }
}