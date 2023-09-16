import { Game } from '../Game/types';
import { Control } from '../control';
import { updateBall } from './ball';
import { collisionDetection } from './game';
import { movePaddle } from './paddle';

export function tick(control: Control, game: Game) {
    movePaddle(control, game);
    collisionDetection(game);
    updateBall(game)
}