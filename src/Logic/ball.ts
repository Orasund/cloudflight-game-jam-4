
import { Game } from "../Game/types";
import { config } from "../config";
import { playBounceSound } from "../sound";
import { gameOver, restart } from "./game";

export function updateBall(game: Game) {
    if (game.ball.x + game.ball.dx > config.canvasWidth - config.ballRadius ||
        game.ball.x + game.ball.dx < config.ballRadius) {
        game.ball.dx = -game.ball.dx;
        playBounceSound();
    }
    if (game.ball.y + game.ball.dy < config.ballRadius) {
        game.ball.dy = -game.ball.dy;
        playBounceSound();
    }
    else if (game.ball.y + game.ball.dy > config.canvasHeight - config.ballRadius) {
        if (game.ball.x > game.paddle.x &&
            game.ball.x < game.paddle.x + config.paddleWidth
        ) {
            game.ball.dy = -game.ball.dy;
            playBounceSound();
        }
        else {
            game.lives--;
            if (!game.lives) {
                gameOver(game)
            }
            else {
                restart(game)
            }
        }
    }
    game.ball.x += game.ball.dx;
    game.ball.y += game.ball.dy;
}

