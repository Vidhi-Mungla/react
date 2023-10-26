import React,{useState}from 'react';

function InputValueUpdate() 
{
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <h3>Enter:{inputValue}</h3>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default InputValueUpdate;
