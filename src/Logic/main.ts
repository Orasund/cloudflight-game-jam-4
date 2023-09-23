import { Game } from '../Game/types';
import { config } from '../config';
import { Control } from '../control';
import { Sound } from '../sound';
import { updateBalls } from './ball';
import { isGameWon, newGame } from './game';
import { movePaddle } from './paddle';
import { updateSnakes } from './snakes';
import { generateLevel } from './level';





function clickedBricks(game: Game, controls: Control) {
    for (var c = 0; c < config.brickColumnCount; c++) {
        for (var r = 0; r < config.brickRowCount; r++) {
            if (game.bricks[c][r].isVisible) continue;

            //let lastClickTickDiff = game.currentTick - game.bricks[c][r].lastClicKTick
            if (
                controls.mouseInArea({
                    center:
                        [game.bricks[c][r].x + config.brickWidth / 2,
                        game.bricks[c][r].y + config.brickHeight / 2
                        ],
                    width: config.brickWidth,
                    height: config.brickHeight,
                }) &&

                controls.mouseDown
                //lastClickTickDiff > 3 * 60
            ) {
                game.bricks[c][r].isVisible = true;
                game.placed.push({ y: c, x: r });
                if (game.placed.length > config.maxPlacedObsticales) {
                    const removed = game.placed.shift()!;
                    game.bricks[removed.y][removed.x].isVisible = false;
                }
                //game.bricks[c][r].lastClicKTick = game.currentTick;
            }

        }
    }
}
export function tick(control: Control, sound: Sound, game: Game) {
    if (game.end!!) {

        if (game.end === "lost" && control.mouseDown) {
            console.log("lost")
            game = newGame(game.level)
        } else if (game.end === "won" && control.mouseDown) {
            console.log("won")
            game = newGame(game.level + 1)
        }
        return game
    }

    game.currentTick++;
    movePaddle(control, game);
    updateBalls(game)
    updateSnakes(game)
    clickedBricks(game, control)

    if ((isGameWon(game))) game.end = "won";
    return game;
}