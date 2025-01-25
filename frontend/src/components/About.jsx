import React from "react";
import FocusCardsDemo from "./ui/FocusCards";
import Roadmap from "./ui/Roadmap";

const About = () => {
  return (
    <div className="w-full">
      <div className="text-white w-full mt-10 p-18 rounded-2xl backdrop-blur-md shadow-md font-bold font-sans">
        <h1 className="text-5xl mb-10">YOU COULD BE A</h1>
        <FocusCardsDemo />
        <br></br>
        <h2 className="text-4xl font-light">
          and still experience all that is there to enjoy!
        </h2>
      </div>
      <Roadmap />
    </div>
  );
};

export default About;
