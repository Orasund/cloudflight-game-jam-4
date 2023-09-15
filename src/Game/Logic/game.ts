import { config } from "../../config";
import { Brick, Game } from "../types";

export function newGame(): Game {
    let bricks: Brick[][] = []
    for (var c = 0; c < config.brickColumnCount; c++) {
        bricks[c] = [];
        for (var r = 0; r < config.brickRowCount; r++) {
            var brickX = (r * (config.brickWidth + config.brickPadding)) + config.brickOffsetLeft;
            var brickY = (c * (config.brickHeight + config.brickPadding)) + config.brickOffsetTop;

            bricks[c][r] = {
                x: brickX,
                y: brickY,
                status: 1
            };
        }
    }
    return {
        paddleX: (config.canvasWidth - config.paddleWidth) / 2,
        bricks: bricks,
        score: 0,
        lives: 3,
        ball: {
            dx: 2,
            dy: -2,
            x: config.canvasWidth / 2,
            y: config.canvasHeight - 30,
        }
    }
}

export function restart(game: Game) {
    game.ball.x = config.canvasWidth / 2;
    game.ball.y = config.canvasHeight - 30;
    game.ball.dx = 2;
    game.ball.dy = -2;
    game.paddleX = (config.canvasWidth - config.paddleWidth) / 2;
}

export function collisionDetection(game: Game) {
    for (var c = 0; c < config.brickColumnCount; c++) {
        for (var r = 0; r < config.brickRowCount; r++) {
            var b = game.bricks[c][r];
            if (b.status == 1) {
                if (game.ball.x > b.x &&
                    game.ball.x < b.x + config.brickWidth &&
                    game.ball.y > b.y &&
                    game.ball.y < b.y + config.brickHeight
                ) {
                    game.ball.dy = -game.ball.dy;
                    b.status = 0;
                    game.score++;
                    if (game.score == config.brickRowCount * config.brickColumnCount) {
                        alert("YOU WIN, CONGRATS!");
                        document.location.reload();
                    }
                }
            }
        }
    }
}