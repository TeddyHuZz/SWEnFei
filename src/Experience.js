import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Experience.css';

function Experience() {
  useEffect(() => {
      document.title = "Wen Fei: Experience";
    }, []);

    return (
      <div className="container">
        <div className="header">
          <nav className="navmenu">
            <Link to="/about">About</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/projects">Projects</Link>
          </nav>
        </div>
        <div className="experience-page">
          <div className='timeline'>
            <div className='container left'>
              <div className='timelinetext'>
                <h2>Sept 2022 - Sept 2024</h2>
                <h3>Diploma in ICT(Software Engineering)</h3>
                <p>I have successfully graduated from Asia Pacific University
                  with a Diploma in ICT(Software Engineering). I have gained
                  knowledge in software engineering, web development, and
                  programming languages. I have also worked on various projects
                  that have helped me to develop my skills in software
                  development and programming.
                </p>
              </div>
            </div>
            <div className='container right'>
              <div className='timelinetext'>
                <h2>June 2024 - Sept 2024</h2>
                <h3>Event Department Trainee</h3>
                <p>I have joined APU Blockchain & Cyrpptocurrency Club as an
                  Event Department Trainee. I have gained experience in
                  organizing events, managing teams, and working with
                  various people. I have also developed my skills in event
                  management and communication.
                </p>
              </div>
            </div>
            <div className='container left'>
              <div className='timelinetext'>
                <h2>Oct 2024 - Feb 2025</h2>
                <h3>Support & Implementation Intern</h3>
                <p>I was assigned in the Support & Implementation Intern at
                  Info-Tech System Integrators Sdn Bhd. I have gained experience in
                  software implementation, customer support, and technical
                  troubleshooting. I have also developed my skills in
                  communicating with the team members and clients. I have understood
                  and famliarized with the company's HRMS system.
                </p>
              </div>
            </div>
            <div className='container right'>
              <div className='timelinetext'>
                <h2>Sept 2024 - Current</h2>
                <h3>Event Department Leader</h3>
                <p>I have successfully promoted to Event Department Leader at APU
                  Blockchain & Cryptocurrency Club. I have gained experience in
                  leading a team, organizing events, and managing projects. I have
                  also developed my skills in leadership, communication, and
                  project management. I have also organized various events that
                  have helped me to develop my skills in event management and
                  communication.
                </p>
              </div>
            </div>
            <div className='container left'>
              <div className='timelinetext'>
                <h2>Mar 2025 - Current</h2>
                <h3>BSc in Software Engineering</h3>
                <p>I decided to continue my studies in Asia Pacific University and
                  pursue a Bachelor's degree in Software Engineering. I have
                  gained more knowledge in software engineering, project management,
                  development methodologies, and programming languages. I have also
                  worked on various projects that have helped me to develop my
                  skills in software development and programming.
                </p>
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