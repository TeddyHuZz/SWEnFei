import React from 'react';
import './About.css';
import profilePicture from './assets/profile.jpg';

function About() {
  return (
    <div className="container">
      <div className="header">
        <nav className="navmenu">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
        </nav>
      </div>
      <div className="content">
        <img src={profilePicture} alt="Me" className="profile-picture" />
        <h1>
          Hey, I am Wen Fei! Software Developer and Web3{' '}
          <span className="typing-effect">Enthusiast</span>
        </h1>
      </div>
    </div>
  );
}

export default About;