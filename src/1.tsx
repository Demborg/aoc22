export const Day1 = (props: { input: string }) => {
  const caloriesPerElf = props.input.split("\n\n").map((elf) =>
    elf
      .split("\n")
      .map(parseFloat)
      .reduce((a, b) => a + b)
  );
  return (
    <div>
      <h2>Day 1</h2>
      <h3>Part 1</h3>
      {Math.max(...caloriesPerElf)}
      <h3>Part 2</h3>
      {caloriesPerElf
        .sort((a, b) => a - b)
        .slice(-3)
        .reduce((a, b) => a + b)}
    </div>
  );
};
