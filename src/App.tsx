import { useState, useRef, MutableRefObject } from "react";
import "./App.css";
import { Result, Fn } from "./types";
import { day1 } from "./1";

const Day = (props: {
  input: MutableRefObject<string>;
  day: number;
  function: Fn;
}) => {
  const [result, setResult] = useState<Result>();
  return (
    <div>
      <h2>Day {props.day}</h2>
      {result && (
        <ul>
          {result.map((value) => (
            <li
              onClick={() => {
                alert("copied " + value.toString() + " to clipboard");
                navigator.clipboard.writeText(value.toString());
              }}
            >
              {value}
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => setResult(props.function(props.input.current))}>
        RUN!
      </button>
    </div>
  );
};

function App() {
  const inputRef = useRef<string>("");
  return (
    <div>
      <h1>
        <a href="https://adventofcode.com/2022">Advent of code 2022</a>
      </h1>
      Input: <textarea onChange={(e) => (inputRef.current = e.target.value)} />
      <Day input={inputRef} day={1} function={day1} />
    </div>
  );
}

export default App;
