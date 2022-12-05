import {expect, test} from "vitest"
import { day2 } from "./2";

const input = `A Y
B X
C Z`

test("Day 2 part one example", () => {
    expect(day2(input)[0]).toBe(15)
})

test("Day 2 part two example", () => {
    expect(day2(input)[1]).toBe(12)
})