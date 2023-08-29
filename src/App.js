import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from './components/Projects';
import Contact from './components/Contact';
import NoPage from './components/NoPage';

const App = () => {
  return (
    <div className='relative z-0 bg-[#39195c]'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;