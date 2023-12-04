import React from 'react'

function EmpList() 
{
  return (
    <div>
    <h1 className='m-3 text-center'>
    json server crud
    </h1>
    
    <button className='btn btn-lg d-block m-auto my-3 btn-primary'>
    Add Employee (+)
    </button>
    <table class="table">
    <thead>
    <tr>
      <th>ID</th>
      <th>nAME</th>
      <th>EMAIL</th>
      <th>PHONE</th>
      <th>ACTIONS</th>
    </tr>
    </thead>
    <tbody>
      
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>PHONE</th>
                <th>ACTIONS</th>
                 <td>
                    <div className='col-5 d-flex justify-content-between'>
                        <button className='btn btn-success'>
                            Edit
                        </button>
                        <button className='btn btn-danger'>
                            Delete
                        </button>
                        <button className='btn btn-warning'>
                            View
                        </button>
                    </div>
                 </td>
    
            </tr>
    </tbody>
    </table>
    
    
        </div>
   )
}

export default EmpList
