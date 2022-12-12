import { useState, useRef, MutableRefObject } from "react";
import "./App.css";
import { Result, Fn } from "./types";
import { day1 } from "./1";
import { day2 } from "./2";
import { day3 } from "./3";
import { day4 } from "./4";
import { day5 } from "./5";
import { day6 } from "./6";
import { day7 } from "./7";
import { day8 } from "./8";

const functions = new Map<number, Fn>([
  [1, day1],
  [2, day2],
  [3, day3],
  [4, day4],
  [5, day5],
  [6, day6],
  [7, day7],
  [8, day8],
]);

const Day = (props: {
  input: MutableRefObject<string>;
  setResult: (result: Result) => void;
  setTime: (time: number) => void;
  day: number;
  function?: Fn;
}) => {
  return (
    <div className="Day">
      <button
        disabled={props.function === undefined}
        onClick={() => {
          if (props.function) {
            const start = performance.now();
            props.setResult(props.function(props.input.current));
            props.setTime(performance.now() - start);
          }
        }}
      >
        {props.day}
      </button>
    </div>
  );
};

function App() {
  const inputRef = useRef<string>("");
  const [result, setResult] = useState<Result>();
  const [time, setTime] = useState<number>();
  return (
    <div className="App">
      <h1>
        <a href="https://adventofcode.com/2022">Advent of code 2022</a>
      </h1>
      <div>
        <textarea defaultValue={"Input"} onChange={(e) => (inputRef.current = e.target.value)} />
      </div>

      <div className="Calendar Wide">
        {Array(25).fill(0).map((_, i) => (
          <Day
            input={inputRef}
            setResult={setResult}
            setTime={setTime}
            day={i + 1}
            function={functions.get(i + 1)}
          />
        ))}
      </div>
      <div className="Result Wide">
        {result && (
          <ul>
            {result
              .filter((value) => value !== -1)
              .map((value) => (
                <li>{value}</li>
              ))}
          </ul>
        )}
        {time !== undefined && <div>⏱: {time} ms </div>}
      </div>
    </div>
  );
}

export default App;
