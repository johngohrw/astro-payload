import { useState } from "react";

export const ReactCounter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((p) => p + 1);
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={handleIncrement}>increment</button>
    </div>
  );
};
