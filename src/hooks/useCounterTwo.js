import { useState } from "react";

const useCounterTwo = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const reset = () => {
    setCount(0);
  };
  const setValue = () => {
    setCount((prevCount) => prevCount + 5);
  };
  return [count, increment, decrement, reset, setValue];
};

export default useCounterTwo;
