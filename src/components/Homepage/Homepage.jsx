import React from 'react';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="h-screen w-screen relative flex flex-col">
      <img 
        src='/background.png' 
        alt="Background" 
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="heading1 z-10">
        DROID
      </div>
      <div className="heading2 text-center z-10">
        THINK - INNOVATE - APPLY
      </div>
    </div>
  );
}

export default Homepage;
