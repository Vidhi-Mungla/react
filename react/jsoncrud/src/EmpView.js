import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

function EmpView() {

    const [empdata,setEmpData] = useState("");

    const {empId}= useParams();
    // console.log(empId)

    useEffect(()=>{
        fetch("http://localhost:8000/employee/"+empId)
        .then((res)=>{return res.json()})
        .then((data)=>{
            // console.log(data)
            // console.log(data.id)
            setEmpData(data)
        
        })
        .catch((e)=>{console.log(e.message)})
    })
  return (
    <div>
        <h4>Id : {empdata.id}</h4>
        <h4>Name : {empdata.name}</h4>
        <h4>Email : {empdata.email}</h4>
        <h4>Phone : {empdata.phone}</h4>
        <h4>Active User : {(empdata.active) ? "YES": "NO"}</h4>
    </div>
  )
}

export default EmpView