import React from 'react';
import './App.css';
import Test1 from './Test123';
import PropsEx from './PropsEx';
import State from './State';
import Ex1 from './Ex1';
import InputValueUpdate from './input';

class Test extends React.Component 
{

  Chk()
  {
    alert("hello")
  }


  render()
  {
    return(
      <>
      
      <PropsEx name="123" age={22} course={[12,34,45]}/> 
      <button onClick={this.Chk}>Get Alert</button>
      <Abhay/>
        <h1>Hello Class...!</h1>

        {(1==1) ? "Hello Class Compo" : "Bye Bye...!"}
      
      <p>para</p>

      <Test1/>
      <Ex1/>
      <State/>
      <InputValueUpdate/>
      
      </>
    )
  }
}

function Abhay()
{
  let test123 =  ()=>
  {
   let x=1;
   let y=10;

   console.log(x+y)

  }

  return(
    <>
      <div onMouseEnter={test123}>Abhay</div>
    </>
  )
}

export default Test;