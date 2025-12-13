import React, { useState } from "react";
import SlowComponent from "./SlowComponent.jsx";
import Counter from "./Counter.jsx";

export default function Test() {
  const [count, setCount] = useState(0);

  return (
    // <div>
    //   <h1>Slow counter?!?</h1>
    //   <button onClick={() => setCount((c) => c + 1)}>Increase: {count}</button>
    //   <SlowComponent />
    // </div>
    <Counter>
      <SlowComponent />
    </Counter>
  );
}
