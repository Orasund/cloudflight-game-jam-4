export function normalize(vec: number[]) {
    const [x, y] = vec;
    const len = lengthOf(vec);
    return [x / len, y / len];
}

export function lengthOf(vec: number[]): number {
    const [x, y] = vec

    return Math.sqrt(x * x + y * y)
}
export function withRandomness(vec: number[], amount: number): number[] {
    const [x, y] = vec

    return [x + (Math.random() * 2 - 1) * amount, y + (Math.random() * 2 - 1) * amount]
}
export function scale(vec: number[], amount: number): number[] {
    const [x, y] = vec;
    return [x * amount, y * amount];
}

export function addVecs(vec1: number[], vec2: number[]): number[] {
    const [x1, y1] = vec1;
    const [x2, y2] = vec2;
    return [x1 + x2, y1 + y2];
}

export function inArea(vec: number[], area: { pos: number[], width: number, height: number }) {
    const [x, y] = vec;
    const [areaX, areaY] = area.pos;
    return x > areaX - area.width / 2 &&
        x < areaX + area.width / 2 &&
        y > areaY - area.height / 2 &&
        y < areaY + area.height / 2
}