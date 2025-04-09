import React from 'react';
import './About.css';
import profilePicture from './assets/profile.jpg';
import twitterLogo from './assets/twitter.png'; 
import linkedinLogo from './assets/linkedin.png';
import githubLogo from './assets/github.png';
import InstagramLogo from './assets/instagram.png';

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
        <div className="text-section">
          <h1>
            Hey, I am Wen Fei! Software Developer and Web3{' '}
            <span className="typing-effect">Enthusiast</span>
          </h1>
          <div className="social-media">
            <a href="https://x.com/@TeddyHuZz" target="_blank" rel="noopener noreferrer">
              <img src={twitterLogo} alt="Twitter" className="social-logo" />
              <span>Twitter</span>
            </a>
            <a href="https://www.linkedin.com/in/keewenfeicyber" target="_blank" rel="noopener noreferrer">
              <img src={linkedinLogo} alt="LinkedIn" className="social-logo" />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/TeddyHuZz" target="_blank" rel="noopener noreferrer">
              <img src={githubLogo} alt="GitHub" className="social-logo" />
              <span>GitHub</span>
            </a>
            <a href="https://www.instagram.com/wenfei04/" target="_blank" rel="noopener noreferrer">
              <img src={InstagramLogo} alt="Instagram" className="social-logo" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
      <div className="terminal">
          <div className="terminal-header">
            <div className="top-rectangle"></div>
            <div className="dot-red"></div>
            <div className="dot-yellow"></div>
            <div className="dot-green"></div>
          </div>
        </div>
    </div>
  );
}

export default About;