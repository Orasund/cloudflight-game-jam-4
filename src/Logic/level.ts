import { Game } from "../Game/types"
import { config } from "../config";
import { addFurniture, newBall, newSnake } from "./game";

function initiateLevel(lv: number): string[] | undefined {
    const arr = [
        level0,
        level0_1,
        level0_2,
        level2,
        level2_1,
        level2_2,
        level2_3,
        level1,
        level1_1,
        level1_2,
        level4

    ]
    return arr[lv]
}

const level0 =
    [
        "🧱🧱🧱🔲🔲🧱🧱🧱",
        "🧱🧱🧱🔲🔲🧱🧱🧱",
        "🧱🧱🧱🔲🔲🧱🧱🧱",
        "🧱🔲🔲🔲🔲🔲🔲🧱",
        "🧱🔲🔲🔲🔲🔲🔲🧱",
        "🧱🔲🔲🔲🔲🔲🔲🧱",
        "🧱🪑🔲🔲🔲🔲🔲🧱",
        "🧱🪑🔲🔲🔲🔲🪑🧱",
        "🧱🔲🔲🔲🐤🔲🪑🧱",
        "🧱🔲🔲🔲🔲🔲🔲🧱",
        "🧱🔲🪑🔲🔲🔲🔲🧱",
        "🧱🧱🧱🧱🧱🧱🧱🧱",
        "🧱🧱🧱🧱🧱🧱🧱🧱",
        "🧱🧱🧱🧱🧱🧱🧱🧱",
    ]

const level0_1 =
    [
        "🧱🧱🧱🧱🧱🔲🔲🧱",
        "🧱🧱🧱🧱🧱🔲🔲🧱",
        "🧱🔲🔲🔲🔲🔲🔲🧱",
        "🧱🪑🔲🔲🔲🔲🔲🧱",
        "🧱🔲🔲🔲🔲🔲🔲🧱",
        "🧱🔲🔲🧱🧱🧱🧱🧱",
        "🧱🔲🔲🔲🔲🪑🔲🧱",
        "🧱🪑🔲🔲🔲🔲🔲🧱",
        "🧱🔲🔲🔲🔲🔲🔲🧱",
        "🧱🧱🧱🧱🧱🔲🔲🧱",
        "🧱🔲🐤🔲🔲🔲🔲🧱",
        "🧱🔲🔲🔲🔲🔲🔲🧱",
        "🧱🔲🪑🔲🔲🔲🪑🧱",
        "🧱🧱🧱🧱🧱🧱🧱🧱",
    ]
const level0_2 =
    [
        "🧱🔲🧱🧱🧱🧱🔲🧱",
        "🧱🔲🧱🧱🧱🧱🔲🧱",
        "🧱🔲🧱🧱🧱🧱🔲🧱",
        "🧱🔲🔲🔲🔲🔲🔲🧱",
        "🧱🪑🔲🔲🐤🔲🔲🧱",
        "🧱🪑🔲🔲🔲🔲🪑🧱",
        "🧱🔲🔲🪑🔲🔲🪑🧱",
        "🧱🧱🧱🧱🧱🧱🧱🧱",
        "🧱🧱🧱🧱🧱🧱🧱🧱",
        "🧱🧱🧱🧱🧱🧱🧱🧱",
        "🧱🧱🧱🧱🧱🧱🧱🧱",
        "🧱🧱🧱🧱🧱🧱🧱🧱",
        "🧱🧱🧱🧱🧱🧱🧱🧱",
        "🧱🧱🧱🧱🧱🧱🧱🧱",
    ]
const level1 =
    [
        "🧱🧱🧱🔲🔲🧱🧱🧱",
        "🧱🧱🧱🔲🔲🧱🧱🧱",
        "🧱🧱🧱🔲🔲🧱🧱🧱",
        "🧱🔲🔲🔲🔲🔲🔲🧱",
        "🧱🔲🔲🔲🔲🔲🪑🧱",
        "🧱🔲🔲🔲🔲🔲🔲🧱",
        "🧱🔲🔲🔲🐤🔲🔲🧱",
        "🧱🔲🔲🔲🔲🔲🔲🧱",
        "🧱🪑🪑🧱🧱🪑🪑🧱",
        "🧱🔲🔲🔲🔲🔲🔲🧱",
        "🧱🔲🔲🔲🔲🔲🔲🧱",
        "🌋🌋🌋🌋🌋🌋🌋🌋",
        "🌋🌋🌋🌋🌋🌋🌋🌋",
        "🌋🌋🌋🌋🌋🌋🌋🌋",
    ]

const level1_1 =
    [
        "🔲🔲🔲🔲🔲🔲🔲🔲",
        "🌋🔲🔲🔲🔲🔲🔲🌋",
        "🌋🔲🔲🔲🔲🔲🔲🌋",
        "🌋🔲🔲🔲🔲🔲🔲🌋",
        "🔲🔲🔲🔲🔲🔲🔲🔲",
        "🧱🧱🧱🪑🪑🧱🧱🧱",
        "🧱🧱🧱🪑🪑🧱🧱🧱",
        "🧱🧱🧱🪑🔲🧱🧱🧱",
        "🧱🧱🧱🔲🔲🧱🧱🧱",
        "🧱🧱🧱🔲🐤🧱🧱🧱",
        "🧱🧱🧱🔲🔲🧱🧱🧱",
        "🧱🧱🧱🔲🔲🧱🧱🧱",
        "🧱🧱🧱🔲🔲🧱🧱🧱",
        "🧱🧱🧱🧱🧱🧱🧱🧱",
    ]



const level1_2 =
    [
        "🌋🔲🔲🔲🔲🔲🔲🔲",
        "🌋🔲🔲🔲🔲🔲🔲🔲",
        "🌋🔲🔲🔲🔲🔲🔲🔲",
        "🌋🔲🔲🔲🔲🔲🔲🔲",
        "🌋🔲🔲🔲🔲🔲🔲🔲",
        "🧱🔲🔲🔲🧱🧱🧱🧱",
        "🧱🔲🔲🔲🔲🪑🔲🧱",
        "🧱🪑🔲🔲🔲🔲🔲🧱",
        "🧱🔲🔲🔲🔲🔲🔲🧱",
        "🧱🧱🧱🧱🪑🔲🔲🧱",
        "🧱🔲🔲🔲🪑🔲🔲🧱",
        "🧱🔲🔲🔲🔲🔲🔲🧱",
        "🧱🐤🔲🔲🔲🔲🪑🧱",
        "🧱🧱🧱🧱🧱🧱🧱🧱",
    ]
const level2 =
    [
        "🔲🔲🔲🔲🔲🔲🔲🔲",
        "🔲🔲🔲🔲🔲🔲🔲🔲",
        "🔲🔲🔲🔲🔲🔲🔲🔲",
        "🔲🔲🔲🔲🔲🔲🔲🔲",
        "🧱🔲🔲🧱🧱🧱🧱🧱",
        "🧱🔲🔲🔲🔲🔲🪑🧱",
        "🧱🔲🔲🔲🐤🔲🪑🧱",
        "🧱🔲🔲🔲🔲🔲🔲🧱",
        "🧱🪑🪑🪑🔲🔲🔲🧱",
        "🧱🧱🧱🧱🧱🔲🔲🧱",
        "🔲🔲🔲🔲🔲🔲🔲🔲",
        "🔲🔲🔲🔲🔲🔲🔲🔲",
        "🔲🔲🔲🐍🔲🔲🔲🔲",
        "🔲🔲🔲🔲🔲🔲🔲🔲",
    ]

const level2_1 =
    [
        "🔲🔲🔲🔲🔲🔲🔲🔲",
        "🔲🔲🔲🔲🔲🔲🔲🔲",
        "🔲🔲🔲🔲🔲🔲🔲🔲",
        "🧱🧱🧱🔲🔲🧱🧱🧱",
        "🔲🔲🔲🔲🔲🔲🔲🔲",
        "🔲🔲🔲🔲🔲🔲🔲🔲",
        "🔲🔲🔲🐍🔲🔲🔲🔲",
        "🔲🔲🔲🔲🔲🔲🔲🔲",
        "🧱🔲🔲🧱🧱🧱🧱🧱",
        "🧱🔲🔲🔲🔲🔲🪑🧱",
        "🧱🔲🔲🔲🐤🔲🪑🧱",
        "🧱🔲🔲🔲🔲🔲🔲🧱",
        "🧱🪑🪑🪑🔲🔲🔲🧱",
        "🧱🧱🧱🧱🧱🧱🧱🧱",
    ]

const level2_2 =
    [
        "🧱🔲🧱🔲🔲🧱🔲🧱",
        "🧱🔲🧱🔲🔲🧱🔲🧱",
        "🧱🔲🧱🔲🔲🧱🔲🧱",
        "🧱🔲🧱🔲🔲🧱🔲🧱",
        "🧱🔲🔲🔲🔲🔲🔲🧱",
        "🧱🔲🔲🔲🐍🔲🔲🧱",
        "🧱🔲🔲🔲🔲🔲🔲🧱",
        "🧱🔲🔲🔲🔲🔲🪑🧱",
        "🧱🔲🪑🧱🧱🔲🔲🧱",
        "🧱🔲🔲🔲🔲🔲🔲🧱",
        "🧱🔲🔲🔲🐤🔲🔲🧱",
        "🧱🔲🔲🔲🔲🔲🪑🧱",
        "🧱🔲🪑🔲🔲🔲🪑🧱",
        "🧱🧱🧱🧱🧱🧱🧱🧱",
    ]


const level2_3 =
    [
        "🧱🔲🧱🧱🧱🔲🔲🧱",
        "🧱🐍🧱🧱🧱🔲🔲🧱",
        "🧱🔲🧱🧱🧱🔲🔲🧱",
        "🧱🔲🧱🧱🧱🔲🔲🧱",
        "🧱🔲🔲🔲🪑🔲🔲🧱",
        "🧱🔲🔲🔲🔲🔲🔲🧱",
        "🧱🔲🔲🔲🐤🔲🔲🧱",
        "🧱🪑🔲🔲🔲🔲🔲🧱",
        "🧱🪑🔲🔲🔲🔲🔲🧱",
        "🧱🪑🔲🔲🔲🪑🔲🧱",
        "🧱🔲🔲🧱🧱🧱🔲🧱",
        "🧱🔲🔲🧱🧱🧱🔲🧱",
        "🧱🔲🔲🧱🧱🧱🐍🧱",
        "🧱🔲🔲🧱🧱🧱🔲🧱",
    ]
const level4 =
    [
        "🧱🧱🧱🔲🔲🧱🧱🧱",
        "🧱🔲🔲🔲🔲🔲🔲🧱",
        "🧱🔲🔲🔲🐍🔲🔲🧱",
        "🧱🔲🔲🔲🔲🔲🔲🧱",
        "🧱🔲🔲🔲🔲🔲🔲🧱",
        "🧱🪑🔲🔲🔲🔲🔲🧱",
        "🧱🪑🔲🔲🔲🔲🔲🧱",
        "🧱🔲🔲🔲🔲🔲🔲🧱",
        "🧱🔲🔲🔲🔲🔲🪑🧱",
        "🧱🔲🔲🔲🔲🔲🪑🧱",
        "🧱🔲🔲🔲🔲🔲🪑🧱",
        "🧱🔲🔲🔲🐤🔲🔲🧱",
        "🧱🔲🔲🔲🔲🔲🔲🧱",
        "🧱🧱🧱🧱🧱🧱🧱🧱",
    ]

export function applyChar(char: string, pos: number[], game: Game) {
    const [x, y] = pos;

    switch (char) {
        case "🪑":
            game.bricks[y][x] = {
                x: x * config.brickWidth,
                y: y * config.brickHeight,
                isVisible: true,
                lastClicKTick: 0,
                cellType: "chair",
            };
            addFurniture(pos, game);
            console.log(game.placed);
            return;
        case "🌋":
            game.bricks[y][x] = {
                x: x * config.brickWidth,
                y: y * config.brickHeight,
                isVisible: true,
                lastClicKTick: 0,
                cellType: "lava",
            };
            return
        case "🐍":
            game.snakes.push(newSnake([x * config.brickWidth, y * config.brickHeight]));
            game.bricks[y][x] = {
                x: x * config.brickWidth,
                y: y * config.brickHeight,
                isVisible: false,
                lastClicKTick: 0,
                cellType: "chair",
            };
            return;
        case "🐤":
            for (var i = 0; i < config.chickensPerCell; i++) {
                game.balls.push(newBall([x * config.brickWidth, y * config.brickHeight]))
            };
            game.bricks[y][x] = {
                x: x * config.brickWidth,
                y: y * config.brickHeight,
                isVisible: false,
                lastClicKTick: 0,
                cellType: "chair",
            };
            return;
        case "🧱":
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
                cellType: "chair",
            };
            return;
    }
}

export function generateLevel(lv: number, game: Game) {
    const init = initiateLevel(lv)
    if (init!!) {
        init.map(string => Array.from(string).flatMap(char => Array(config.levelResolution).fill(char)))
            .flatMap(row => Array(config.levelResolution).fill(row) as string[][])
            .forEach((row, y) => {
                row.forEach((char, x) => {
                    applyChar(char, [x, y], game);
                })
            }
            )
    } else { game.end = "finished" }


    return game;
}

