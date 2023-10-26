import React from "react"

class Test extends React.Component 
{
    state = {count:0}

    componentDidMount()
    {
        console.log("Mouted...!")
    }

    ChnageNum = ()=>{
        this.setState({count:12})
    }
    render()
    {
        return(
            <>
            <h1 onClick={this.ChnageNum}>Number : {this.state.count}</h1>
            
            </>
        )
    }

    shouldComponentUpdate()
    {
        console.log("Should update???");
        return true;
    }

    componentDidUpdate() 
    {
        console.log("Updated..!")
    }
}

export default Test;