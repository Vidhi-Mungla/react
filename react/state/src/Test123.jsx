import React from 'react';
import './App.css';

class Test1 extends React.Component 
{
  render()
  {
    return(
      <>
      
        <h1>Hello Class 123...!</h1>

        {(1==1) ? "Hello Class Compo 123" : "Bye Bye...!"}
        <X/>
      </>
    )
  }
}

function X()
{
    return(
        <>
            <h1>Hello Fuctional Compo...!</h1>
        </>
    )
}





export default Test1;
