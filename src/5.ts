import { Result } from "./types";
export const day5 = (input: string): Result => {
  const [drawing, instructions] = input
    .split("\n\n")
    .map((part) => part.split("\n"));
  const cols = (drawing[0].length + 1) / 4;

  const indices = [...Array(cols).keys()].map((i) => 1 + 4 * i);
  const data = indices.map((i) =>
    drawing
      .map((row) => row[i])
      .filter((c) => c !== " ")
      .slice(0, -1)
  );

  instructions
    .map((row) =>
      row
        .split(" ")
        .map(parseFloat)
        .filter((v) => v)
    )
    .flatMap((row) =>
      [...Array(row[0]).keys()].map((_) => [row[1] - 1, row[2] - 1])
    )
    .forEach((row) => data[row[1]].unshift(data[row[0]].shift()!));

  return [data.map((col) => col[0]).join(""), -1];
};
