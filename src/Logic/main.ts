import { Game } from '../Game/types';
import { config } from '../config';
import { Control } from '../control';
import { updateBalls } from './ball';
import { gameWon, isGameWon, newGame } from './game';
import { movePaddle } from './paddle';
import { updateSnakes } from './snakes';
import { inArea } from './util';
import { Sound } from '../sound';
import { ImageSource } from '../Game/imageSource';





function clickedBricks(game: Game, controls: Control) {
    for (var c = 0; c < config.brickColumnCount; c++) {
        for (var r = 0; r < config.brickRowCount; r++) {
            if (game.bricks[c][r].isVisible) continue;

            const posX = game.bricks[c][r].x + config.brickWidth / 2
            const posY = game.bricks[c][r].y + config.brickHeight / 2

            //let lastClickTickDiff = game.currentTick - game.bricks[c][r].lastClicKTick
            if (
                controls.mouseInArea({
                    center: [posX, posY],
                    width: config.brickWidth,
                    height: config.brickHeight,
                }) && noCreatureInArea([posX, posY], config.brickWidth, config.brickHeight, game)
                && controls.mouseDown && game.currentTick > 30

                //lastClickTickDiff > 3 * 60
            ) {
                game.bricks[c][r].isVisible = true;
                const rand = Math.floor(Math.random() * 4)
                let image;
                switch (rand) {
                    case 0:
                        image = ImageSource.Furniture1;
                        break;
                    case 1:
                        image = ImageSource.Furniture2;
                        break;
                    case 2:
                        image = ImageSource.Furniture3;
                        break;
                    default:
                        image = ImageSource.Furniture4;
                        break;
                }
                game.placed.push({ y: c, x: r, image: image });
                if (game.placed.length > config.maxPlacedObsticales) {
                    const removed = game.placed.shift()!;
                    game.bricks[removed.y][removed.x].isVisible = false;
                }
                //game.bricks[c][r].lastClicKTick = game.currentTick;
            }

        }
    }
}

export function noCreatureInArea(pos: number[], width: number, height: number, game: Game) {
    return (game.balls.filter(ball =>
        inArea([ball.x, ball.y], { pos, width: width + config.ballRadius * 2, height: height + config.ballRadius * 2 })
    ).length == 0) && (game.snakes.filter(ball =>
        inArea([ball.x, ball.y], { pos, width: width + config.ballRadius * 2, height: height + config.ballRadius * 2 })
    ).length == 0)
}
let musicPlaying = false;
export function tick(control: Control, sound: Sound, game: Game) {
    if (control.mouseDown && !musicPlaying) {
        sound.playSong();
        musicPlaying = true;
    }
    if (game.end!!) {

        if (game.end === "lost" && control.mouseDown) {
            game = newGame(game.level)
        } else if (game.end === "won" && control.mouseDown) {
            game = newGame(game.level + 1)
        }
        return game
    }

    game.currentTick++;
    movePaddle(control, game);
    updateBalls(sound, game)
    updateSnakes(game, sound)
    clickedBricks(game, control)

    if (isGameWon(game)) gameWon(game, sound);
    return game;
}