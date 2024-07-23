import "./App.css";
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(5);

  const addValue = () => {
    counter = (counter >= 20 ) ? counter + 1 : counter
    setCounter(counter)
  };

  const removeValue = () => {
    counter = (counter !== 0) ? counter - 1 : counter
    setCounter(counter)
  };

  return (
    <>
      <h1>Chai With Meet</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add value : {counter}</button>
      <br />
      <br />

      <button onClick={removeValue}>Remove value : {counter}</button>
      <br />
      <br />

      <footer>Total Count : {counter}</footer>
    </>
  );
}

export default App;
