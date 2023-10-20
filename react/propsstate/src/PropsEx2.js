import React from 'react';
import PropTypes from "prop-types";

function PropsEx2(props) {
  return (
    <div>
        <ul>
            <li>{props.name}</li>
            <li>{props.age}</li>
            <li>{props.course}</li>
        </ul>
      
    </div>
  )
}

PropsEx2.propTypes = {

    name:PropTypes.string,
    age:PropTypes.number,
    course:PropTypes.string

}

PropsEx2.defaultProps = {
    name:"Nakum",
    age:22,
    course:"React"
}

export default PropsEx2