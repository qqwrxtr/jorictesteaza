import React from 'react';
import './about.css'

const About = () => {
  return (
    <div className='container text-center'>
      <div className="row">
        <div className="col-12">
          <h1>About Me <b>Teodor</b></h1>
          <p className='txt'>
            Mai in scurt,azi incepem sa facem site-uri pe react,cu pricoale mari si frumoase,incercam sa il invatam ca sa avem salariu mare pe viitor iopta,sunt Teodor si invat React,si bagam si bootstrap in el
          </p>
          <img
            className='img_profile'
            src="https://riot-us.com/wp-content/uploads/2023/11/intro-1634607238.webp"
            alt="Profile Picture"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
