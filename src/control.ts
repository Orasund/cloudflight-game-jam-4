type Key = "Down" | "Left" | "Right" | "Up"

export class Control {
    pressed: Set<Key>;
    mousePos: number[];
    mouseDown: Boolean;
    clicked: Boolean;

    constructor() {
        this.pressed = new Set<Key>();
        this.mousePos = [0, 0];
        this.mouseDown = false;
        this.clicked = false;
    }

    mouseInArea(args: { center: number[], width: number, height: number }) {
        const [x, y] = this.mousePos;
        const [cX, cY] = args.center;

        const minX = cX - args.width / 2;
        const minY = cY - args.height / 2;
        const maxX = cX + args.width / 2;
        const maxY = cY + args.height / 2;

        return minX <= x && x <= maxX && minY <= y && y <= maxY
    }

    keyDownHandler(e: { code: string; }) {

        console.log(e.code);
        if (e.code == "ArrowRight" || e.code == "KeyD") {
            this.pressed.add("Right");
        }
        else if (e.code == 'ArrowLeft' || e.code == "KeyA") {
            this.pressed.add("Left");
        }
        else if (e.code == 'ArrowUp' || e.code == "KeyW") {
            this.pressed.add("Up");
        }
        else if (e.code == 'ArrowDown' || e.code == "KeyS") {
            this.pressed.add("Down");
        }
    }
    keyUpHandler(e: { code: string; }) {
        if (e.code == "ArrowRight" || e.code == "KeyD") {
            this.pressed.delete("Right");
        }
        else if (e.code == 'ArrowLeft' || e.code == "KeyA") {
            this.pressed.delete("Left");
        }
        else if (e.code == 'ArrowUp' || e.code == "KeyW") {
            this.pressed.delete("Up");
        }
        else if (e.code == 'ArrowDown' || e.code == "KeyS") {
            this.pressed.delete("Down");
        }

    }
    mouseMoveHandler(canvas: HTMLCanvasElement) {
        return (e: { clientX: number; clientY: number }) => {
            var relativeX = e.clientX - canvas.offsetLeft;
            var relativeY = e.clientY - canvas.offsetTop;
            if (relativeX > 0 && relativeX < canvas.width && relativeY > 0 && relativeY < canvas.height) {
                this.mousePos = [relativeX, relativeY]
            }
            if (relativeX > 0 && relativeX < canvas.width) {

            }
        }
    }
}


