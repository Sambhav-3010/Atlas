import React from "react";
import Spline from "./Spline";

const Home = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen text-white">
        <div className="absolute inset-0 z-0 mt-20">
          <Spline />
        </div>
        <form>
          <label htmlFor="destination">Travel Destination:</label>
          <input type="text" id="destination" name="destination" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Home;
