import React, { useState } from 'react';

function Form()
{
  const [inputValue, setInputValue] = useState('');

  const handleResetInput = () => 
  {
    setInputValue('');
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />&nbsp;
      <button onClick={handleResetInput}>Reset</button>
    </div>
  );
}

export default Form