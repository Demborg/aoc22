import { useState } from "react";
import "./App.css";
import  {Day1} from "./1"

function App() {
  const [input, setInput] = useState<string>("");
  return (
    <div>
      <h1>
        <a href="https://adventofcode.com/2022">Advent of code 2022</a>
      </h1>
      Input: <textarea onChange={e => setInput(e.target.value)}/>
      <Day1 input={input}/>
    </div>
  );
}

export default App;
