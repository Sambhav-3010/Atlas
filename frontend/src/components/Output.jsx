import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Interests = () => {
  const location = useLocation();
  const responseText = location.state?.response || 'No response received.';

  const [loading, setLoading] = useState(true);
  const [interests, setInterests] = useState([]);

  useEffect(() => {
    const fetchInterests = async () => {
      try {
        const parsedInterests = responseText
          .trim() 
          .split(/\n\s*\n/) 
          .filter((text) => text.trim().length > 0); 
  
        setInterests(parsedInterests);
      } catch (error) {
        console.error('Error processing interests:', error);
        setInterests([]);
      } finally {
        setLoading(false);
      }
    };
  
    fetchInterests();
  }, [responseText]);
  

  const parseBoldText = (text) => {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  };

  if (loading) {
    return (
      <div className="h-screen w-full flex justify-center items-center bg-black">
        <p className="text-lg text-gray-400">Loading...</p>
      </div>
    );
  }

  if (interests.length === 0) {
    return (
      <div className="h-screen w-full flex justify-center items-center bg-black">
        <p className="text-lg text-gray-400">No interests available. Please try again.</p>
      </div>
    );
  }

  return (
    <div className="w-full text-white bg-black mt-20">
      <div className="flex flex-col items-center space-y-8 px-6">
        <h1 className="text-3xl font-bold mb-4 text-left w-full">Travel Itinerary</h1>

        <div className="flex flex-col space-y-8 w-full">
          {interests.map((day, index) => {
            const [dayTitle, ...activities] = day.split('\n').map((line) => line.trim()).filter((line) => line.length > 0);

            return (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg w-full">
                <h2
                  className="text-2xl font-semibold text-blue-400 mb-4"
                  dangerouslySetInnerHTML={{ __html: parseBoldText(dayTitle) }}
                />
                <ul className="list-none pl-6 space-y-4">
                  {activities.map((activity, idx) => (
                    <li key={idx} className="text-lg text-gray-200" dangerouslySetInnerHTML={{ __html: parseBoldText(activity) }} />
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Interests;
