import React, { useState } from 'react'

function UsestateStr() {

  const [str,setStr] = useState("Hi");

  const updateStr = ()=>{
    // setStr("Hello");

    // setStr(str + " Dharmesh");

    // setStr(()=>(
    //   str + " Nakum"
    // ))

    // setStr((x)=>(
    //   x + " Abhay"
    // ))
    
    setStr(a=>a+ " Dhaval")

  }


  return (
    <div>
      <h1 onClick={updateStr}>Greeting : {str}</h1>
      

      {/* <h1 onClick={
        ()=>{
          setStr("Hello")
        }
  }>Greeting : {str}</h1> */}
    </div>
  )
}

export default UsestateStr