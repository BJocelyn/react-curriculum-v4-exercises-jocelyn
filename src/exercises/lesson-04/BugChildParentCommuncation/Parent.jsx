import { useState } from 'react';
import Child from './Child';

export default function Parent() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((count) => count + 1);
  }

  return (
    <div>
      <h2>Parent-Child Communication</h2>
      <p>Counter: {count}</p>

      <Child onIncrement={increment} />
    </div>
  );
}

/*
Explanation:
The counter state stays in the Parent component.
I passed the increment function to Child so the button can update the counter.
*/
