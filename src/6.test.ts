import { expect, test } from "vitest";
import { day6 } from "./6";

test("Day 6 example 1 part 1", () => {
  expect(day6("mjqjpqmgbljsphdztnvjfqwrcgsmlb")[0]).toBe(7);
});

test("Day 6 example 1 part 2", () => {
  expect(day6("mjqjpqmgbljsphdztnvjfqwrcgsmlb")[1]).toBe(19);
});
