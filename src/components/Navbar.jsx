import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../context/DarkModeContext';

const Navbar = () => {
  const { toggleDarkMode } = useContext(DarkModeContext);

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/about">L'agence</Link>
        </li>
        <li>
          <Link to="/works">Projets</Link>
        </li>
        <li><button onClick={toggleDarkMode}>Toggle Dark Mode</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
