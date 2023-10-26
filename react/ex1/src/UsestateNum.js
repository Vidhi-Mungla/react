import React, { useState } from 'react'

function UsestateNum() {

    const [num,setNum] = useState(0);

    const updateNum = ()=>{

        // setNum(123)
        // setNum(num+1)
        // setNum(()=>(
        //     num+1
        // ))
        // setNum((e)=>(
        //     e+1
        // ))

        setNum(e=> e+1)
        
    }

  return (
    <div>
        <h1 onClick={updateNum}>Number:  {num}</h1>
    </div>
  )
}

export default UsestateNum