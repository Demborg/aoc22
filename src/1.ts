import { Result } from "./types";
export const day1 = (input: string): Result => {
  const caloriesPerElf = input.split("\n\n").map((elf) =>
    elf
      .split("\n")
      .map(parseFloat)
      .reduce((a, b) => a + b)
  );
  return [
    Math.max(...caloriesPerElf),
    caloriesPerElf
      .sort((a, b) => a - b)
      .slice(-3)
      .reduce((a, b) => a + b),
  ];
};
