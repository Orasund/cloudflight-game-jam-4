import { Game } from "../Game/types";
import { collide_with_bricks, collide_with_outside_scene } from "./ball";




export function updateSnakes(game: Game) {
    game.snakes.forEach(snake => {
        if (!snake.isVisible) return;

        collide_with_outside_scene(snake)

        collide_with_bricks(game, snake, true)



    })


}