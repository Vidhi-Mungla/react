import { useEffect, useState } from 'react';
// import './OtherComponent.css';

function OtherComponent1() {
  const [users,setUsers] = useState();

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{return res.json()})
    .then((data)=>{
setUsers(data)
    })
  })
  return (
    <div className="OtherComponent">
      {/* Loaded OtherComponent */}
      {
        users && users.map((user)=>(
<li>{user.name}</li>
        ))
      }

    </div>
  );
}

export default OtherComponent1;