import React, { useState } from 'react';

function ColorChange() {
  const [btnColor, setBtnColor] = useState('pink'); 

  const ButtonClick = () => {
    const newColor = btnColor === 'pink' ? 'yellow' : 'pink';
    setBtnColor(newColor);
  };

  return (
    <div>
      <button
        style={{ backgroundColor: btnColor,
        height:50,
        width:200, 
        fontSize:20,
         border:1}}
        onClick={ButtonClick}>Change Color</button>
    </div>
  );
}

export default ColorChange;