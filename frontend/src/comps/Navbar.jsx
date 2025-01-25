import React from "react";
import { Link } from "react-router-dom";
import ShapeBlur from "./ShapeBlur";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* ShapeBlur effect as Logo */}
      <div className="logo">
        <ShapeBlur className="shape-blur-logo" />
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
