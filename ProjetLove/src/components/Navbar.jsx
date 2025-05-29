import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">❤️ Minha Mulher</div>

      {/* Checkbox controlado por estado */}
      <input
        type="checkbox"
        id="menu-toggle"
        className="menu-toggle"
        checked={menuOpen}
        onChange={() => setMenuOpen(!menuOpen)}
      />

      {/* Ícone do menu */}
      <label htmlFor="menu-toggle" className="menu-icon">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </label>

      {/* Links de navegação */}
      <ul className="nav-links">
        <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
        <li><Link to="/love-notes" onClick={handleLinkClick}>About</Link></li>
        <li><Link to="/photos" onClick={handleLinkClick}>Photos</Link></li>
        <li><Link to="/about" onClick={handleLinkClick}>Love Note</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;