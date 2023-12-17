import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { editUser} from './UserReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function EditUser() {

   
    const navigate = useNavigate();

    const {userid} = useParams();
    // console.log(userid);
    
    const dispatch = useDispatch();

    const usersdata = useSelector(state => state.users)
    // console.log(usersdata)

    const existingUser = usersdata.filter(user => 
      user.id == userid);
      // console.log(existingUser);

      const {id,name,email} = existingUser[0];

      const [uid,setuid] = useState(id);
      const [uname,setuname] = useState(name);
      const [uemail,setuemail] = useState(email);

 
     const handleSubmit = (e)=>
     {
         e.preventDefault();
         dispatch(editUser({id:userid,name:uname,email:uemail}));
         navigate("/");
     }

  return (

    <div className='row justify-content-center text-start'>
           <div  className='col-6'>

                <h1 className='text-center mt-3'>Edit Data</h1>

               <form className='container' onSubmit={handleSubmit}>
                         <div className='col-12'>
                           <lable className='form-label'>Id</lable>
                           <input className='form-control'value={uid} onChange={(e)=>{setuid(e.target.value)}}></input>
                          </div>

                          <div className='col-12'>
                           <lable className='form-label'>Name</lable>
                           <input required value={uname} onChange={(e)=>{setuname(e.target.value)}} className='form-control'></input>
                            {name.length == 0 && <span className='text-danger'>* Enter name</span>}
                          </div>

                          <div className='col-12'>
                           <lable className='form-label'>Email</lable>
                           <input required value={uemail} onChange={(e)=>{setuemail(e.target.value)}} className='form-control'></input>
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

export default EditUser;
