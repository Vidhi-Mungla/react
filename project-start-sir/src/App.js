import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Register';
import Login from './Login';

function App() {
  return (
    <div className="App">

   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/login/:user_em' element={<Login/>}></Route>
   </Routes>
   </BrowserRouter>

   
    </div>
  );
}

export default App;
