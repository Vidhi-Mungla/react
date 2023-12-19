import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';


function EmpView() {
  const [empdata,setEmpdata] = useState("");
  const {empid} = useParams();
  console.log(empid);

  useEffect(()=>{
    fetch("http://localhost:8000/employee/"+empid)
    .then((res)=>{return res.json()})
    .then((data)=>{
      console.log(data)
      setEmpdata(data)
    })
    .catch((err)=>{console.log(err.message)})
  })

  
  return (
    <div>
        <h3>id:{empdata.id}</h3>
        <h3>Name:{empdata.name}</h3>
        <h3>Email:{empdata.email}</h3>
        <h3>Phone:{empdata.phone}</h3>
        <h3>Active:{(empdata.active) ? "Yes" : "No"}</h3>

        <Link to='/' className='btn btn-info'>Go Back</Link>
    </div>
  )
}

export default EmpView




