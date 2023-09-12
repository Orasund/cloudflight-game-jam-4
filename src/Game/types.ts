export interface Brick { x: number; y: number; status: number }
export interface Game {
    paddleX: number,
    bricks: Brick[][],
    score: number,
    lives: number,
    dx: number,
    dy: number,
    x: number,
    y: number
}
