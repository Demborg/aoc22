import { Result } from "./types";

const startOfSymbol = (data: string, length: number) => {
    const buffer =  [...data.slice(0, length - 1)]
    for (let i = length - 1; i < data.length; i++) {
        buffer.push(data[i]);
        if (new Set(buffer).size == length) {
            return i + 1
        }
        buffer.shift()
    }
    return undefined
}

export const day6 = (input: string): Result => {
    return [startOfSymbol(input, 4) ?? -1, -1]
}