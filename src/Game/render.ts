import { Canvas } from "../canvas";
import { Game } from "./types";
import { config } from "../config";
import { ImageSource } from "./imageSource";
import { levelTimes, time_text, total_game_seconds } from "../Logic/counter";

function drawBricks(game: Game, canvas: Canvas) {
    for (var c = 0; c < config.brickColumnCount; c++) {
        for (var r = 0; r < config.brickRowCount; r++) {
            let brick_source = ImageSource.BrickInvisible;
            if (game.bricks[c][r].isVisible == true) {
                brick_source = ImageSource.Brick1
            }
            if (game.bricks[c][r].cellType == "goal") {
                brick_source = ImageSource.Brick2;
            }
            if (game.bricks[c][r].cellType == "lava") {
                brick_source = ImageSource.Lava;
            }
            if (game.bricks[c][r].cellType == "chair" &&
                game.bricks[c][r].isVisible == true) {
                brick_source =
                    game.placed
                        .find(it => it.y === c && it.x === r)
                        ?.image ?? ImageSource.Furniture1;
            }

            canvas.image({
                source: brick_source,
                center:
                    [game.bricks[c][r].x + config.brickWidth / 2,
                    game.bricks[c][r].y + config.brickHeight / 2
                    ],
                width: config.brickWidth,
                height: config.brickHeight,
            })
        }
    }
}


export function toCanvas(game: Game, canvas: Canvas) {
    if (game.end!!)
        canvas.rect({
            center: [config.canvasWidth / 2, config.canvasHeight / 2],
            width: config.canvasWidth,
            height: config.canvasHeight,
            color: game.end === "lost" ? "#DF603E" : "#FFDE59"
        });




    switch (game.end) {
        case "won":
            canvas.title("Level Won", [config.canvasWidth / 2, config.canvasHeight / 2])
            canvas.textWithArgs({ value: "Click to Continue", pos: [config.canvasWidth / 2, config.canvasHeight / 2 + 50], center: true })
            canvas.textWithArgs({ value: time_text, pos: [config.canvasWidth / 2, config.canvasHeight / 2 + 150], center: true })

            return;
        case "lost":
            canvas.title("Game Lost", [config.canvasWidth / 2, config.canvasHeight / 2])
            canvas.textWithArgs({ value: "Click to Continue", pos: [config.canvasWidth / 2, config.canvasHeight / 2 + 50], center: true })
            return;
        case "newGame":
            canvas.title("Help the", [config.canvasWidth / 2, config.canvasHeight / 2 - 150])
            canvas.title("Chickens", [config.canvasWidth / 2, config.canvasHeight / 2 - 75])
            canvas.title("Escape!", [config.canvasWidth / 2, config.canvasHeight / 2])
            canvas.textWithArgs({ value: "Click to Continue", pos: [config.canvasWidth / 2, config.canvasHeight / 2 + 50], center: true })
            return;
        case "finished":
            canvas.title("Thanks", [config.canvasWidth / 2, config.canvasHeight / 2 - 50])
            canvas.title("for", [config.canvasWidth / 2, config.canvasHeight / 2])
            canvas.title("playing", [config.canvasWidth / 2, config.canvasHeight / 2 + 50])
            canvas.text("Total time " + total_game_seconds, [config.canvasWidth / 4, config.canvasHeight / 2 + 120])
            let yOffset = 140
            for (const [key, value] of Object.entries(levelTimes)) {
                console.log(key, value);
                canvas.text("Level " + key + " : " + value + " s", [config.canvasWidth / 4, config.canvasHeight / 2 + yOffset])
                yOffset += 20;

            }

            return;
    }


    drawBricks(game, canvas);
    if (game.placed.length === 0)
        canvas.textWithArgs({ value: "Click to place", pos: [config.canvasWidth / 2, config.canvasHeight - 75], size: 24, center: true })
    game.snakes.forEach(snake => {
        if (!snake.isVisible) return;
        canvas.image({
            source: ImageSource.Snake,
            center: [snake.x, snake.y],
            width: config.ballRadius * 2,
            height: config.ballRadius * 2,
        })
    })
    game.balls.forEach(ball => {
        if (!ball.isVisible) return;
        canvas.image({
            source: ImageSource.RoundChicken,
            center: [ball.x, ball.y],
            width: config.ballRadius * 2,
            height: config.ballRadius * 2,
        })
    })
    // show time in canvas
    canvas.rect({ center: [20, config.canvasHeight - 20], width: 170, height: 17, color: "white" })
    canvas.textWithArgs({ value: time_text, pos: [5, config.canvasHeight - 15], color: "black" })
}