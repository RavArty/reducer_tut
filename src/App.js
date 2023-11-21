import "./App.css";
import React, { useReducer } from "react";
import { counterReducer } from "./state/counterReducer";

function App() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div className='App'>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}

export default App;
