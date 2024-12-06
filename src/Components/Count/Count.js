"use client";

import { context } from "@/Context/TestContext";
import { useContext, useState } from "react";

const Count = () => {
  console.log("count");
  const [count, setCount] = useState(0);
  const { state, setState } = useContext(context);
  return (
    <div>
      <h1>Count value is : {count}</h1>
      <button onClick={() => setCount(count + 1)} className="btn bg-red-600">
        Increase
      </button>
      <button
        onClick={() => setCount(count + 1)}
        className="btn bg- bg-orange-600"
      >
        Decrease
      </button>
      <button
        onClick={() => setState(!state)}
        className="btn bg- bg-orange-600"
      >
        change state
      </button>
    </div>
  );
};

export default Count;
