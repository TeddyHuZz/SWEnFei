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
        <div className="wholecontent">
            <div className="timeline">
                <div className="timeline-item left">
                    <div className="content">
                    <p className="date">June 2024 - Sep 2024</p>
                    <p>Event Department Trainee<br />APUBCC</p>
                    </div>
                </div>

                <div className="timeline-item right">
                    <div className="content">
                    <p className="date">Sep 2022 - Sep 2024</p>
                    <p>Diploma in ICT (Software Engineering)<br />Asia Pacific University</p>
                    </div>
                </div>
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