import { Game } from "../Game/types"
import { config } from "../config";
import { newBall, newSnake } from "./game";

function initiateLevel(lv: number) {
    switch (lv) {
        case 1:
            return level1
    }
    return []
}

const level1 =
    [
        "🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱",
        "🧱🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🧱",
        "🧱🔲🔲🔲🔲🔲🧱🔲🔲🔲🔲🔲🔲🧱",
        "🏁🔲🔲🔲🔲🔲🧱🔲🔲🔲🐤🔲🔲🧱",
        "🏁🔲🔲🔲🔲🔲🧱🔲🔲🔲🔲🔲🔲🧱",
        "🧱🔲🔲🔲🔲🔲🧱🔲🔲🔲🔲🔲🔲🧱",
        "🧱🔲🐍🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🧱",
        "🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱",
    ]

export function applyChar(char: string, pos: number[], game: Game) {
    const [x, y] = pos;
    switch (char) {
        case "🐍":
            game.snakes.push(newSnake([x * config.brickWidth, y * config.brickHeight]));
            return;
        case "🐤":
            game.balls.push(newBall([x * config.brickWidth, y * config.brickHeight]));
            return;
        case "🧱":
            console.log(game.bricks)
            console.log([x, y])
            game.bricks[y][x] = {
                x: x * config.brickWidth,
                y: y * config.brickHeight,
                isVisible: true,
                lastClicKTick: 0,
                cellType: "obstacle",
            };
            return;
        case "🏁":
            game.bricks[y][x] = {
                x: x * config.brickWidth,
                y: y * config.brickHeight,
                isVisible: true,
                lastClicKTick: 0,
                cellType: "goal",
            };
            return;
        default:
            game.bricks[y][x] = {
                x: x * config.brickWidth,
                y: y * config.brickHeight,
                isVisible: false,
                lastClicKTick: 0,
                cellType: "obstacle",
            };
            return;
    }
}

export function generateLevel(lv: number, game: Game) {
    initiateLevel(lv)
        .map(string => Array.from(string).flatMap(char => Array(config.levelResolution).fill(char)))
        .flatMap(row => Array(config.levelResolution).fill(row) as string[][])
        .forEach((row, y) => {
            row.forEach((char, x) => {
                applyChar(char, [x, y], game);
            })
        }
        )

    return game;
}

