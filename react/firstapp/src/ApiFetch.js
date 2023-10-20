import React from "react";

export default function ApiFetch()
{
     const P=()=>
     {
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then((res)=>{return res.json()})
        .then((data)=>
        {
                var html = "<h1>-----  ApiFetch -------</h1>"

               data.map((v)=>
               {

                html = html + `<b>${v.userId + " "+ v.title+"<br/>"}</b>`

               }

               )
               document.getElementById('ans').innerHTML=html

        })
     }
     return(
        <>
           <button onClick={P}>Apidata</button>
           <div id="ans">ApiFetch</div>
        </>
     )
}