import React from 'react';
import { Link } from 'react-router-dom';
import './Experience.css';

function Experience() {
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
            <div className='line'>
                <p className='line1-duration'>Sept 2022 - Sept 2024</p>
                <p className='line1-text'>Diploma in ICT (Software Engineering)
                Asia Pacific University</p>
            </div>
        </div>
        <div className="footer">
          <p>© 2025 Wen Fei. All rights reserved.</p>
          <p>Designed and Developed by Wen Fei</p>
        </div>
      </div>
    );
  }
  
  export default Experience;