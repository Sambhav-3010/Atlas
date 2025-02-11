import React, { useState, useEffect } from 'react';

const Interests = () => {
  const [interests, setInterests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBackendData = async () => {
      try {
        const response = await fetch('https://atlas-backend-gamma.vercel.app/get', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data from the backend');
        }

        const data = await response.json();
        console.log('Data from the backend:', data);
        const rawText = data.result;

        // Clean up and split the raw text into an array of days
        const days = rawText.split('###').map(day => day.trim()).filter(day => day.length > 0);

        setInterests(days); // Store each day's activities as separate entries
      } catch (error) {
        console.error('Error fetching the backend data:', error);
        setInterests([]); // Ensure interests is set to an empty array in case of error
      } finally {
        setLoading(false);
      }
    };

    fetchBackendData();
  }, []);

  const parseBoldText = (text) => {
    // Replace **text** with <strong>text</strong> to make it bold
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
            const [dayTitle, ...activities] = day.split('\n').map(line => line.trim()).filter(line => line.length > 0);

            return (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg w-full">
                <h2 className="text-2xl font-semibold text-blue-400 mb-4">{parseBoldText(dayTitle)}</h2>
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
