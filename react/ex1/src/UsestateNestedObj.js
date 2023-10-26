import React, { useState } from 'react'

function UsestateNestedObj() {

    const [data,setData] = useState({
        name:"Harsh",
        age:21,
        address: {
            city:"Ahmedbad",
            area:"CG"
        }
    })
    const UpdateArea = ()=>{
        setData({
           ...data,
           address:{
            ...data.address,
            area:"SG"
           }

        })
    }

  return (
    <div>

        <h3 >
            Name: {data.name}
            <br/>
            Age : {data.age}
            <br/>

            City : {data.address.city}
            <br/>
           <u onClick={UpdateArea}> area : {data.address.area}</u>
        </h3>
      
    </div>
  )
}

export default UsestateNestedObj