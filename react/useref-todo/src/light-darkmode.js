import React, { useState } from 'react';

const Toggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const backgroundColor = isDarkMode ? '#333' : '#fff';
  const textColor = isDarkMode ? '#fff' : '#333';

  return (
    <div style={{ backgroundColor, color: textColor}}>
      <button onClick={toggleMode}>Toggle Mode</button>
    </div>
  );
};

export default Toggle;
