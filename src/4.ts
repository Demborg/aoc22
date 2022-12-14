import { Result } from "./types";
export const day4 = (input: string): Result => {
  const parsed = input
    .split("\n")
    .map((pair) =>
      pair.split(",").map((elf) => elf.split("-").map(parseFloat))
    );
  return [
    parsed
      .map(
        (pair) =>
          (pair[0][0] <= pair[1][0] && pair[0][1] >= pair[1][1]) ||
          (pair[1][0] <= pair[0][0] && pair[1][1] >= pair[0][1])
      )
      .reduce((a, b) => a + (b ? 1 : 0), 0),
    parsed
      .map(
        (pair) =>
          Math.min(pair[0][1], pair[1][1]) - Math.max(pair[0][0], pair[1][0]) >= 0
      )
      .reduce((a, b) => a + (b ? 1 : 0), 0),
  ];
};
