// filepath: /home/wenfei/Documents/my-portfolio/src/About.js
import React from 'react';
import './About.css';

function About() {
  return (
    <div>
      <h1>About Me</h1>
      <nav className="navmenu">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
      </nav>
    </div>
  );
}

export default About;