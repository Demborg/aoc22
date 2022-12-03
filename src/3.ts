import { Result } from "./types";
export const day3 = (input: string): Result => {
  const rugsacks = input
    .split("\n")
    .map((r) => [r.slice(0, r.length / 2), r.slice(r.length / 2)])
    .map((r) => [...r[0]].find((c) => r[1].includes(c)))
    .map((c) => c!.charCodeAt(0))
    .map((n) => (n > 96 ? n - 96 : n - 65 + 27));
  console.log(rugsacks);
  return [rugsacks.reduce((a, b) => a + b), -1];
};
