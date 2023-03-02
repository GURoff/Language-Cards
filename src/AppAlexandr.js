import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/UI/Navbar/Navbar';
import HomePage from './Pages/HomePage';
import Translator from "./Pages/API/Translator";
import About from './Pages/About';
import Profile from "./Pages/Profile";
import TestPage from "./Pages/TestPage";

import './styles/App.css';
import './styles/NavbarModern.css';
import NavbarModern from "./components/UI/Navbar/Navbar";

function AppAlexandr() {

  return (
    <div className="AppAlexandr">

      <BrowserRouter>
        {/* <NavbarModern /> */}
        <Navbar />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/vocabulary" element={<Translator />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/testpage" element={<TestPage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppAlexandr;
