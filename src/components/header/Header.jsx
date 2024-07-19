import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'
import Home from './../../pages/home/Home'
import About from './../../pages/about/About'

// Header.jsx
const Header = () => (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h1>Jora</h1>
        </div>
        <div className="col-8">
          <ul>
          <li><Link to="./../../pages/home/Home.jsx">Home</Link></li>
          <li><Link to="./../../pages/about/About.jsx">About</Link></li>
            <li><a href="#!">Whu zis?</a></li>
            <li><a href="#!">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>

);

export default Header;
