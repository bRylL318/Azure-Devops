import React from 'react';
import { Link } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="#" className="brand-logo">Logo</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/Dashboard">Dashboard</Link></li>
          <li><Link to="/Contact">Contact Us</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/Display">Sign Up</Link></li>
        </ul>
        <ul class="sidenav" id="mobile-demo">
          <li><Link to="/Dashboard">Dashboard</Link></li>
          <li><Link to="/Contact">Contact Us</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Display">Sign Up</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;