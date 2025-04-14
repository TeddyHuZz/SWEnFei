import React from 'react';
import { Link } from 'react-router-dom';
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
          <Link to="/about">About</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/projects">Projects</Link>
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
          <div className="buttons">
            <span className="close"></span>
            <span className="minimize"></span>
            <span className="maximize"></span>
          </div>
          <div className="terminal-title">~/wenfei</div>
        </div>
        <div className="terminal-body">
          <p><span className="prompt">{'~$'}</span> WenFei.currentLocation</p>
          <p className="output-text">"Malaysia"</p>

          <p><span className="prompt">{'~$'}</span> WenFei.contactInfo</p>
          <p className="output">
            [
              <a href="mailto:keewenfeicyber@gmail.com" className="email-link">keewenfeicyber@gmail.com</a>,
              <a href="https://www.linkedin.com/in/keewenfeicyber" className="social-link"> LinkedIn</a>, 
              <a href="https://github.com/TeddyHuZz" className="social-link"> GitHub</a>, 
              <a href="https://x.com/@TeddyHuZz" className="social-link"> Twitter</a> 
            ]
          </p>

          <p><span className="prompt">{'~$'}</span> WenFei.resume</p>
          <p className="output">
            <a
              href="/wenfei-resume.pdf"
              target='_blank'
              rel="noopener noreferrer"
              className="resume-link"
            >
              "wenfei-resume.pdf"
            </a>
          </p>

          <p><span className="prompt">{'~$'}</span> WenFei.interests</p>
          <p className="output-text">["coding", "web3", "traveling", "gaming", "tech stuff"]</p>

          <p><span className="prompt">{'~$'}</span> WenFei.education</p>
          <p className="output-text">"B.Sc. Software Engineering - Asia Pacific University"</p>

          <p><span className="prompt">{'~$'}</span> WenFei.languages</p>
          <p className="output-text">["JavaScript", "React", "Node.js", "Python", "CSS", "MySQL", "Java", "HTML", "PHP"]</p>

          <p><span className="prompt">{'~$'}</span> WenFei.skills</p>
          <p className="output-text">["Blockchain", "Git", "Linux", "Leadership", "Communication", "Critical Thinking"]</p>
        </div>
      </div>
      <div className="footer">
        <p>© 2025 Wen Fei. All rights reserved.</p>
        <p>Designed and Developed by Wen Fei</p>
      </div>
    </div>
  );
}

export default About;