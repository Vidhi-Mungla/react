import React from 'react'
import { CreateConnetion } from './CreateConnetion'
import { useEffect } from 'react'
import { useState } from 'react'

function ChatRoom({roomId}) {
   // http://localhost:3000/

   const [serverUrl,setServerUrl] =  useState("http://localhost:1234/")

    // CreateConnetion(serverUrl,roomId)

    useEffect(()=>{

       const connection =  CreateConnetion(serverUrl,roomId);
       connection.connect();

       return()=>{
        connection.disconnect();
       }
        
    },[serverUrl,roomId])

  return (
    <div>
      
    </div>
  )
}



function Chat()
{

    const [roomId,setRoomId] = useState("General");
    const [show,setShow] = useState(false) 
    return (<>

        Choose your room : 
        <select value={roomId} onChange={(e)=>{setRoomId(e.target.value)}}>
            <option>General</option>
            <option>Music</option>
            <option>Travel</option>
        </select>
        <button onClick={()=>{setShow(!show)}}>
            {(show)? "Close Chat": "Open Chat"}
        </button>

        <ChatRoom roomId={roomId}/>
    

    </>)
}

export default Chat; 