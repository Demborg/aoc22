import {expect, test} from "vitest"
import { day5 } from "./5";

const input = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`

test("Day 5 part one example", () => {
    expect(day5(input)[0]).toBe("CMZ")
})