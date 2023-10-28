import React, { useState } from 'react'

function NestedObj() {

    const [data,setData] = useState({
        name:"Harsh",
        age:22,
        address: {
            city:"Ahmedbad",
            area:"CG",
            pin:380008
        }
    })
    const UpdateArea = ()=>{
        setData({
           ...data,
           address:{
            ...data.address,
            pin:380009
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
           <u onClick={UpdateArea}>pin:{data.address.pin}</u>
        </h3>
    </div>
  )
}

export default NestedObj