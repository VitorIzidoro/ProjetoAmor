import React from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">❤️ Minha Mulher</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/photos">Photos</Link></li>
        <li><Link to="/love-notes">Love Notes</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
