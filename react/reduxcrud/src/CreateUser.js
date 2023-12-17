import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { addUser} from './UserReducer';
import { useDispatch, useSelector } from 'react-redux';

function CreateUser() {

    const usersdata = useSelector(state => state.users)
    console.log(usersdata)

     const [id,setid] = useState("");
    const [name,setname] = useState("");
    const [email,setemail] = useState("");
    const navigate = useNavigate();

    const dispatch = useDispatch();

     const handleSubmit = (e)=>
     {
         e.preventDefault();
        //  dispatch(addUser({id:usersdata[usersdata.length - 1].id + 1 ,name,email}));

        if (usersdata.length > 0) {
          dispatch(addUser({ id: usersdata[usersdata.length - 1].id + 1, name, email}));
        } else {
          dispatch(addUser({ id:1, name, email}));
      }
         navigate("/");
     }



  return (

    <div className='row justify-content-center text-start'>
           <div  className='col-6'>

                <h1 className='text-center mt-3'>Add Data</h1>

               <form className='container' onSubmit={handleSubmit}>
                         <div className='col-12'>
                           <lable className='form-label'>Id</lable>
                           <input className='form-control' disabled='disabled'value={id} onChange={(e)=>{setid(e.target.value)}}></input>
                          </div>

                          <div className='col-12'>
                           <lable className='form-label'>Name</lable>
                           <input required value={name} onChange={(e)=>{setname(e.target.value)}} className='form-control'></input>
                            {name.length == 0 && <span className='text-danger'>* Enter name</span>}
                          </div>

                          <div className='col-12'>
                           <lable className='form-label'>Email</lable>
                           <input required value={email} onChange={(e)=>{setemail(e.target.value)}} className='form-control'></input>
                           {email.length == 0 && <span className='text-danger'>* Enter email</span>}
                          </div>

                          <div className='col-12'>
                           <button className='btn btn-success mt-5'>Save</button>
                          </div>
               </form>
           </div>
    </div>
  )
}

export default CreateUser;
