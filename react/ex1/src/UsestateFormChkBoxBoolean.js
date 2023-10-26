import React, { useState } from 'react'

function UsestateFormChkBoxBoolean() {

    const [bool,setBool] = useState(false);

    const updateBool =(e)=>{
        // setBool(true)
        setBool(e.target.checked)


    }


  return (
    <div>

        <input
        type='checkbox'
        checked={bool}
        onChange={updateBool}
        />
        You checked this
        <h1>
            {(bool)? "T" : "F"}
        </h1>
      
    </div>
  )
}

export default UsestateFormChkBoxBoolean