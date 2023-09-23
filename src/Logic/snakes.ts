import { Game } from "../Game/types";
import { Sound } from "../sound";
import { collide_with_bricks, collide_with_outside_scene } from "./ball";




export function updateSnakes(game: Game, sound: Sound) {
    game.snakes.forEach(snake => {
        if (!snake.isVisible) return;

        collide_with_outside_scene(snake, true)

        collide_with_bricks(game, sound, snake, true)

        snake.x += snake.dx;
        snake.y += snake.dy;

    })


}