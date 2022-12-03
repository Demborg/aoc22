import { Result } from "./types";

const priority = (item?: string): number => {
  const n = item!.charCodeAt(0);
  return n > 96 ? n - 96 : n - 65 + 27;
};

export const day3 = (input: string): Result => {
  const rugsacks = input.split("\n");

  const p1 = rugsacks
    .map((r) => [r.slice(0, r.length / 2), r.slice(r.length / 2)])
    .map((r) => [...r[0]].find((c) => r[1].includes(c)))
    .map(priority)
    .reduce((a, b) => a + b);

  const p2 = [...Array(rugsacks.length / 3).keys()]
    .map((i) => [rugsacks[3 * i], rugsacks[3 * i + 1], rugsacks[3 * i + 2]])
    .map((g) => [...g[0]].find((c) => g[1].includes(c) && g[2].includes(c)))
    .map(priority)
    .reduce((a, b) => a + b);

  return [p1, p2];
};
