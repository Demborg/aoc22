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

const Day = (props: {
  input: MutableRefObject<string>;
  day: number;
  function: Fn;
}) => {
  const [result, setResult] = useState<Result>();
  const [time, setTime] = useState<number>();
  return (
    <div className="Day">
      <div className="TitleDay">
        <h2>Day {props.day}</h2>
        <button
          onClick={() => {
            const start = performance.now();
            setResult(props.function(props.input.current));
            setTime(performance.now() - start);
          }}
        >
          RUN!
        </button>{" "}
      </div>
      {time !== undefined && <div>⏱: {time} ms </div>}
      {result && (
        <ul>
          {result.map((value) => (
            <li>{value}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

function App() {
  const inputRef = useRef<string>("");
  return (
    <div className="App">
      <h1>
        <a href="https://adventofcode.com/2022">Advent of code 2022</a>
      </h1>
      <div>
        Input:{" "}
        <textarea onChange={(e) => (inputRef.current = e.target.value)} />
      </div>
      <Day input={inputRef} day={7} function={day7} />
      <Day input={inputRef} day={6} function={day6} />
      <Day input={inputRef} day={5} function={day5} />
      <Day input={inputRef} day={4} function={day4} />
      <Day input={inputRef} day={3} function={day3} />
      <Day input={inputRef} day={2} function={day2} />
      <Day input={inputRef} day={1} function={day1} />
    </div>
  );
}

export default App;
