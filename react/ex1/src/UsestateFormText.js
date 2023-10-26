import React, { useState } from 'react'

function UsestateFormText() {

    const [txt,setTxt] = useState("");

    const updateInp =(e)=>{

        // setTxt("hi");
        console.log(e.target)
        console.log(e.target.value)
        setTxt(e.target.value)
       

    }

  return (
    <div>
        <input
        type="text"
        value={txt}
        onChange={updateInp}

        />

        <h1>Name : {txt}</h1>
      
    </div>
  )
}

export default UsestateFormText