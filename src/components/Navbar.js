import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Oaknard</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/states">States</Link></li>
        <li><Link to="/resources">Resources</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
