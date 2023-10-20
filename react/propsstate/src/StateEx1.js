import React from "react"

class StateEx1 extends React.Component 
{

    // state = {count:1}

    constructor()
    {
        super();
        this.state = {count:1}
    }

    inc = ()=>{
        // this.setState({count:2})
        // this.setState({count:this.state.count+1})

        // this.setState(()=>(
        //     {count:this.state.count+1}
        // ))

        this.setState((prev)=>(
            {count:prev.count+1}
        ))
    }

    
    dec = ()=>{
        // this.setState({count:2})
        this.setState({count:this.state.count-1})
    }

    render()
    {
        return(
            <>
                <button onClick={this.dec}>Decrement</button>
                <h1>{this.state.count}</h1>
                <button onClick={this.inc}>Increment</button>
            </>
        )
    }
}

export default StateEx1;