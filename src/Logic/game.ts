import { SoundSource } from "../Game/soundSource";
import { Brick, Game } from "../Game/types";
import { config } from "../config";
import { Sound } from "../sound";

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
                isVisible: false,
                lastClicKTick: 0
            };
        }
    }
    return {
        paddle: {
            x: (config.canvasWidth - config.paddleWidth) / 2
        },
        bricks: bricks,
        score: 0,
        lives: 3,
        balls: [{
            dx: 2,
            dy: -2,
            x: config.canvasWidth / 2,
            y: config.canvasHeight - 30,
        }],
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

export function collisionDetection(game: Game, sound: Sound) {
    for (var c = 0; c < config.brickColumnCount; c++) {
        for (var r = 0; r < config.brickRowCount; r++) {
            var b = game.bricks[c][r];
            if (b.isVisible == true) {
                game.balls.forEach(ball => {
                    if (ball.x > b.x &&
                        ball.x < b.x + config.brickWidth &&
                        ball.y > b.y &&
                        ball.y < b.y + config.brickHeight
                    ) {
                        ball.dy = -ball.dy;
                        sound.play(SoundSource.Bounce);
                        if (game.score == config.brickRowCount * config.brickColumnCount) {
                            gameWon(game)
                        }
                    }
                }
                )

            }
        }
    }
}