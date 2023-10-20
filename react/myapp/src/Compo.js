import React from "react";
import './style.css';
import test1 from "./car.jpg";
import test from "./image/car.jpg"

class DemoClass extends React.Component
{
    render()
    {
        return(
            <>
            functional compo inside class Compo
                <DemoFun/>
                <App/>   
            </>
        )
    }
}
export default DemoClass;


function DemoFun()
{

    const x="vidhi";
    const y ="Riddhi";
    const obj = {
        color:"red",
        background:"pink"
    }
    return(
        <>
        functional COmpo
            <h3 style={obj} className="vidhi">{x}</h3>{x}
            <img src="https://images.homify.com/w_600,c_fill,q_auto,a_0,f_auto/v1558501626/p/photo/image/3064206/6818b2b545db7252c2186a5e2ec00958.jpg" height="200px"/>
            <img src={test} height="100px"/>
            <img src={test1} height="200px"/>
        </>
    )
}


function App() {
    return (
      <div className="app">
        <h1>Image in project</h1>
        <img src={reactLogo} alt="react logo" />
  
        <h1>Image from google</h1>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
          alt="react logo"
        />
        <h1>Background image</h1>
        <div
          className="background-image"
          style={{
            backgroundImage:
              "url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png)"
          }}>
        <h6 style={{textAlign:"center", color:"red"}}>Background Image</h6> 
        </div>
      </div>
    );
  }
  