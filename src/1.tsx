export const Day1 = (props: { input: string }) => {
  return (
    <div>
      <h2>Day 1</h2>
      <h3>Part 1</h3>
      {Math.max(
        ...props.input.split("\n\n").map((elf) =>
          elf
            .split("\n")
            .map(parseFloat)
            .reduce((a, b) => a + b)
        )
      )}
    </div>
  );
};
