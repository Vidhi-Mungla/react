import React, { useReducer } from 'react'

function UseReducerHook() {

    // const [x,setX] = useReducer(function,intialval)

    const reducer = (prev,action)=>
    {

        console.log(action)
        if(action.name == "Vidhi")
        {
            return {count:prev.count+1}
        }
        else 
        {
            return {count:prev.count-1}
        }
    }

    const [state,dispatch] =  useReducer(reducer,{count:0})
  return (
    <div>

        <button onClick={()=>{dispatch({name:"Vidhi"})}}>Increment</button> 
        <h4>{state.count}</h4>
        <button onClick={()=>{dispatch({name:"Riddhi"})}}>Decrement</button> 
      
    </div>
  )
}

export default UseReducerHook