// Making typing animation
// This is a functional component
// This component is used in Home.jsx

import React from 'react';
import Typewriter from 'typewriter-effect';

const Typing = () => {
  return (
    <Typewriter
      options={{
        strings: ['Web Developer', 'Frontend Developer', 'React Developer'],
        autoStart: true,
        loop: true,
      }}
    />
  );
}
