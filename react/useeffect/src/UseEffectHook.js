import React, { useEffect, useState } from 'react'

// useEffect(()=>{})
// useEffect(()=>{},[])
// useEffect(()=>{},[values])

function UseEffectHook() {

   const[pos,setPos] =  useState({x:0,y:0})



useEffect(()=>{
    const handleMove = (e)=>{
        setPos({
             x:e.clientX,
             y:e.clientY
        })

        console.log(e)
    }

    window.addEventListener("mousemove",handleMove)
})
 



  return (


    <div style={{
        height:20,
        width:20,
        // background:"blue",
        transform:`translate(${pos.x}px,${pos.y}px)`,
        position:"absolute",
        top:-10,
        left:-10,
        border:"3px groove blue",
        borderRadius:"50%"
        
    }}>
     
    </div>
  )
}

export default UseEffectHook