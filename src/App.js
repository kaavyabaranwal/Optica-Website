import React from 'react';
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Mentor from "./routes/Mentor";
import Contact from "./routes/Contact";
import './App.css';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
   <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentor" element={<Mentor />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
   </>
  );
}

export default App;
