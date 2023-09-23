
import { Game } from "../Game/types";
import { config } from "../config";
import { normalize } from "./util";

export function updateBalls(game: Game) {
    game.balls.forEach(ball => {
        if (!ball.isVisible) return;

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


        for (var c = 0; c < config.brickColumnCount; c++) {
            for (var r = 0; r < config.brickRowCount; r++) {
                var b = game.bricks[c][r];
                if (ball.x > b.x - config.ballRadius &&
                    ball.x < b.x + config.brickWidth + config.ballRadius &&
                    ball.y > b.y - config.ballRadius &&
                    ball.y < b.y + config.brickHeight + config.ballRadius
                ) {
                    if (b.cellType == "goal") {
                        ball.isVisible = false;
                    }
                    if (b.isVisible == true) {
                        const centerX = b.x + config.brickWidth / 2;
                        const centerY = b.y + config.brickHeight / 2;

                        const [dx, dy] = normalize([ball.x - centerX, ball.y - centerY])

                        ball.dx = dx;
                        ball.dy = dy;

                        //sound.play(SoundSource.Bounce);
                    }
                }
            }
        }
    })
}

