import React from 'react'

function EmpList() {
  return (
    <div>
      <h1 className='my-4'>Employee List</h1>
      <table className='table'>
        <thead className='table'>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
            <th>ACTION</th>
        </thead>
        <tbody>
            <td>id</td>
            <td>name</td>
            <td>email</td>
            <td>phone</td>
            <td>
                <button className=''>Edit</button>
                <button>Delete</button>
                <button>View</button>
            </td>
        </tbody>
      </table>
    </div>
  )
}

export default EmpList
