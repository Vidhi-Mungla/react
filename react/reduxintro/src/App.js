import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Increment, Decrement } from './action';

function App()
{
  const dispatch = useDispatch();
  const counter = useSelector(state => state.count)

  return (
    <div>

    <button onClick={()=>{dispatch(Increment())}}>+</button>
      {counter}
    <button onClick={()=>{dispatch(Decrement())}}>-</button>

    </div>
  );
}

export default App;
