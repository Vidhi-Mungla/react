import React, { useState } from 'react'

const intialize = [
    {id:1 , title:"html"},
    {id:2 , title:"php"},
    {id:3 , title:"css"}
]

function New () 
{
    const[todos,settodos]=useState(intialize);
    const[add,addtodo]=useState(" ");

  const Addtodo = ()=>
  {
    if(add==" ")
    {
        alert("please add value..")
    }
    else
    {
        settodos([...todos, {id:todos.length+1,title:add}]);
        addtodo(" ");
    }
  }

  const deleteTodo = (id)=>{
    const updateTodo = todos.filter(
      (todo)=>todo.id !== id
    );
    settodos(updateTodo)
  }
  
  return (
    <div>
      <h1>Todo List</h1>
      <input type="text"  value={add} onChange={(e)=>addtodo(e.target.value)}/>
      <button onClick={Addtodo}>Add</button>


      {
         todos.map(
          (t)=>(
            <ul>
              <li key={t.id}>
               {t.title}
               <button onClick={()=>deleteTodo(t.id)}>Delete</button>
              </li>
            </ul>
          )
         )
       }
    </div>
  )
}

export default New 
