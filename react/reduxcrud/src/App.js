import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import CreateUser from './CreateUser';
import EditUser from './EditUser';


function App() {
  return (
    <div className="App">

    <BrowserRouter>
          <Routes>

                  <Route path='/' element={<Home/>} ></Route>
                  <Route path='/create' element={<CreateUser/>} ></Route>
                  <Route path='/edit/:userid' element={<EditUser/>} ></Route>

          </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
