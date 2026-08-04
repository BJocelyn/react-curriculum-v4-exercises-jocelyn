// TOPIC: Choose the correct tool: useRef vs useState
// TASK: Make sure it updates the text *without* triggering a re-render

import { useState } from 'react';

export default function FindCorrectHook() {
  const [clickCount, setClickCount] = useState(0); // ← correct implementation

  function handleClick() {
    setClickCount(clickCount + 1);
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button onClick={handleClick}>{clickCount} Clicks</button>
    </div>
  );
}

/*
Explanation:
I used useState because the button text need to update on the screen.
Using useRef would not trigger a re-render, it changes the value but does not update the UI,
so the button text would not change.
*/
