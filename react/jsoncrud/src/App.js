import logo from './logo.svg';
import './App.css';

import EmpListing from './EmpListing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmpCreate from './EmpCreate';
import EmpView from './EmpView';
import EmpEdit from './EmpEdit';

function App() {

 return(
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<EmpListing/>}></Route>
    <Route path='/employee/create' element={<EmpCreate/>}></Route>
    <Route path='/employee/view/:empId' element={<EmpView/>}></Route>
    <Route path='/employee/edit/:empId' element={<EmpEdit/>}></Route>
  </Routes>
  </BrowserRouter>

  </>
 )
}

export default App;