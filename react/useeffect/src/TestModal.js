import React from 'react';
import { useState } from "react";

import { useRef } from "react";
import { useEffect } from "react";

function TestModal() {
    const [show, setShow] = useState(false);

  return (
    <div className="App">
      <button onClick={()=>{setShow(true)}}>
        Open Modal
      </button>

      <PopModal isOpen={show}>
        <h2>Hello Alert</h2>
        <p>THis are Children</p>
        <button onClick={()=>{setShow(false)}}>Close</button>
      </PopModal>
    </div>
  )
}

export default TestModal


function PopModal({ isOpen, children }) {

    const dRef = useRef();
    console.log(dRef);
  
  useEffect(()=>{
  
  if(!isOpen)
  {
    return;
  }
    const dialog = dRef.current;
    dialog.showModal();
  
    return()=>{
      dialog.close();
    }
  
  },[isOpen])
  
    return (
      <>
        <dialog ref={dRef}>
          {children}
        </dialog>
      </>
    );
  }
  