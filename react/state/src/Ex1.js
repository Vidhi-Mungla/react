import React,{useState} from "react";


function Ex1()
{
    const [data, setData] = useState({name:"Vidhi"});
    

    const name_up = () => {
        setData({name:"Riddhi"}); 
    }

    
   return(
    <>
    <button onClick={name_up}>Update</button>
     <h1>{data.name}</h1>
    </>
    
   )
}

export default Ex1;