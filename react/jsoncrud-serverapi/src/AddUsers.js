import React, { useState } from 'react'

function AddUsers({onadd}) 
{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");

    const handleClick = (e)=>{

        e.preventDefault();
        
        onadd(name,email)
    }

  return (
    <div>

        <form onSubmit={handleClick}>
            <div>
                <label>Id</label>
                <input disabled="disabled"></input>
            </div>

            <div>
                <label>Name</label>
                <input value={name} onChange={(e)=>{setName(e.target.value)}}></input>
            </div>

            <div>
                <label>Email</label>
                <input value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
            </div>

            <div>
               <button>Add</button>
            </div>
        </form>
      
    </div>
  )
}

export default AddUsers

