
import { Game } from "../Game/types";
import { config } from "../config";
import { gameOver, restart } from "./game";

export function updateBalls(game: Game) {
    game.balls.forEach(ball => {
        if (ball.x + ball.dx > config.canvasWidth - config.ballRadius ||
            ball.x + ball.dx < config.ballRadius) {
            ball.dx = -ball.dx;
            //sound.play(SoundSource.Bounce);
        }
        if (ball.y + ball.dy < config.ballRadius) {
            ball.dy = -ball.dy;
            //sound.play(SoundSource.Bounce);
        }
        else if (ball.y + ball.dy > config.canvasHeight - config.ballRadius) {
            if (ball.x > game.paddle.x &&
                ball.x < game.paddle.x + config.paddleWidth
            ) {
                ball.dy = -ball.dy;
                //sound.play(SoundSource.Bounce);
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
        ball.x += ball.dx;
        ball.y += ball.dy;
    })
}

