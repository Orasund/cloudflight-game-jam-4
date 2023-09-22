import { Game } from '../Game/types';
import { Control } from '../control';
import { Sound } from '../sound';
import { updateBall } from './ball';
import { collisionDetection } from './game';
import { movePaddle } from './paddle';

export function tick(args: { control: Control, sound: Sound, game: Game }) {
    if (args.control.clicked) {
        const [x, y] = args.control.mousePos;
    }
    if (args.game.end!!)
        return;
    movePaddle(args.control, args.game);
    collisionDetection(args.game, args.sound);
    updateBall(args.game, args.sound)
}