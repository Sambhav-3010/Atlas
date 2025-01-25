import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Spline from './Spline';

const Home = () => {
  const [destination, setDestination] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (destination.trim() === '') return;

    try {
      const response = await fetch('http://your-backend-url/api/destination', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ destination }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch the response from the backend');
      }

      const data = await response.json();
      navigate(`/interests/${destination}`, { state: { data } });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="h-screen w-full text-white mt-10">
      <div className="flex justify-center items-center h-full">
        <div className="absolute inset-0 z-0 mt-20">
          <Spline />
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full z-10 flex justify-center"
        >
          <label htmlFor="destination" className="sr-only">
            Destination
          </label>
          <input
            className="h-20 w-[45%] bg-black bg-opacity-50 opacity-80 rounded-3xl px-7 py-2 focus:outline-none placeholder-gray-200 text-lg shadow-2xl shadow-black/90 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-violet-900/50"
            type="text"
            id="destination"
            name="destination"
            placeholder="Enter your dream destination here!"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default Home;
