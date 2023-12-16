import { BrowserRouter, Routes,Route} from "react-router-dom";
import Nav from './Nav';
import './App.css';
import Routing from './Routing';
import { createContext, useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css"

export const search=createContext();
function App() {
  return (
  <div>
     <BrowserRouter>
      <Nav/>
      <Routing/>
    </BrowserRouter>
  
   
  </div>
  
  )
}

export default App