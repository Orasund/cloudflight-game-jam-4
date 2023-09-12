import { Canvas } from "../canvas";
import { Game } from "./types";
import { config } from "../config";

function drawBricks(game: Game, canvas: Canvas) {
    for (var c = 0; c < config.brickColumnCount; c++) {
        for (var r = 0; r < config.brickRowCount; r++) {
            if (game.bricks[c][r].status == 1) {
                canvas.rect({
                    center:
                        [game.bricks[c][r].x + config.brickWidth / 2,
                        game.bricks[c][r].y + config.brickHeight / 2
                        ],
                    width: config.brickWidth,
                    height: config.brickHeight,
                    color: "#0095DD"
                })
            }
        }
    }
}
function drawScore(game: Game, ctx: CanvasRenderingContext2D) {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: " + game.score, 8, 20);
}
function drawLives(game: Game, ctx: CanvasRenderingContext2D) {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: " + game.lives, config.canvasWidth - 65, 20);
}

export function toCanvas(game: Game, ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, config.canvasWidth, config.canvasHeight);

    const canvas = new Canvas(ctx);

    drawBricks(game, canvas);
    canvas.circle({
        center: [game.x, game.y],
        radius: config.ballRadius,
        color: "#0095DD"
    })
        .rect({
            center: [game.paddleX + config.paddleWidth / 2, config.canvasHeight - config.paddleHeight / 2],
            width: config.paddleWidth,
            height: config.paddleHeight,
            color: "#0095DD"
        })
    drawScore(game, ctx);
    drawLives(game, ctx);



}