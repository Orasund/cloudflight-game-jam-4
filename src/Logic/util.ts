export function normalize(vec: number[]) {
    const [x, y] = vec;
    const len = length(vec);
    return [x / len, y / len];
}

export function length(vec: number[]): number {
    const [x, y] = vec

    return Math.sqrt(x * x + y * y)
}