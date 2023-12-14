import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function View() {
    const {empid} = useParams();
    const [details,setdetails]=useState("");
   
    useEffect(()=>{
       fetch(" http://localhost:8000/Employees/"+empid).then((res)=>res.json()).then((data)=>setdetails(data))
    },[empid])
  return (
    <div>
        <h1>
            View profile
       </h1>

        <h1>
            id:  {details.id}
        </h1>

        <h1>
            Name: {details.name}
        </h1>

        <h1>
            Email: {details.email}
        </h1>

        <h1>
            Phone:{details.phone}
        </h1>

      <Link to="/"><button className='btn btn-lg d-block m-auto btn-primary'>go back</button></Link>

    </div>
  )
}

export default View
