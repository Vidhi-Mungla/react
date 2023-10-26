import React, { useState } from 'react'

function UsestateObj() {

    const [fname,setFname] = useState({
        name:"Abhay",
        age:12
    })

    // const updateName = ()=>{
    //     setFname({
    //         name:"Bharat"
    //     })
    // }

  return (
    <div>

        <input
        type='text'
        value={fname.name}
        onChange={(e)=>{
            setFname({
                // name:"dhaval"
                name:e.target.value
                
            })
        }}
        />
        <h1>Name : {fname.name}</h1>
        <h1>Age : {fname.age}</h1>


        {/* <h1 onClick={updateName}>
        Name: {fname.name}
        </h1> */}
      
    </div>
  )
}

export default UsestateObj