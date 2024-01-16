import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();
    const [email,setEmail] = useState("") ;
    const {user_em} = useParams();

   
   

    function handleSubmit(e) 
    {
        e.preventDefault();
        console.log(user_em)
        console.log(email)
      if(user_em == email)
      {
        navigate("/")
      }
    }
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>

  <div className="form-group">
    <label>Email address</label>
    <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>

  <div className="form-group">
    <label >Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" >Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Login
