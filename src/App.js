import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home'
import About from './pages/about/About'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';

// App.js

function App() {
  return (
    <>
      <Router>
        <Header />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
