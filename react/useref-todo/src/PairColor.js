import React,{ useRef }from "react";

const data = [
  {
    titlex: "Title 1",
    subtitle: "Subtitle 1",
  },

  {
    titlex: "Title 2",
    subtitle: "Subtitle 2",
  },

  {
    titlex: "Title 3",
    subtitle: "Subtitle 3",
  },
  
];

const style = {
  color: "black",
};

function Ref() { 
  const divRefs = useRef(data.map(() => React.createRef()));

  const getH1 = () => {
    divRefs.current.forEach((ref, index) => {
      ref.current.style.color = getColor(index);
    });
  };

  const getColor = (index) => {
    const colors = ["blue", "green", "red"]; 
    return colors[index];
  };

  return (
    <main>
      <h1 onClick={getH1}>Riddhi</h1>
      {data.map((v, index) => (
        <div key={v.titlex} ref={divRefs.current[index]} style={{ color: style.color }}>
          <h2>{v.titlex}</h2>
          <p>{v.subtitle}</p>
        </div>
      ))}
    </main>
  );
}

export default Ref;