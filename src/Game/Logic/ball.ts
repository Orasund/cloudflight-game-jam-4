import { config } from "../../config";
import { Game } from "../types";
import { restart } from "./game";

export function updateBall(game: Game) {
    if (game.ball.x + game.ball.dx > config.canvasWidth - config.ballRadius ||
        game.ball.x + game.ball.dx < config.ballRadius) {
        game.ball.dx = -game.ball.dx;
    }
    if (game.ball.y + game.ball.dy < config.ballRadius) {
        game.ball.dy = -game.ball.dy;
    }
    else if (game.ball.y + game.ball.dy > config.canvasHeight - config.ballRadius) {
        if (game.ball.x > game.paddleX && game.ball.x < game.paddleX + config.paddleWidth) {
            game.ball.dy = -game.ball.dy;
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
    game.ball.x += game.ball.dx;
    game.ball.y += game.ball.dy;
}

