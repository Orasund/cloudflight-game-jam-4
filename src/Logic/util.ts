export function normalize(vec: number[]) {
    const [x, y] = vec;
    const len = length(vec);
    return [x / len, y / len];
}

export function length(vec: number[]): number {
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