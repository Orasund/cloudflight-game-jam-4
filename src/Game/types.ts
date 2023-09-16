export interface Brick {
    x: number,
    y: number,
    status: number
}
export interface Ball {
    dx: number,
    dy: number,
    x: number,
    y: number
}
export interface Paddle {
    x: number
}
export interface Game {
    paddle: Paddle,
    bricks: Brick[][],
    score: number,
    lives: number,
    ball: Ball,
    end: "won" | "lost" | undefined;
}