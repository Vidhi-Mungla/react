import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Employelist from './Employelist';
import Create from './Create';
import Edit from './Edit';
import View from './View';
function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Employelist/>}></Route>
    <Route path='/Create' element={<Create/>}></Route>
    <Route path='/Edit/:empid' element={<Edit/>}></Route>
    <Route path='/View/:empid' element={<View/>}></Route>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
