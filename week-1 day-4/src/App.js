import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Display from './components/SignUp/Display';


function App() {
  return (
    // <BrowserRouter>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Display" element={<Display />} />
      </Routes>
    </div>
  );
};

export default App;
