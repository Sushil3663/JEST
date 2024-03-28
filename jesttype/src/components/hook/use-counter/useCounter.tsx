import { useState } from "react";
import { useCounterProps } from "./useCounter.type";

export const useCounter = ({ initialState = 0 }: useCounterProps = {}) => {
  const [count, setCount] = useState(initialState);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return { increment, decrement, count };
};
