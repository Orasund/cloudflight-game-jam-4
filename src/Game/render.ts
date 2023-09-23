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
            if (game.bricks[c][r].cellType == "goal") {
                brick_source = ImageSource.Brick2;
            }
            if (game.bricks[c][r].cellType == "lava") {
                brick_source = ImageSource.Lava;
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
        case "finished":
            canvas.title("Thanks for playing", [config.canvasWidth / 2 - 150, config.canvasHeight / 2])
            return;
    }

    drawBricks(game, canvas);
    game.snakes.forEach(snake => {
        if (!snake.isVisible) return;
        canvas.image({
            source: ImageSource.Snake,
            center: [snake.x, snake.y],
            width: config.ballRadius * 2,
            height: config.ballRadius * 2,
        })
    })
    game.balls.forEach(ball => {
        if (!ball.isVisible) return;
        canvas.image({
            source: ImageSource.RoundChicken,
            center: [ball.x, ball.y],
            width: config.ballRadius * 2,
            height: config.ballRadius * 2,
        })
    })
}