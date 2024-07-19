import React from "react";
import { Link } from 'react-router-dom';
import './footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../header/header.css'

const Footer = () => (
  <>
    <div className="container">
        <div className="hr"></div>
    </div> 
  <div className="container mt-5">
    <div className="row w-100">
      <div className="col-8">
        <p>Teodor React 1st time</p>
      </div>
      <div className="col-4 w-30">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><a href="#!">Whu zis?</a></li>
          <li><a href="#!">Contact</a></li>
        </ul>
      </div>
    </div>
    <div className="row w-100">
      <div className="col-12 text-center">
        <p className="text-center">&copy; 2024 Teodor</p>
      </div>
    </div>
  </div>
    
  </>
);

export default Footer;
