import React, { useRef } from 'react'

function UseRefCounter() {
    const ref = useRef(0);
 
    const UpdateCount = ()=>{
      console.log(ref);//ref = {current:0}
      // console.log(ref.current);//ref.current //0 
  
      ref.current = ref.current + 1;
      // return ref.current;
      alert(ref.current)
  
      // console.log(ref.current)

 
    }
    return (
      <div className='App'>
  
        <h1>{ref.current}</h1>
        <button onClick={UpdateCount}>Increment</button>
        
      </div>
    )
}

export default UseRefCounter