import { ImageSource } from "./Game/imageSource"

/**
 * Loads all images and stores them in memory.
 */
export class ImagePool {
    pool: Map<ImageSource, CanvasImageSource> = new Map();
    amountLoaded = 0;

    constructor() {
        Object.values(ImageSource).map((source) =>
            this.pool.set(source, this.newImage(source))
        )
    }

    get(sprite: ImageSource) {
        return this.pool.get(sprite)!;
    }

    isLoading() {
        return this.amountLoaded < this.pool.size;
    }

    newImage(source: string): CanvasImageSource {
        const img = new Image();
        img.src = "assets/images/" + source + ".png";
        img.onload = () => this.amountLoaded++;
        return img;
    }
}

