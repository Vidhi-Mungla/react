import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Create() {
    const go = useNavigate();


      const [id,idChange]=useState("");
      const [name,nameChange]=useState("");
      const [email,emailChange]=useState("");
      const [phone,phoneChange]=useState("");
   
      const finalData = {id,name,email,phone};
    
      const handelSubmit = (e)=>{
        e.preventDefault();

        fetch(' http://localhost:8000/Employees',{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
          },body:JSON.stringify(finalData) 
        }).then((res)=>alert("data added successfully",go('/')))
      
      }

return(
    <div>
     <form className="col-6 m-auto border border-3 p-3" onSubmit={handelSubmit}>
          
        <h1 className='text-center'>
        Add employee
        </h1>
        <label htmlFor="" className='p-3'>id</label>
        <input className='form-control' type="text" disabled name="" id="" value={id} onChange={(e)=>idChange(e.target.value)} />
        <label htmlFor="" className='p-3'>Name</label>
        <input className='form-control' type="text" name="" id="" value={name} onChange={(e)=>nameChange(e.target.value)} />
        <label htmlFor="" className='p-3'>Email</label>
        <input className='form-control' type="text" name="" id="" value={email} onChange={(e)=>emailChange(e.target.value)}/>
        <label htmlFor="" className='p-3'>Phone</label>
        <input className='form-control' type="text" name="" id="" value={phone} onChange={(e)=>phoneChange(e.target.value)} />
      
        <button className='btn btn-primary btn-lg'>Save</button>
         <button className='btn btn-secondary btn-lg' onClick={()=>go('/')}>Go back</button>

        </form>
     </div>
    
  )
}

export default Create
