import { Result } from "./types";
export const day5 = (input: string): Result => {
  const [drawing, instructions] = input
    .split("\n\n")
    .map((part) => part.split("\n"));
  const cols = (drawing[0].length + 1) / 4;

  const indices = [...Array(cols).keys()].map((i) => 1 + 4 * i);
  const data1 = indices.map((i) =>
    drawing
      .map((row) => row[i])
      .filter((c) => c !== " ")
      .slice(0, -1)
  );
  const data2 = JSON.parse(JSON.stringify(data1));

  const parsedInstructions = instructions.map((row) =>
    row
      .split(" ")
      .map(parseFloat)
      .filter((v) => v)
  );
  parsedInstructions
    .flatMap((row) =>
      [...Array(row[0]).keys()].map((_) => [row[1] - 1, row[2] - 1])
    )
    .forEach((row) => data1[row[1]].unshift(data1[row[0]].shift()!));

  parsedInstructions.forEach((row) => {
    const tmp: string[] = [];
    for (let i = 0; i < row[0]; i++) {
      tmp.push(data2[row[1] - 1].shift());
    }
    tmp.reverse().forEach((element) => data2[row[2] - 1].unshift(element));
  });

  return [
    data1.map((col) => col[0]).join(""),
    data2.map((col) => col[0]).join(""),
  ];
};
