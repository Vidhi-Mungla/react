import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Emplisting() {

  const [empdata,setEmpdata] = useState("")
  const navigate = useNavigate();

  useEffect(()=>{
    fetch("http://localhost:8000/employee")
    .then((res)=>{return res.json()})
    .then((data)=>{
      setEmpdata(data)
    })
    .catch((err)=>{console.log(err.message)})
  })

    const Loadview = (id)=>{
      navigate('/employee/view/'+id)
    }
    const LoadEdit = (id)=>{
      navigate('/employee/edit/'+id)
    }
    const LoadDelete = (id)=>{
     if(window.confirm("Are you sure..!")){
      fetch("http://localhost:8000/employee/"+id,{
        method:"DELETE",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(empdata)
    })
    .then((res)=>{
        if(res)
        {
            alert("DELETED sucessfulyy....")
            navigate('/')
        }
    })
        window.location.reload()
     }
    }



  return (
    <div>
        <h1 className='my-5'>Emplooyee list</h1>
        <button className='my-3 btn btn-info ' onClick={()=>{navigate('/employee/create')}}>Add Employee(+)</button>
        <div>
        <table className='table '>
        <thead className='table table-dark'>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>PHONE</th>
                <th>ACTION</th>
            </tr>
        </thead>
        <tbody>
       
        {
            empdata && empdata.map((item)=>(
                <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>
                    <button className='btn btn-success me-3'  onClick={()=>{LoadEdit(item.id)}}>Edit</button>
                    <button className='btn btn-danger me-3' onClick={()=>{LoadDelete(item.id)}}>Delete</button>
                    <button className='btn btn-warning me-3' onClick={()=>{Loadview(item.id)}}>View</button>
                </td>
            </tr>
            )   )
           }
        </tbody>
        </table>
        </div>
    </div>
  )
}

export default Emplisting