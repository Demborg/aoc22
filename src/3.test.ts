import {expect, test} from "vitest"
import { day3 } from "./3";

const input = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`

test("Day 3 part one example", () => {
    expect(day3(input)[0]).toBe(157)
})

test("Day 3 part two example", () => {
    expect(day3(input)[1]).toBe(70)
})