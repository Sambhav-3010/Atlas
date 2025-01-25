import React from 'react';
import ShapeBlur from './components/ShapeBlur';

const Home = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
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