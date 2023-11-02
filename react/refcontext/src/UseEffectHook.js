import React, { useEffect, useState } from 'react';

function UseEffectHook111() {
  const x = [
    { id: 1, title: "hinal" },
    { id: 2, title: "harvi" },
    { id: 3, title: "heena" }
  ];

  const [t, setT] = useState([]);

  useEffect(() => {
    setT([...x]);
  }, [x]);

  return (
    <div>
      <div>
        {t.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </div>
    </div>
  );
}

export default UseEffectHook111;