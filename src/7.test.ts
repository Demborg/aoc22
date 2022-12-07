import { expect, test } from "vitest";
import { day7 } from "./7";

const input = `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`;

test("Day 7 part 1 example", () => {
  expect(day7(input)[0]).toBe(95437);
});

test("Day 7 part 2 example", () => {
  expect(day7(input)[1]).toBe(24933642);
});
