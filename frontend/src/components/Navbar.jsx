import React from "react";
import { Link } from "react-router-dom";
import ShapeBlur from "./ui/ShapeBlur";

const Navbar = () => {
  return (
    <nav
      className="flex items-center justify-between p-4 rounded-2xl backdrop-blur-md shadow-md mx-0 my-0 h-28 w-[60%]"
      style={{
        background: "linear-gradient(135deg, rgba(30, 30, 30, 0.9), rgba(0, 0, 0, 0.7))",
        border: "1px solid rgba(255, 255, 255, 0.2)",
      }}
    >
        <div className="flex items-center justify-center w-20 h-20 rounded-full">
          <Link to="/">
            <ShapeBlur className="w-full h-full" />
          </Link>
        </div>

        {/* Navigation Links */}
      <ul className="flex items-center space-x-10 text-2xl font-medium">
        <li>
          <Link to="/" className="text-white hover:text-pink-400 transition duration-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-white hover:text-pink-400 transition duration-300">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;