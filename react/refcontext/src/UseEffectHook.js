import React, { useEffect, useState } from 'react';

function UseEffectHook111() {
  const x = [
    { id: 1, title: "hinal" },
    { id: 2, title: "harvi" },
    { id: 3, title: "heena" }
    ];

  const [t, setT] = useState([]);

  useEffect(() => 
  {
    setT([...x]);
  }, [x]);

  return (
    <div>
      <div>
        {t.map((item) => (
          <h1 key={item.id}>{item.title}</h1>
        ))}
      </div>
    </div>
  );
}

export default UseEffectHook111;