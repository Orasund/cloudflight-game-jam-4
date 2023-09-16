import { ImageSource } from "./Game/imageSource";
import { ImagePool } from "./imagePool";

export class Canvas {
    imagePool: ImagePool = new ImagePool();
    ctx: CanvasRenderingContext2D;
    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
    }


    image(args: { source: ImageSource, center: number[], width: number, height: number }) {
        const [x, y] = args.center;

        this.ctx.drawImage(this.imagePool.get(args.source), x - args.width / 2, y - args.height / 2, args.width, args.height)
        return this;
    }
    circle(args: { center: number[], radius: number, color: string }): Canvas {
        const [x, y] = args.center;

        this.ctx.beginPath();
        this.ctx.arc(x, y, args.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = args.color;
        this.ctx.fill();
        this.ctx.closePath();
        return this;
    }

    rect(args: { center: number[], width: number, height: number, color: string }): Canvas {
        const [x, y] = args.center;

        this.ctx.beginPath();
        this.ctx.rect(x - args.width / 2, y - args.height / 2, args.width, args.height);
        this.ctx.fillStyle = args.color;
        this.ctx.fill();
        this.ctx.closePath();
        return this;
    }
    text(pos: number[], value: string) {
        return this.textWithArgs({ pos, value })

    }
    title(pos: number[], value: string) {
        return this.textWithArgs({ pos, value, size: 32 })
    }
    textWithArgs(args: {
        value: string,
        pos: number[],
        color?: string,
        size?: number,
        font?: string
    }) {
        const [x, y] = args.pos;
        const font = args.font ? args.font : "Arial"
        const size = args.size ? args.size : 16
        const color = args.color ? args.color : "#0095DD"

        this.ctx.font = size + "px " + font;
        this.ctx.fillStyle = color;
        this.ctx.fillText(args.value, x, y);
        return this;
    }
}