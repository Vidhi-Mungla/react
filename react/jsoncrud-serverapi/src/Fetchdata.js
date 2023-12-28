import React, { useEffect, useState } from 'react'
import AddUsers from './AddUsers';

function Fetchdata() {
   
    const [users,setusers] = useState([]);

    useEffect(()=>{
  
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((res)=>{return res.json()})
      .then((data)=>{
        setusers(data)
      })},[])
  
    const testdata = (name,email)=>{
  
      fetch('https://jsonplaceholder.typicode.com/users',{
        method:"post",
        headers:{"content-type":"application/json"},
        body:JSON.stringify({name:name , email:email})
      })
      .then((res)=>{return res.json()})
      .then((data)=>{
        setusers( users=>[...users,{
          id:users.length+1,
          name:name,
          email:email 
        }])
      })
    }
  
    const LoadDel =(id)=>{
      // console.log(id)
  
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
        method:"delete",
        headers:{"content-type":"application/json"},
      })
  
      .then((res)=>{
        if(res)
        {
          alert("are you sure??")
        }
      })
      .then((data)=>{
        setusers( users.filter((user)=>(
          user.id !== id
        )))
      })
    }



    const handleEdit = (nextTodo)=>
    {
      fetch(`https://jsonplaceholder.typicode.com/users/${nextTodo}`,{
        method:"PUT",
        headers:{"content-type":"application/json"},
      })
  
      .then((res)=>{
        if(res)
        {
          alert("Edited Successfully")
        }
      })
      .then((data)=>{
      
      setusers(
      users.map((t)=>{
  
        if(t.id == nextTodo.id)
        {
          return nextTodo;
        }
        else 
        {
          return t;
        }     
      }))  
    })
    }


  return (
    <div className='App'>
        <AddUsers onadd={testdata}/>

{/* <button className='btn btn-info mt-3 my-3'>Add New (+)</button> */}

<table className='table mt-5'>
  <thead className='table-dark'>
    <tr>
      <td>Id</td>
      <td>Name</td>
      <td>Email</td>
      <td>Actions</td>
    </tr>
  </thead>

  <tbody>
  {users && users.map((item)=>(
  <tr key={item.name}>
  <td>{item.id}</td>
  <td>{item.name}</td>
  <td>{item.email}</td>
  <td>
    <button className='btn btn-success me-3' onClick={()=>{handleEdit(item.id)}}>Edit</button>
    <button className='btn btn-danger' onClick={()=>{LoadDel(item.id)}}>delete</button>
  </td>
</tr>

))}
 
  </tbody>
</table>

    </div>
  )
}

export default Fetchdata
