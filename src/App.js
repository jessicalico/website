import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
    <Router basename="/website">
      <Navbar />
      <Routes>
        <Route path='' element={<Home/>} />
        <Route path='projects' element={<Projects/>} />
        <Route path='contact' element={<Contact/>} />
      </Routes>
      </Router>
  </>
  );
}

export default App;
