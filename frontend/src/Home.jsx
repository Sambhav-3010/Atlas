import React from 'react';

const Home = () => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <form>
              <label htmlFor="destination">Travel Destination:</label>
              <input type="text" id="destination" name="destination" />
              <button type="submit">Submit</button>
          </form>
      </div>
      <div style={{ position: 'relative', height: '500px', overflow: 'hidden' }}>
      <ShapeBlur 
        variation={0} 
        pixelRatioProp={window.devicePixelRatio || 1} 
        shapeSize={0.9} 
        roundness={0.2} 
        borderSize={0.05} 
        circleSize={0.5} 
        circleEdge={1} 
      />
    </div>
    </>
  );
};

export default Home;