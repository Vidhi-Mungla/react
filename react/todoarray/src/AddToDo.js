import React, { useState } from 'react'

function AddToDo({onAddToDo}) {

    const [title,setTitle] = useState("");
  return (
    <div>
        {/* {title} */}

        <input
        style={
            {
                height:30,
                width:200,
                margin:5,
                background:"pink"
            }
        }
        type='text'
        value={title}
        onChange={(e)=>{setTitle(e.target.value)}}
        />
        <button className='btn' onClick={()=>{
            onAddToDo(title)
        }}>Add</button>
      
    </div>
  )
}

export default AddToDo
