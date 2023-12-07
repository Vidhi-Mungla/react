import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Emplisting from './Emplisting';
import Empcreate from './Empcreate';
import EmpView from './EmpView';
import EmpEdit from './EmpEdit';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Emplisting/>}></Route>
        <Route path='/employee/create' element={<Empcreate/>}></Route>
        <Route path='/employee/view/:empid' element={<EmpView/>}></Route>
        <Route path='/employee/edit/:empid' element={<EmpEdit/>}></Route>

      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;

