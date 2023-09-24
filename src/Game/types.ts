import { ImageSource } from "./imageSource";

export interface Brick {
    x: number,
    y: number,
    isVisible: boolean,
    lastClicKTick: number,
    cellType: CellType;
}
export type CellType = "obstacle" | "goal" | "lava" | "chair"

export interface Ball {
    dx: number,
    dy: number,
    x: number,
    y: number,
    isVisible: boolean,
}

export interface Snake {
    dx: number,
    dy: number,
    x: number,
    y: number,
    isVisible: boolean,
}


export interface Paddle {
    x: number
}
export interface Game {
    levelSeconds: number;
    snakes: Snake[],
    paddle: Paddle,
    bricks: Brick[][],
    score: number,
    lives: number,
    balls: Ball[],
    end: "newGame" | "won" | "lost" | "finished" | undefined,
    currentTick: number,
    placed: { x: number, y: number, image: ImageSource }[],
    level: number,
    nextGameIsReady: boolean
}