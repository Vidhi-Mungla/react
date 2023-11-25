import React, { useState } from 'react'
import AddToDo from './AddToDo';
import TaskList from './TaskList';
import "./App.css"
import ColorChange from './ColorChange';
import New from './new';
import Crud from './Crud';
import MyForm from './MyForm';
import Form from './Form';
import UseRefHook from './RefHook';

let nextId=4;

function App() 
{
    const intialtodos = [
    {id:1,title:"Apple"},
    {id:2,title:"Banana"},
    {id:3,title:"Mango"}
  ];

  const [todos,setTodos] = useState(intialtodos);

  const handleAddTodo = (title)=>
  {
    setTodos([
      ...todos,
      {
        id:nextId++,
        title:title 
      }
    ])
  }

  const handleChangeTodo = (nextTodo)=>
  {
   setTodos(
    todos.map((t)=>{

      if(t.id == nextTodo.id)
      {
        return nextTodo;
      }
      else 
      {
        return t;
      }
      
    })
   )  
  }


  const handleDeleteTodo = (todoId)=>
  {
    setTodos(
      todos.filter((t)=>{
        return(t.id !== todoId)
      })
    )
  }


  return (
    <div>
      <AddToDo onAddToDo={handleAddTodo}/>
      <TaskList
       todos={todos}
       onChangeTodo={handleChangeTodo}
       onDeleteTodo={handleDeleteTodo}
      />
      <ColorChange/>
      <New/>
      <Crud/>
      <MyForm/>
      <Form/>
      <UseRefHook/> 
    </div>
  )
}

export default App

