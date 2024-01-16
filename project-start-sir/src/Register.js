import React, { useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';


function Register() {   

    const [fname,setFname] = useState("");
    const [email,setEmail] = useState("");

    const {user_em} = useParams();
  
    const navigate = useNavigate();
    function handleSubmit(e) 
    {
        e.preventDefault();   
        navigate("/login/"+email)

     
    }
  return (

   
    <div>

{email}
        <div className="container">
		<h2>Registration Form</h2>
	<form onSubmit={handleSubmit}>

      

		<div className="form-group">
    <label >First Name</label>
    <input type="text" value={fname} onChange={(e)=>{setFname(e.target.value)}} className="form-control" id="exampleInputfirstname" name="firstname"/>

    {

        // fname ? "" : <span className='text-danger'>* Enter firstname</span>

        // t && t 
        // f && t 
        // t && f 
        // f && f

        fname.length==0 &&  <span className='text-danger'> * Enter Name</span>

    }
   
  </div>

  <div className="form-group">
    <label>Last Name</label>
    <input type="text" className="form-control" id="exampleInputlastname" name="lastname"/>
  </div>

  <div className="form-group">
    <label>Phone Number</label>
    <input type="text" className="form-control" id="exampleInputphoneno" name="phoneno"/>
  </div>

  <div className="form-group">
    <label >Email address</label>
    <input type="email"  value={email} onChange={(e)=>{setEmail(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email"/>
  </div>


  <div className="form-group">
    <label >Password</label>
    <input type="password" className="form-control" id="exampleInputPassword" name="password"/>
  </div>
  <button type="submit" className="btn btn-primary" name="create">Sign up</button>
</form>
</div>
    </div>
  )
}

export default Register
