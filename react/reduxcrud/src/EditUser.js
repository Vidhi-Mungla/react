import React, { useState } from 'react'
import { editUsers } from './UserReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'


function EditUser() {

    const {userid} = useParams();
    console.log(userid)

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const usersData= useSelector(state => state.users);

    const existingUser = usersData.filter(user=>       
        user.id == userid 
    )


    const {name,email} = existingUser[0];
    console.log(name);//name: priyanshi123
    const [uname,setuName] = useState(name)
    const [uemail,setuEmail] = useState(email)

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(editUsers({id:userid,name:uname,email:uemail}));
        navigate("/")
    }


  return (
    
    <div className='row text-start justify-content-center'>
        <div className='col-6'>

    <form className='container' onSubmit={handleSubmit}>

        <h2 className='mt-3'>Edit User</h2>

        <div className='col-12'>
            <label className='form-label'>Id</label>
            <input disabled="disabled" className='form-control'></input>
        </div>


        <div className='col-12'>
            <label className='form-label'>Name</label>
            <input value={uname} onChange={(e)=>{setuName(e.target.value)}} required  className='form-control'></input>

            {name.length==0 && <span className='text-danger'> *Enter name </span>}          
        </div>


        <div className='col-12'>
            <label className='form-label'>Email</label>
            <input value={uemail} onChange={(e)=>{setuEmail(e.target.value)}}  className='form-control'></input>
        </div>


        <div className='col-12'>
           <button className='btn btn-success mt-3'>Save</button>
        </div>

    </form>
        </div>
     
    </div>
  )
}

export default EditUser 
