import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';
import Ref from './PairColor';
import Toggle from './light-darkmode';
import UseReducerHook from './UseReducerHook'
import UseRefCounter from './UseRefCounter'

const data = [
  {
    titlex:"Title 1",
    subtitle:"Subtitle 1"
  },

  {
    titlex:"Title 2",
    subtitle:"Subtitle 2"

  },

  {
    titlex:"Title 3",
    subtitle:"Subtitle 3"
  }
  
]

const style={
  color:"green"
}
function App() {

  const divRef = useRef();

  const getH1 = ()=>{
    
    console.log(divRef)
    console.log(divRef.current)

    divRef.current.style.color="pink" 
  }

  return (
    <div className="App">
      
      <h1 onClick={getH1}>hello</h1>
       <main ref={divRef} >

          {data.map((v)=>{

            return(
                <div key={v.titlex}>
                <h2>{v.titlex}</h2>
                <p style={style}> {v.subtitle}</p>
              </div>
            )
          })}
        </main>
        
       <Ref/>
       <Toggle/>
       <UseReducerHook/>
       <UseRefCounter/>
    </div>
  );
}

export default App;