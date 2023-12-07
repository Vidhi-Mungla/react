import React from 'react'

function EmpList() {
  return (
    <div>
        <h1>Employee list</h1>
       <table className='table'>
        <thead className='table-dark'>
             <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
        </thead>
        <tbody>
            <td>id</td>
            <td>name</td>
            <td>email</td>
            <td>phone</td>
            <td>
                <button>Edit</button>
                <button>Delete</button>
                <button>View</button>
            </td>
        </tbody>
       </table>
          
          
          
          
    </div>
  )
}

export default EmpList
