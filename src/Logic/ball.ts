
import { Game } from "../Game/types";
import { config } from "../config";

export function updateBalls(game: Game) {
    game.balls.forEach(ball => {
        if (ball.x + ball.dx > config.canvasWidth - config.ballRadius ||
            ball.x + ball.dx < config.ballRadius) {
            ball.dx = -ball.dx;
            //sound.play(SoundSource.Bounce);
        }
        if (ball.y + ball.dy > config.canvasHeight - config.ballRadius ||
            ball.y + ball.dy < config.ballRadius) {
            ball.dy = -ball.dy;
            //sound.play(SoundSource.Bounce);
        }
        ball.x += ball.dx;
        ball.y += ball.dy;
    })
}

