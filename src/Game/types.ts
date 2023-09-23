export interface Brick {
    x: number,
    y: number,
    isVisible: boolean,
    lastClicKTick: number,
    cellType: CellType;
}
export type CellType = "obstacle" | "goal" | "lava"

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
    snakes: Snake[],
    paddle: Paddle,
    bricks: Brick[][],
    score: number,
    lives: number,
    balls: Ball[],
    end: "won" | "lost" | undefined;
    currentTick: number;
    placed: { x: number, y: number }[]
}