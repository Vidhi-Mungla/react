import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Employelist() {
     const [empdata,setempdata]= useState("");
    const go = useNavigate();

    const handelEdit = (id)=>{
      go('/Edit/'+id);
    }
    const handelView = (id)=>{
      go('/View/'+id);
    }

    const handelDelete = (id)=>{
      fetch(`http://localhost:8000/Employee/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then(() => {
          alert("deleted");
          go("/");
        })
        .catch((error) => console.error("Error:", error));
        go("/");
    }

    useEffect(()=>{
     fetch('http://localhost:8000/Employee').then((res)=>res.json()).then((data)=>setempdata(data));
    },[])


    
  return (
    <div>
<h1 className='m-3 text-center'>
json server crud
</h1>

<button onClick={()=>go('/Create')} className='btn btn-lg d-block m-auto my-3 btn-primary'>
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
  {
    empdata&& empdata.map((el)=>( 
        <tr>
             <td>{el.id}</td>
             <td>{el.name}</td>
             <td>{el.email}</td>
             <td>{el.phone}</td>
             <td>
                <div className='col-5 d-flex justify-content-between'>
                    <button className='btn btn-success' onClick={()=>handelEdit(el.id)}>
                        Edit
                    </button>
                    <button className='btn btn-danger' onClick={()=>handelDelete(el.id)}>
                        Delete
                    </button>
                    <button className='btn btn-warning'onClick={()=>handelView(el.id)}>
                        View
                    </button>
                </div>
             </td>

        </tr>
      ))
  }

</tbody>
</table>


    </div>
  )
}

export default Employelist
