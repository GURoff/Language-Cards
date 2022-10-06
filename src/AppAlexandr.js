import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/UI/Navbar/Navbar';
import HomePage from './Pages/HomePage';
import Translator from "./Pages/API/Translator";
import About from './Pages/About';

import './styles/App.css';

function AppAlexandr() {

  return (
    <div className="AppAlexandr">
      
      <BrowserRouter>
     <Navbar/>
        <Routes>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/vocabulary" element={<Translator/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path = "*" element = {<Navigate to="/home" replace/> }/>         
      </Routes> 
    </BrowserRouter>
    </div>
  );
}

export default AppAlexandr;
