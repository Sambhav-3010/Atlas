import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Spline from './Spline';

const Home = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    destination: "",
    food: "",
    places: "",
    social: "",
    duration: ""
  });

  const [currentField, setCurrentField] = useState(0);

  const fields = [
    { id: "destination", name: "destination", placeholder: "Enter your dream destination here!" },
    { id: "food", name: "food", placeholder: "Enter your food preferences here!" },
    { id: "places", name: "places", placeholder: "Enter places you want to visit!" },
    { id: "social", name: "social", placeholder: "Enter your social preferences!" },
    { id: "duration", name: "duration", placeholder: "Enter the duration of your trip!" }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.destination.trim() === '') return;

    try {
      const response = await fetch('http://127.0.0.1:5000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch the response from the backend');
      }

      await response.json();
      navigate("/interests");
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleNextField = () => {
    setCurrentField((prevField) => prevField + 1);
  };

  const handleBackField = () => {
    if (currentField > 0) {
      setCurrentField(currentField - 1);
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
          className="w-full z-10 flex flex-col items-center space-y-4 relative"
        >
          {currentField > 0 && (
            <button
              type="button"
              className="absolute top-0 left-30 mt-2 ml-2 h-10 w-20 rounded-lg px-2 py-1 text-white focus:outline-none hover:shadow-blue-300 hover:scale-105 "
              onClick={handleBackField}
            >
              Previous
            </button>
          )}
          {currentField < fields.length && (
            <input
              key={fields[currentField].id}
              className="h-20 w-[45%] bg-black bg-opacity-50 opacity-80 rounded-3xl px-7 py-2 focus:outline-none placeholder-gray-200 text-lg shadow-2xl shadow-black/90 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-violet-900/50"
              type="text"
              id={fields[currentField].id}
              name={fields[currentField].name}
              placeholder={fields[currentField].placeholder}
              value={formData[fields[currentField].name]}
              onChange={handleChange}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleNextField();
                }
              }}
              autoFocus
            />
          )}
          {currentField === fields.length && (
            <button
              type="submit"
              className="h-20 w-[45%] bg-violet-600 rounded-3xl px-7 py-2 focus:outline-none text-lg shadow-2xl shadow-black/90 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-violet-900/50 opacity-90 focus:opacity-100"
            >
              Submit
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Home;