import {expect, test} from "vitest"
import { day4 } from "./4";

const input = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`

test("Day 4 part one example", () => {
    expect(day4(input)[0]).toBe(2)
})

test("Day 4 part two example", () => {
    expect(day4(input)[1]).toBe(4)
})