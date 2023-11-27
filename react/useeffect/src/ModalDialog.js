import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'

function ModalDialog() 
{
    const [show,setShow] = useState(false);

  return (
    <div>

        <button onClick={()=>{setShow(!show)}}>
            Open Model
        </button>

        <ModalEX isOpen={show}>
            <h1>Hello Alert</h1>
            <button onClick={()=>{setShow(false)}}>OK</button>
        </ModalEX>

    </div>
  )
}

export default ModalDialog
 function ModalEX({isOpen,children})
{

    const refDialog = useRef();

    useEffect(()=>{

        if(!isOpen)
        {
            return ;
        }

        const dialog = refDialog.current;
        dialog.showModal();

        return()=>{
            dialog.close();
        }


    },[isOpen])

    return(
        <>

        <dialog ref={refDialog}>
            {children}
        </dialog>
        </>
    );
}