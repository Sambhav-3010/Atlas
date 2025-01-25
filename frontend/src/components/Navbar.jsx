import React from "react";
import { Link } from "react-router-dom";
import ShapeBlur from "./ui/ShapeBlur";

const Navbar = () => {
  return (<>
    <nav className="flex items-center justify-between p-4"> 
    <Link to = '/' >
        <ShapeBlur className="w-32 h-32" /> 
        </Link>

      <div className="flex items-center space-x-10">
        <Link 
          to="/" 
          className="text-gray-400 hover:text-white transition-colors duration-300" >
          Home
          </Link>


        <Link 
          to="/about" 
          className="text-gray-400 hover:text-white transition-colors duration-300" >
          About
          </Link>

          
      </div>
    </nav>
</>
  );
};

export default Navbar;