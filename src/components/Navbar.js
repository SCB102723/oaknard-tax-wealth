import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const close = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" onClick={close}>Oaknard</Link>
      </div>

      <button
        className="navbar-hamburger"
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span className={`hamburger-icon${open ? ' open' : ''}`} />
      </button>

      <ul className={`navbar-links${open ? ' open' : ''}`}>
        {[
          { to: '/', label: 'Home' },
          { to: '/states', label: 'States' },
          { to: '/calendar', label: 'Calendar' },
          { to: '/resources', label: 'Resources' },
        ].map(({ to, label }) => (
          <li key={to}>
            <Link
              to={to}
              onClick={close}
              className={location.pathname === to ? 'active' : ''}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
