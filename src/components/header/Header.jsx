import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// Header.jsx
const Header = () => (
    <div className="container mt-2">
      <div className="row w-100 iopta">
        <div className="col-4 w-30">
          <h1>Teodor</h1>
        </div>
        <div className="col-8 w-70">
          <ul className="">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
            <li><a href="#!">Whu zis?</a></li>
            <li><a href="#!">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>

);

export default Header;
