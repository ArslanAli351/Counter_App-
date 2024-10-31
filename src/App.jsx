import { useState } from "react";
import "./App.css";
import img  from "./assets/img.gif";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <img src={img} alt="" />
      <div id="main">
       
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          minus
        </button>
       
      </div> <h2>{count}</h2>
    </>
  );
}

export default App;
