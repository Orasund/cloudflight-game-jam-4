import { SoundSource } from "../Game/soundSource";
import { Ball, Brick, CellType, Game } from "../Game/types";
import { config } from "../config";
import { Sound } from "../sound";

export function newGame(): Game {
    let bricks: Brick[][] = []
    for (var c = 0; c < config.brickColumnCount; c++) {
        bricks[c] = [];
        for (var r = 0; r < config.brickRowCount; r++) {
            var brickX = (r * (config.brickWidth + config.brickPadding)) + config.brickOffsetLeft;
            var brickY = (c * (config.brickHeight + config.brickPadding)) + config.brickOffsetTop;
            let cellType: CellType = "obstacle";
            if (r < 3) {
                cellType = "goal";
            }
            bricks[c][r] = {
                x: brickX,
                y: brickY,
                isVisible: false,
                lastClicKTick: 0,
                cellType: cellType,
            };
        }
    }
    let balls: Ball[] = [{
        dx: 2,
        dy: -2,
        x: config.canvasWidth / 2,
        y: config.canvasHeight / 2,
    }]
    return {
        paddle: {
            x: (config.canvasWidth - config.paddleWidth) / 2
        },
        bricks: bricks,
        score: 0,
        lives: 3,
        balls: balls,
        end: undefined,
        currentTick: 0
    }
}

export function restart(game: Game) {
    game.balls.forEach(ball => {
        ball.x = config.canvasWidth / 2;
        ball.y = config.canvasHeight - 30;
        ball.dx = 2;
        ball.dy = -2;
    })

    game.paddle.x = (config.canvasWidth - config.paddleWidth) / 2;
}

export function gameOver(game: Game) {
    game.end = "lost";
}
export function gameWon(game: Game) {
    game.end = "won"
}