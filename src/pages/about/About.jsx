import React from 'react';
import './about.css'

const About = () => {
  return (
    <div className='text-center'>
      <h1>About Me</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia,
        metus vel efficitur vulputate, metus nibh semper nulla, non consequat
        nibh ligula in lectus. Sed rutrum, augue id posuere malesuada, nunc
        ex varius nisi, ac bibendum nisl nulla id nunc.
      </p>
      <img
        src="https://via.placeholder.com/300x300"
        alt="Profile Picture"
      />
    </div>
  );
};

export default About;
