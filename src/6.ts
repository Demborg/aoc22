import { Result } from "./types";

const startOfPacket = (data: string) => {
    const buffer =  [...data.slice(0, 3)]
    for (let i = 3; i < data.length; i++) {
        buffer.push(data[i]);
        if (new Set(buffer).size == 4) {
            return i + 1
        }
        buffer.shift()
    }
    return -1
}

export const day6 = (input: string): Result => {

    return [startOfPacket(input), -1]
}