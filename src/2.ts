import { Result } from "./types";

const shapeScore = (shape: string) => {
  if (shape === "A" || shape === "X") {
    return 1;
  }
  if (shape === "B" || shape === "Y") {
    return 2;
  }
  return 3;
};

const outcome = (other: number, me: number) => {
  if (me === other) {
    return 3;
  }
  if (other % 3 === me - 1) {
    return 6;
  }
  return 0;
};

export const day2 = (input: string): Result => {
  const games = input
    .split("\n")
    .map((round) => round.split(" ").map(shapeScore));
  return [
    games
      .map((round) => outcome(round[0], round[1]) + round[1])
      .reduce((a, b) => a + b),
    -1,
  ];
};
