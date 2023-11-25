import React, { useEffect } from 'react'

function CustomHook(eventType,ListenFunction) {

    useEffect(()=>{

        window.addEventListener(eventType,ListenFunction)
    },[eventType,ListenFunction])

  return (
    <div>
      
    </div>
  )
}

export default CustomHook