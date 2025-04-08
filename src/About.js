import React from 'react';
import './About.css';
import profilePicture from './home/wenfei/my-portfolio/src/assets/profile.jpg';

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
        <h1>About Me</h1>
        <p>This is the About page content.</p>
      </div>
    </div>
  );
}

export default About;