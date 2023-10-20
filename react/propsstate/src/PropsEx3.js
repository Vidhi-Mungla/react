import React from "react"

class PropsEx3 extends React.Component 
{

    render()
    {
        return(
            <>
                {this.props.name}
                {this.props.age}
                {this.props.course}
            </>
        )
    }
}

export default PropsEx3;