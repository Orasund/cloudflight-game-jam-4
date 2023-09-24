
import { Ball, Game } from "../Game/types";
import { config } from "../config";
import { addVecs, lengthOf, normalize, scale, withRandomness } from "./util";
import { Sound } from "../sound";
import { SoundSource } from "../Game/soundSource";
import { gameOver } from "./game";

export function collide_with_bricks(game: Game, sound: Sound, ball: { x: number, y: number, dx: number, dy: number, isVisible: boolean }, is_snake: boolean) {
    for (var c = 0; c < config.brickColumnCount; c++) {
        for (var r = 0; r < config.brickRowCount; r++) {
            var b = game.bricks[c][r];
            if (ball.x > b.x - config.ballRadius &&
                ball.x < b.x + config.brickWidth + config.ballRadius &&
                ball.y > b.y - config.ballRadius &&
                ball.y < b.y + config.brickHeight + config.ballRadius
            ) {
                if (b.cellType == "goal" && !is_snake) {
                    ball.isVisible = false;
                }
                if (b.cellType == "lava" && !is_snake) {
                    gameOver(game, sound);
                }
                if (b.isVisible == true) {
                    const centerX = b.x + config.brickWidth / 2;
                    const centerY = b.y + config.brickHeight / 2;

                    const chickenForce = is_snake ? chickenForceAt([centerX, centerY], game) : [0, 0]
                    const [dx, dy] =
                        withRandomness(
                            scale(
                                normalize(
                                    addVecs(chickenForce,
                                        addVecs(
                                            forceAt([centerX, centerY], game),
                                            normalize([ball.x - centerX, ball.y - centerY])
                                        )
                                    )
                                ),
                                config.ballSpeed
                            ),
                            0.1
                        )


                    ball.dx = dx;
                    ball.dy = dy;


                    if (is_snake)
                        sound.play(SoundSource.SnakeCollide);
                    else {
                        const rand = Math.random();
                        if (rand < 0.80)
                            sound.play(SoundSource.Collide);
                        else if (rand < 0.85)
                            sound.play(SoundSource.Chicken1);
                        else if (rand < 0.90)
                            sound.play(SoundSource.Chicken2);
                        else if (rand < 0.95)
                            sound.play(SoundSource.Chicken3);
                        else
                            sound.play(SoundSource.Chicken4);
                    }

                }
            }
        }
    }
}

function collide_with_snakes(game: Game, ball: Ball, sound: Sound) {
    game.snakes.forEach(snake => {
        if (!snake.isVisible) return;
        const vec = [ball.x - snake.x, ball.y - snake.y]
        const lenOfVec = lengthOf(vec)
        if (lenOfVec < 2 * config.ballRadius) { gameOver(game, sound) }

    })

}
export function updateBalls(sound: Sound, game: Game) {
    game.balls.forEach(ball => {
        if (!ball.isVisible) return;

        collide_with_outside_scene(ball, false)

        collide_with_bricks(game, sound, ball, false)
        collide_with_snakes(game, ball, sound)
        ball.x += ball.dx;
        ball.y += ball.dy;
    })
}

export function collide_with_outside_scene(ball: { x: number, y: number, dx: number, dy: number, isVisible: boolean }, is_snake: boolean) {
    if (ball.x + ball.dx > config.canvasWidth - config.ballRadius ||
        ball.x + ball.dx < config.ballRadius) {
        if (is_snake)
            ball.dx = -ball.dx;
        else
            ball.isVisible = false;
    }
    if (ball.y + ball.dy > config.canvasHeight - config.ballRadius ||
        ball.y + ball.dy < config.ballRadius) {
        if (is_snake)
            ball.dy = -ball.dy;
        else
            ball.isVisible = false;
    }
}
export function forceAt(pos: number[], game: Game): number[] {
    const [x, y] = pos;
    return game.placed
        .map(placed => {
            const brick = game.bricks[placed.y][placed.x];
            const vec = [x - brick.x, y - brick.y];
            return scale(normalize(vec), config.brickRejectForce / lengthOf(vec))
        })
        .reduce(addVecs, [0, 0])
}
export function chickenForceAt(pos: number[], game: Game): number[] {
    const [x, y] = pos;
    return game.balls
        .map(ball => {
            const vec = [ball.x - x, ball.y - y];
            return scale(normalize(vec), config.chickenAttractForce / lengthOf(vec))
        })
        .reduce(addVecs, [0, 0])
}