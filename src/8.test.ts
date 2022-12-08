import { expect, test } from "vitest";
import { day8 } from "./8";

const input = `30373
25512
65332
33549
35390`;

test("Day 8 part 1 example", () => {
  expect(day8(input)[0]).toBe(21);
});

test("Day 8 part 2 example", () => {
  expect(day8(input)[1]).toBe(8);
});