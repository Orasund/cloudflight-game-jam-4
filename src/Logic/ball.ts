
import { Ball, Game } from "../Game/types";
import { config } from "../config";
import { normalize, scale, withRandomness } from "./util";


function collide_with_bricks(game: Game, ball: Ball) {
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

                    const [dx, dy] = withRandomness(scale(normalize([ball.x - centerX, ball.y - centerY]), config.ballSpeed), 0.1)

                    ball.dx = dx;
                    ball.dy = dy;

                    //sound.play(SoundSource.Bounce);
                }
            }
        }
    }
}

function collide_with_snakes(game: Game, ball) {
    game.snakes.forEach(snake => {
        if (!snake.isVisible) return;
        if (ball.x - snake.x &&
            ball.x < snake.x + config.brickWidth + config.ballRadius &&
            ball.y > snake.y - config.ballRadius &&
            ball.y < snake.y + config.brickHeight + config.ballRadius
        ) { game.end = "lost" }

    })

}
export function updateBalls(game: Game) {
    game.balls.forEach(ball => {
        if (!ball.isVisible) return;

        collide_with_outside_scene(ball)

        collide_with_bricks(game, ball)



    })


}

function collide_with_outside_scene(ball: Ball) {
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

}