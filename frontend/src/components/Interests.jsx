import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Interests = () => {
  const { destination } = useParams(); 
  const [interests, setInterests] = useState([]);
  const [newInterest, setNewInterest] = useState('');

  const handleInputChange = (event) => {
    setNewInterest(event.target.value);
  };

  const handleAddInterest = () => {
    if (newInterest.trim() !== '') {
      setInterests([...interests, newInterest]);
      setNewInterest('');
    }
  };

  return (
    <div className="h-screen w-full text-white bg-gradient-to-r from-black via-blue-900 to-black">
      <div className="flex justify-center items-center h-full">
        <h1 className="text-3xl mb-4">Interests for {destination}</h1> 
        <div className="flex flex-col space-y-2">
          <div className="flex">
            <input
              type="text"
              className="border border-gray-300 p-2 rounded-md mr-2"
              placeholder="Enter an interest"
              value={newInterest}
              onChange={handleInputChange}
            />
            <button 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
              onClick={handleAddInterest}
            >
              Add
            </button>
          </div>
          <ul className="list-disc pl-4">
            {interests.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Interests;