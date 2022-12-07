import { Result } from "./types";

interface Dir {
  parent?: Dir;
  children: { [key: string]: Dir };
  size: number;
}

const totalSize = (dir: Dir): number => {
  return (
    dir.size +
    Object.keys(dir.children)
      .map((key) => totalSize(dir.children[key]))
      .reduce((a, b) => a + b, 0)
  );
};

export const day7 = (input: string): Result => {
  const dirs: Dir[] = [{ children: {}, size: 0 }];
  let active = dirs[0];
  input.split("\n").forEach((row) => {
    const words = row.split(" ");
    const size = parseFloat(words[0]);
    if (size) {
      active.size += size;
    } else if (words[1] == "cd") {
      const dir = words[2];
      if (dir === "..") {
        active = active.parent!;
      } else {
        if (!active.children[dir]) {
          const newDir = { parent: active, children: {}, size: 0 };
          dirs.push(newDir);
          active.children[dir] = newDir;
        }
        active = active.children[dir];
      }
    } else {
      console.log("ignoring ", row);
    }
  });

  return [
    dirs
      .map(totalSize)
      .filter((size) => size < 100000)
      .reduce((a, b) => a + b),
    -1,
  ];
};
