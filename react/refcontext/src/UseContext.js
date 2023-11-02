import React, { createContext } from 'react'
import ParentCompo from './ParentCompo'

export const strVal = createContext()

export const arrVal = createContext()

function UseContext() 
{ 
  return (
    <div>

        <strVal.Provider value={"test123"}>
            <arrVal.Provider value={{id:1,name:"Riddhi"}}>
                <ParentCompo/>
            </arrVal.Provider>
        </strVal.Provider>  
                  
    </div>
  )
}

export default UseContext
