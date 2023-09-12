export class Canvas {
    ctx: CanvasRenderingContext2D;
    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
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
}