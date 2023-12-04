import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmpList from './EmpList';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>

     <Route path='/' element={<EmpList/>}></Route>
            
     </Routes>
     </BrowserRouter>
    </div> 
  );
}

export default App;
