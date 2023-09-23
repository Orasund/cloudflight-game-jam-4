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
    text(value: string, pos: number[]) {
        return this.textWithArgs({ pos, value })

    }
    title(value: string, pos: number[]) {
        return this.textWithArgs({ pos, value, size: 64, center: true })
    }
    textWithArgs(args: {
        value: string,
        pos: number[],
        color?: string,
        size?: number,
        font?: string,
        center?: boolean
    }) {
        const [x, y] = args.pos;
        const font = args.font ?? "Arial"
        const size = args.size ?? 16
        const color = args.color ?? "#000000"
        const centering = args.center ?? false

        this.ctx.font = size + "px " + font;
        this.ctx.fillStyle = color;
        if (centering) this.ctx.textAlign = "center"
        this.ctx.fillText(args.value, x, y);
        if (centering) this.ctx.textAlign = "left"
        return this;
    }
}