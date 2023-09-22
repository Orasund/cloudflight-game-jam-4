import { Game } from '../Game/types';
import { config } from '../config';
import { Control } from '../control';
import { Sound } from '../sound';
import { updateBall } from './ball';
import { collisionDetection } from './game';
import { movePaddle } from './paddle';





function clickedBricks(game: Game, controls: Control) {
    for (var c = 0; c < config.brickColumnCount; c++) {
        for (var r = 0; r < config.brickRowCount; r++) {
            if (controls.mouseInArea({
                center:
                    [game.bricks[c][r].x + config.brickWidth / 2,
                    game.bricks[c][r].y + config.brickHeight / 2
                    ],
                width: config.brickWidth,
                height: config.brickHeight,
            }) && controls.clicked) {
                game.bricks[c][r].isVisible = !game.bricks[c][r].isVisible;
            }

        }
    }
}
export function tick(args: { control: Control, sound: Sound, game: Game }) {
    if (args.game.end!!)
        return;
    movePaddle(args.control, args.game);
    collisionDetection(args.game, args.sound);
    updateBall(args.game, args.sound)
    clickedBricks(args.game, args.control)

}