import React from 'react'

function PropsEx1(props) {
    // x = {
    //     name:"Gaurav"
    // }
  return (
    <div>
        {props.name}
        {props.age}
        {props.course}
    </div>
  )
}


PropsEx1.defaultProps = {
    name:"Vidhi",
    age:"23",
    course:[1,2,3,4]
}



export default PropsEx1