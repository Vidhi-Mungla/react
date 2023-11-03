import React, { useRef } from 'react';

function UseRefHook() {
  const test1 = useRef();
  const btnRef = useRef();

  const test123 = () => {
    console.log(test1);
    console.log(test1.current);
    console.log(btnRef);
    console.log(btnRef.current);
  }

  return (
    <div>
      <button ref={btnRef} onClick={test123}>Add</button>
      <input ref={test1} />
    </div>
  )
}

export default UseRefHook;
