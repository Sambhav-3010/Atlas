import React from "react";
import { Link } from "react-router-dom";
import ShapeBlur from "./ui/ShapeBlur";

const Navbar = () => {
  return (
    <>
    <nav
      className="flex items-center justify-between p-4 rounded-2xl backdrop-blur-md shadow-md mx-0 my-0 h-28 w-[60%]"
      style={{
        background: "linear-gradient(135deg, rgba(30, 30, 30, 0.9), rgba(0, 0, 0, 0.7))",
        border: "1px solid rgba(255, 255, 255, 0.2)",
      }}
    >
      <div className="flex items-center justify-center w-20 h-20 rounded-full relative">
        <Link to="/">
          <span className="absolute left-1/4 top-1/2 transform -translate-y-1/2 text-gray-600 font-bold text-6xl opacity-90">
            Atlas
          </span>
          <ShapeBlur className="w-full h-full z-0" /> 
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="flex items-center space-x-10 text-2xl font-medium">
        <li>
          <Link to="/" className="text-white hover:text-violet-900/50 transition duration-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-white hover:text-violet-900/50 transition duration-300">
            About
          </Link>
        </li>
      </ul>
    </nav>
    <div className="absolute bottom-0 right-4"> 
      <span className="bg-black text-white p-2 rounded-sm">A Mira Flows Creation</span> 
    </div>
  </>);
};

export default Navbar;