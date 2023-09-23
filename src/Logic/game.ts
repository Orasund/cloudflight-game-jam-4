import { Ball, Brick, CellType, Game } from "../Game/types";
import { config } from "../config";
import { generateLevel } from "./level";
import { normalize } from "./util";

export function newGame(lv: number): Game {
    const game = {
        paddle: {
            x: (config.canvasWidth - config.paddleWidth) / 2
        },
        bricks: newBrick(),
        score: 0,
        lives: 3,
        balls: [],
        end: undefined,
        currentTick: 0
    }
    return generateLevel(lv, game);
}
function newBrick(): Brick[][] {
    let bricks: Brick[][] = []
    for (var c = 0; c < config.brickColumnCount; c++) {
        bricks[c] = [];
        for (var r = 0; r < config.brickRowCount; r++) {
            var brickX = (r * (config.brickWidth + config.brickPadding)) + config.brickOffsetLeft;
            var brickY = (c * (config.brickHeight + config.brickPadding)) + config.brickOffsetTop;
            let cellType: CellType = "obstacle";
            if (c == 0 && r < 5) {
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
    return bricks;
}
export function newBall(pos: number[]): Ball {
    const [x, y] = pos;
    const [dx, dy] = normalize([2 + Math.random(), -2 + Math.random()]);
    return {
        dx: dx,
        dy: dy,
        x: x,
        y: y,
        isVisible: true,
    }
}

export function isGameWon(game: Game): boolean {
    return game.balls.filter(ball => ball.isVisible).length == 0
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