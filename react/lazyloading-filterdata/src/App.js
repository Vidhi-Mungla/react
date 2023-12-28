import logo from './logo.svg';
import './App.css';
// import { TestData } from './Users';
import { useEffect, useState } from 'react';


function App() {

  const [query,setQuery] = useState("")

  const [details,setDetails] = useState([])
useEffect(()=>{
  
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((res)=>{return res.json()})
  .then((data)=>{
    setDetails(data)
  })
})


  return (
    <div>

      Search: 
      <input value={query}

      onChange={(e)=>{setQuery(e.target.value)}}
      
      
      />

     <ul>

      {
      
      details.filter((items)=>items.username.toLowerCase().includes(query))
      .map(item =>(
        <li>{item.username}</li>
      ))
      
      
      
      }

      {/* {TestData.map(items =>(

        <li>{items.name}</li>
      ))} */}
    
      
     </ul>
  
    </div>
  );
}

export default App;