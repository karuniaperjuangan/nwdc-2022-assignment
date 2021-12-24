import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Daftar from './pages/Daftar';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  return (
      <BrowserRouter>
      <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="daftar" element={<Daftar />} />
          <Route path="about" element={<About />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
       
        <Footer />
      </BrowserRouter>
      
  );
}

export default App;
