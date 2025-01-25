import React from "react";
import FocusCardsDemo from "./ui/FocusCards";

const About = () => {
  return (
    <div
      className="text-white w-full mt-10 p-18 rounded-2xl backdrop-blur-md shadow-md"
    >
      <h1 className="text-6xl mb-10" >YOU COULD BE A</h1>
      <FocusCardsDemo />
    </div>
  );
};

export default About;