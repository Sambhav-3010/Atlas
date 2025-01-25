import React from "react";
import Spline from "./Spline";


const Home = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen text-white">
        <div className="absolute inset-0 z-0 mt-20">
          <Spline />
        </div>
        <form className="w-full max-w-lg">
          <label htmlFor="destination" className="sr-only">Destination</label>
          <input 
            className="h-20 w-full border-2 border-gray-300 bg-gray-100 rounded-md px-7 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-lg" 
            type="text" 
            id="destination" 
            name="destination" 
            placeholder="Enter your dream estination here!"
          />
          <br/><br></br>
          <input 
            type="submit" 
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-md text-lg"
            value="Submit"
          />
        </form>
      </div>
    </>
  );
};

export default Home;
