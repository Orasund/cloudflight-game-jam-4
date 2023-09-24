const canvasHeight = 700;
const canvasWidth = 400;
const brickSize = 50;

export const config = {
    canvasWidth: canvasWidth,
    canvasHeight: canvasHeight,

    paddleHeight: 10,
    paddleWidth: 75,
    ballRadius: 20,

    brickRowCount: Math.floor(canvasWidth / brickSize),
    brickColumnCount: Math.floor(canvasHeight / brickSize),

    brickWidth: brickSize,
    brickHeight: brickSize,
    brickPadding: 0,
    brickOffsetTop: 0,
    brickOffsetLeft: 0,

    chickensPerCell: 5,
    levelResolution: 1,
    maxPlacedObsticales: 5,
    ballSpeed: 1.5,
    brickRejectForce: 4,
    chickenAttractForce: 3
}