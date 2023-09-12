import { config } from '../config'
import { Control } from '../control';
import { Brick, Game } from './types';


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
        dx: 2,
        dy: -2,
        x: config.canvasWidth / 2,
        y: config.canvasHeight - 30,
    }
}

export function tick(control: Control, game: Game) {

    movePaddle(control, game);
    collisionDetection(game);
    updateBall(game)
}

/******************************************************************
 * Private Functions
 ******************************************************************/

function updateBall(game: Game) {
    if (game.x + game.dx > config.canvasWidth - config.ballRadius ||
        game.x + game.dx < config.ballRadius) {
        game.dx = -game.dx;
    }
    if (game.y + game.dy < config.ballRadius) {
        game.dy = -game.dy;
    }
    else if (game.y + game.dy > config.canvasHeight - config.ballRadius) {
        if (game.x > game.paddleX && game.x < game.paddleX + config.paddleWidth) {
            game.dy = -game.dy;
        }
        else {
            game.lives--;
            if (!game.lives) {
                alert("GAME OVER");
                document.location.reload();
            }
            else {
                restart(game)
            }
        }
    }
    game.x += game.dx;
    game.y += game.dy;
}

function restart(game: Game) {
    game.x = config.canvasWidth / 2;
    game.y = config.canvasHeight - 30;
    game.dx = 2;
    game.dy = -2;
    game.paddleX = (config.canvasWidth - config.paddleWidth) / 2;
}

function movePaddle(control: Control, game: Game) {
    if (control.pressed.size == 0) {
        game.paddleX = control.mousePos[0] - config.paddleWidth / 2;
    }
    else if (control.pressed.has("Right") && game.paddleX < config.canvasWidth - config.paddleWidth) {
        game.paddleX += 7;
    }
    else if (control.pressed.has("Left") && game.paddleX > 0) {
        game.paddleX -= 7;
    }
}

function collisionDetection(game: Game) {
    for (var c = 0; c < config.brickColumnCount; c++) {
        for (var r = 0; r < config.brickRowCount; r++) {
            var b = game.bricks[c][r];
            if (b.status == 1) {
                if (game.x > b.x &&
                    game.x < b.x + config.brickWidth &&
                    game.y > b.y &&
                    game.y < b.y + config.brickHeight
                ) {
                    game.dy = -game.dy;
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

