import React, { useState } from 'react'

function TaskList({x,onChangeTodo,onDeleteTodo}) {

    x.map((val)=>{
        <li>
            {val.title}
        </li>
    })

   <Task 
//    todo={todos}
//    onChange={onChangeTodo}
//    onDelete={onDeleteTodo}
   />


   
  

   

  return (
    <div>

      
      
    </div>
  )
}


function Task({todo,onChange,onDelete})
{
    const [edit,setEdit] = useState(false);
    let content;

    if(!edit)
    {
        content = <>

            <input
            value={todo.title}
            onChange={()=>{
                onChange()
            }}
            />
            <button>Save</button>

        </>
    }
    else 
    {
        content = <>

            {todo.title}
            <button>Edit</button>

        </>
    }
    
    return(
        <>

            <button onClick={onDelete}>Delete</button>
        
        </>
    )
}





export default TaskList