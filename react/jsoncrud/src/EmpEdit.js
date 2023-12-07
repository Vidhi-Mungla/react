
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


function EmpEdit() {
    const [id,changeid] = useState("");
    const [name,changename] = useState("");
    const [email,changeemail] = useState("");
    const [phone,changephone] = useState("");
    const [active,changeactive] = useState(false);
    const navigate = useNavigate();
    const {empid} = useParams();
    
    useEffect(()=>{
        fetch("http://localhost:8000/employee/"+empid)
        .then((res)=>{return res.json()})
        .then((data)=>{
            changeid(data.id)
            changename(data.name)
            changeemail(data.email)
            changephone(data.phone)
        })
        .catch((err)=>{console.log(err.message)})
      },[])
    
        const Loadview = (id)=>{
          navigate('/employee/view/'+id)
        }
        const LoadEdit = (id)=>{
          navigate('/employee/edit/'+id)
        }

    const finaldata = {id,name,email,phone,active};
    const handlesubmit = (e)=>{
        e.preventDefault()

        fetch("http://localhost:8000/employee/"+empid,{
            method:"PUT",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(finaldata)
        })
        .then((res)=>{
            if(res)
            {
                alert("Edited  sucessfulyy....")
                navigate('/')
            }
        })

    }
  return (
    <div>
     <div>
        <h2 className='my-5'>
            Add-Employee
        </h2>
      <form className='col-6 m-auto border border-3 text-start p-4' onSubmit={handlesubmit}>
        
        <label className='form-lable'>Id:</label>
        <input className='form-control' disabled="disabled" value={id} onChange={(e)=>{changeid(e.target.value)}}></input>
        
        <label className='form-lable'>Name:</label>
        <input className='form-control' value={name} onChange={(e)=>{changename(e.target.value)}}></input>

        <label className='form-lable'>Email:</label>
        <input className='form-control' value={email} onChange={(e)=>{changeemail(e.target.value)}}></input>

        <label className='form-lable'>phone:</label>
        <input className='form-control' value={phone} onChange={(e)=>{changephone(e.target.value)}}></input>

        <input type='checkbox' className='form-check-input' value={active} onChange={(e)=>{changeactive(e.target.checked)}}></input>{" "}
        <label className='form-lable' >Is active</label>

        <div className='my-3'>
        <button type='submit' className='btn btn-success me-3' >Save</button>
        <Link to="/" className='btn btn-danger'>Go-back</Link>
        </div>
      </form>
    </div>
    </div>
  )
}

export default EmpEdit

