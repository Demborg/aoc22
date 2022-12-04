import {expect, test} from "vitest"
import { day1 } from "./1";

const input = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`

test("Day 1 part one example", () => {
    expect(day1(input)[0]).toBe(24000)
})

test("Day 1 part two example", () => {
    expect(day1(input)[1]).toBe(45000)
})