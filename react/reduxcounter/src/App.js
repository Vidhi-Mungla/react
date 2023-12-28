import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from './action';
import { decrement } from './action';

function App() 
{
 
 const counter =  useSelector(state => state.count);
 const dispatch = useDispatch();

  return ( 
    <div className="App">
      <button onClick={()=>{dispatch(increment())}}>+</button>
     <h4>{counter}</h4> 
     <button onClick={()=>{dispatch(decrement())}}>-</button>
    </div>
  );

}

export default App;