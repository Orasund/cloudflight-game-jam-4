import { Canvas } from "../canvas";
import { Game } from "./types";
import { config } from "../config";
import { ImageSource } from "./imageSource";

function drawBricks(game: Game, canvas: Canvas) {
    for (var c = 0; c < config.brickColumnCount; c++) {
        for (var r = 0; r < config.brickRowCount; r++) {
            let brick_source = ImageSource.BrickInvisible;
            if (game.bricks[c][r].isVisible == true) {
                brick_source = ImageSource.Brick1
            }

            canvas.image({
                source: brick_source,
                center:
                    [game.bricks[c][r].x + config.brickWidth / 2,
                    game.bricks[c][r].y + config.brickHeight / 2
                    ],
                width: config.brickWidth,
                height: config.brickHeight,
            })
        }
    }
}


export function toCanvas(game: Game, ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, config.canvasWidth, config.canvasHeight);

    const canvas = new Canvas(ctx);

    switch (game.end) {
        case "won":
            canvas.title("Game Won", [config.canvasWidth / 2 - 150, config.canvasHeight / 2])
            return;
        case "lost":
            canvas.title("Game Lost", [config.canvasWidth / 2 - 150, config.canvasHeight / 2])
            return;
    }

    drawBricks(game, canvas);
    canvas.circle({
        center: [game.ball.x, game.ball.y],
        radius: config.ballRadius,
        color: "#0095DD"
    })
        .rect({
            center: [
                game.paddle.x + config.paddleWidth / 2,
                config.canvasHeight - config.paddleHeight / 2
            ],
            width: config.paddleWidth,
            height: config.paddleHeight,
            color: "#0095DD"
        })
    canvas.text("Score: " + game.score, [8, 20]);
    canvas.text("Lives: " + game.lives, [config.canvasWidth - 65, 20]);

}