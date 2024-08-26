import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setcounter] = useState(0);

  const addValue = () => {
    if (counter < 10) {
      // setcounter(counter + 1);
      // setcounter(counter + 1);
      // setcounter(counter + 1);
      // setcounter(counter + 1);

      setcounter((prevCounter) => prevCounter + 1);
      setcounter((prevCounter) => prevCounter + 1);
      setcounter((prevCounter) => prevCounter + 1);
      setcounter((prevCounter) => prevCounter + 1);
    }
    // setcounter(counter + 1);
  };
  const removeCounter = () => {
    if (counter > 0) {
      setcounter(counter - 1);
    }
  };

  // let counter = 15
  return (
    <>
      <h1>Counter Project</h1>
      <h2>counter is {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeCounter}>Remove value </button>
    </>
  );
}

export default App;
