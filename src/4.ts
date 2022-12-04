import { Result } from "./types";
export const day4 = (input: string): Result => {
  const count = input
    .split("\n")
    .map((pair) => pair.split(",").map((elf) => elf.split("-").map(parseFloat)))
    .map(
      (pair) =>
        (pair[0][0] <= pair[1][0] && pair[0][1] >= pair[1][1]) ||
        (pair[1][0] <= pair[0][0] && pair[1][1] >= pair[0][1])
    ).reduce((a, b) => a + (b ? 1 : 0), 0);
  return [count, -1];
};
