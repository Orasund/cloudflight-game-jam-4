import { ImageSource } from "../Game/imageSource";
import { SoundSource } from "../Game/soundSource";
import { Ball, Brick, CellType, Game, Snake } from "../Game/types";
import { config } from "../config";
import { Sound } from "../sound";
import { generateLevel } from "./level";
import { normalize, scale, withRandomness } from "./util";

export function newGame(lv: number): Game {
    const game = {
        paddle: {
            x: (config.canvasWidth - config.paddleWidth) / 2
        },
        levelSeconds: 0,
        bricks: newBrick(),
        score: 0,
        lives: 3,
        balls: [],
        snakes: [],
        end: "newGame" as "newGame",
        currentTick: 0,
        placed: [],
        level: lv
    }
    return generateLevel(lv, game);
}
function newBrick(): Brick[][] {
    let bricks: Brick[][] = []
    for (var c = 0; c < config.brickColumnCount; c++) {
        bricks[c] = [];
        for (var r = 0; r < config.brickRowCount; r++) {
            var brickX = (r * (config.brickWidth + config.brickPadding)) + config.brickOffsetLeft;
            var brickY = (c * (config.brickHeight + config.brickPadding)) + config.brickOffsetTop;
            let cellType: CellType = "obstacle";
            if (c == 0 && r < 5) {
                cellType = "goal";
            }
            bricks[c][r] = {
                x: brickX,
                y: brickY,
                isVisible: false,
                lastClicKTick: 0,
                cellType: cellType,
            };
        }
    }
    return bricks;
}
export function newBall(pos: number[]): Ball {
    const [x, y] = pos;
    const [dx, dy] = scale(normalize(withRandomness([0, 0], 1)), config.ballSpeed);
    return {
        dx: dx,
        dy: dy,
        x: x,
        y: y,
        isVisible: true,
    }
}

export function addFurniture(pos: number[], game: Game) {
    const [x, y] = pos;
    const rand = Math.floor(Math.random() * 5)
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
        case 3:
            image = ImageSource.Furniture5;
            break;
        default:
            image = ImageSource.Furniture4;
            break;
    }
    game.placed.push({ y: y, x: x, image: image });
    if (game.placed.length > config.maxPlacedObsticales) {
        const removed = game.placed.shift()!;
        game.bricks[removed.y][removed.x].isVisible = false;
    }
}

export function newSnake(pos: number[]): Snake {
    const [x, y] = pos;
    const [dx, dy] = normalize([2 + Math.random(), -2 + Math.random()]);
    return {
        dx: dx,
        dy: dy,
        x: x,
        y: y,
        isVisible: true,
    }
}


export function isGameWon(game: Game): boolean {
    return game.balls.filter(ball => ball.isVisible).length == 0
}

export function restart(game: Game) {
    game.balls.forEach(ball => {
        ball.x = config.canvasWidth / 2;
        ball.y = config.canvasHeight - 30;
        ball.dx = 2;
        ball.dy = -2;
    })

    game.paddle.x = (config.canvasWidth - config.paddleWidth) / 2;
}

export function gameOver(game: Game, sound: Sound) {
    game.end = "lost";
    sound.play(SoundSource.Die);
}
export function gameWon(game: Game, sound: Sound) {
    console.log("won");
    game.end = "won";
    sound.play(SoundSource.Win);
}

