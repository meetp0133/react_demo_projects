import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  // let myObj = {
  //   username : "Meet",
  //   age : 20
  // }

  // let newArr = [1,22,3,44]

  return (
    <>
      <h1 className="bg-green-400 text-black rounded-xl">TailWind Test | Mk</h1>
      <Card username="chaiaurcode" btnText="click me" />
      <Card username="Meet" btnText="follow me" />
    </>
  );
}

export default App;
