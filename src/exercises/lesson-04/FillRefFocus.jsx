// TOPIC: Correct useRef usage to control DOM elements
// TASK: Implement focusing an input field when the button is clicked.

import { useRef } from 'react';

export default function FillRefFocus() {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <div>
      <h2>useRef: Focusing an Input</h2>

      <input ref={inputRef} type="text" placeholder="Type here..." />

      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

/*
Explanation:
I used useRef to create a reference to the input element. 
When the button is clicked, the focusInput function is called, 
which uses inputRef.current.focus() to set focus on the input field. 
This lets the user start typing without selecting the input first.
*/
