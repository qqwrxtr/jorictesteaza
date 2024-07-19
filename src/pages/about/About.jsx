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
        </div>
      </div>
      <div className="row d-flex align-items-center justify-content-center mt-5">
        <div className="col-6">
          <img className='img_profile img-fluid' src="https://riot-us.com/wp-content/uploads/2023/11/intro-1634607238.webp" alt="Profile Picture"/>
        </div>
        <div className="col-6 text_med text-start">
          <p>Ce sa zic,e vesel,nu e asa greu fara js :) viata e chiar malina
            e interesant react.js te simti chiar un pragramist maladet,care vrea denghi yoo
            </p>          
        </div>
      </div>
      <div className="row d-flex align-items-center justify-content-center mt-5">
        <div className="col-6 text_med text-start">
          <p>Cóż mogę powiedzieć, jest wesoło, bez JS nie jest tak ciężko :) Życie jest naprawdę ciężkie
          to ciekawe, reagują.js naprawdę czujesz się jak zły programista, który chce denghi yoo</p>          
        </div>
        <div className="col-6">
          <img className='img_profile img-fluid' src="https://riot-us.com/wp-content/uploads/2023/11/intro-1634607238.webp" alt="Profile Picture"/>
        </div>
      </div>
    </div>
  );
};

export default About;
