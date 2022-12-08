import { Result } from "./types";
export const day8 = (input: string): Result => {
  const trees = input.split("\n").map((row) =>
    [...row].map((t) => {
      return { height: parseFloat(t), visibility: false };
    })
  );

  [
    { s: 0, d: 1, f: false },
    { s: 0, d: 1, f: true },
    { s: trees.length - 1, d: -1, f: false },
    { s: trees.length - 1, d: -1, f: true },
  ].forEach((pass) => {
    for (let j = 0; j < trees.length; j++) {
      let tallest = -1;
      for (let i = pass.s; 0 <= i && i < trees.length; i += pass.d) {
        const tree = pass.f ? trees[i][j] : trees[j][i];
        if (tree.height > tallest) {
          tree.visibility = true;
          tallest = tree.height;
        }
      }
    }
  });

  console.log(trees);
  return [
    trees.reduce(
      (sum, row) =>
        sum + row.reduce((s, tree) => s + (tree.visibility ? 1 : 0), 0),
      0
    ),
    Math.max(
      ...trees.flatMap((row, i) =>
        row.map((tree, j) => {
          [
            { d: 1, f: false },
            { d: 1, f: true },
            { d: -1, f: false },
            { d: -1, f: true },
          ];
          return 1;
        })
      )
    ),
  ];
};
