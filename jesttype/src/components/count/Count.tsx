import React, { ChangeEvent, useState } from "react";

const Count: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const [amount, setAmount] = useState<number>(0);

  return (
    <div>
      <h1>{count}</h1>
      <br />
      <button onClick={() => setCount(count + 1)}>INCREMENT</button>
      <br />
      <input
        type="number"
        value={amount}
        name="count"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setAmount(Number(e.target.value))
        }
      />
      <br />
      <button onClick={() => setCount(amount)}>SET</button>
      <br />
      <select multiple>
        <option value="1">A</option>
        <option value="2">B</option>
        <option value="3">C</option>
      </select>
    </div>
  );
};

export default Count;
