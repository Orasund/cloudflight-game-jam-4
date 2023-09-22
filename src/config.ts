const canvasHeight = 400;
const canvasWidth = 700;
const brickSize = 25;

export const config = {
    canvasWidth: canvasWidth,
    canvasHeight: canvasHeight,

    paddleHeight: 10,
    paddleWidth: 75,
    ballRadius: 10,

    brickRowCount: Math.floor(canvasHeight / brickSize),
    brickColumnCount: Math.floor(canvasWidth / brickSize),

    brickWidth: 25,
    brickHeight: 25,
    brickPadding: 0,
    brickOffsetTop: 0,
    brickOffsetLeft: 0,

}