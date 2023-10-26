import React, { useState } from 'react'

function UsestateObj1() {

    const [data,setdata] = useState({
        name:"Nakum",
        age:22
    })

    // const updateName = ()=>{
    //     setdata({
    //         name:"Bharat"
    //     })
    // }

    const changeAge = ()=>{
        setdata({
            ...data,
            age:data.age+1
        })
    }

  return (
    <div>

        <input
        type='text'
        value={data.name}
        onChange={(e)=>{
            setdata({
                // name:"dhaval"
                ...data,
                name:e.target.value,
                
                
            })
        }}
        />
        <h1>Name : {data.name}</h1>
        <h1 onClick={changeAge}>Age : {data.age}</h1>



        {/* <h1 onClick={updateName}>
        Name: {data.name}
        </h1> */}
      
    </div>
  )
}

export default UsestateObj1