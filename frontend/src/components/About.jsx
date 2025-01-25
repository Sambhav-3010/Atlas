import React from "react";
import FocusCardsDemo from "./ui/FocusCards";

const About = () => {
  return (<>
  
    <div
      className="text-white w-full mt-10 p-18 rounded-2xl backdrop-blur-md shadow-md font-bold font-sans" 
    >
      <h1 className="text-8xl mb-10" >YOU COULD BE A</h1>
      <FocusCardsDemo />
      <br></br>
      <h2 className="text-4xl font-light">and still experience all that is there to enjoy!</h2>
    </div>

    <div>
      <h2 className = "text-white text-4xl">How to use?</h2>
      <p className =  "text-white">
        <ol>
          <li> Go to Home and search the destination which entices you the most, or are planning to go.</li>
          <li>Enter what all your interests, the duration of your trip and click on Generate</li>
          <li>Sit back and wait a few seconds while Mira gives you an awesome plan to seize the day!</li>
        </ol>
        <br></br>
      </p>
    </div>
</>
  );
};

export default About;