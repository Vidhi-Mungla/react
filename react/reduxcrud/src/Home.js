import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link} from 'react-router-dom'
import { DeleteUser } from './UserReducer'


function Home() {

   const usersdata = useSelector(state => state.users)
    console.log(usersdata)

    const dispatch = useDispatch();

    const LoadDelete = (deleteid)=>{
 
     dispatch(DeleteUser({id:deleteid}))
     
    }

  return (
    <div>
      
        <div className='container'>

             <h2 className='my-3'>Users Data</h2>
            <Link  to='/create' className='btn btn-info my-2 '>Add New (+)</Link>

            <table className='table'>
                 <thead className=' table-dark'>
                       <tr>
                            <td>ID</td>
                            <td>NAME</td>
                            <td>EMAIL</td>
                            <td>ACTIONS</td>
                       </tr>
                 </thead>
                 <tbody>
                    { usersdata.map((items)=>(
                           <tr>
                           <td>{items.id}</td>
                           <td>{items.name}</td>
                           <td>{items.email}</td>
                           <td>
                               <Link to={`/edit/${items.id}`} className='btn btn-success me-3'>Edit</Link>
                               <button onClick={()=>{LoadDelete(items.id)}} className='btn btn-danger'>Delete</button>
                           </td>
                      </tr>
                    )) }
                        
                 </tbody>
            </table>
        </div>

    </div>
  )
}

export default Home
