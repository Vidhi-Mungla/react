import React from 'react';
import './App.css';
import PropsEx1 from './PropsEx1';
import PropsEx2 from './PropsEx2';
import PropsEx3 from './PropsEx3';
import StateEx1 from './StateEx1';

class App extends React.Component {

  num1=10;
  num2=20;

  x = function xyz()
  {
    // alert("class alert")
  }

  sum = ()=>{
    document.getElementById('h').innerHTML = this.num1+this.num2
  }

 render()
 {
  return (
    <div className="App" onClick={this.x}>
      Hello Class<br/>

      <h1 id='h'></h1>
      <button onClick={this.sum}>Get Sum</button>
      <Test/>
      {/* <PropsEx1 name="Gaurav" age={23} course={[1,2,3]}/> */}

      <PropsEx1/>
      <PropsEx2/>
      <PropsEx3 name="ClassProp" age={12} course={"react"}/>

      <StateEx1/>

    </div>
  );
 }
}


function Test()
{

  function abc()
  {
    // alert("fun alert...!")
  }

  return(<>
  
    <h2 onClick={abc}>Hello Fun</h2>
  
  </>)
  
}

export default App;