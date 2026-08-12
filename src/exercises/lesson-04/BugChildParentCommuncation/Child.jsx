export default function Child({ onIncrement }) {
  return <button onClick={onIncrement}>Increment Counter</button>;
}

/*
Explanation:
The counter state stays in the Parent component.
I passed the increment function to Child as a prop.
When the button is clicked, Child calls that function and the Parent updates the counter.
*/
