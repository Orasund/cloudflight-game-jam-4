const canvasHeight = 400;
const canvasWidth = 700;
const brickSize = 25;

export const config = {
    canvasWidth: canvasWidth,
    canvasHeight: canvasHeight,

    paddleHeight: 10,
    paddleWidth: 75,
    ballRadius: 10,

    brickRowCount: Math.floor(canvasWidth / brickSize),
    brickColumnCount: Math.floor(canvasHeight / brickSize),

    brickWidth: brickSize,
    brickHeight: brickSize,
    brickPadding: 0,
    brickOffsetTop: 0,
    brickOffsetLeft: 0,

    chickensPerCell: 5,
    levelResolution: 2,
    maxPlacedObsticales: 20,
    ballSpeed: 1.5,
    brickRejectForce: 4,
}