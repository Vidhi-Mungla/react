import React from 'react'

export default function GetAPIdata() {

   const x =()=> 
    {
        // alert("s,kfhjklj")

        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{ return res.json()})
        .then((data)=>{

            // console.log(data);
            // document.write(data[0].title)

           let html = "<h1>--- API data --- </h1>"

            data.map((v)=>{

                html = html + `<b>${v.name +" " + v.username +"<br/>"}</b>`
            })
        
            document.getElementById('op').innerHTML = html
        
        })

    }


  return (
   <>
    <button onClick={x}>Get Data</button>
    <div id='op'>GetAPIdata</div>
   </>
  )
}
