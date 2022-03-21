import { Circle } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import "./about.scss";

function About(props) {
    return (
        <div id="about" className='about'>
            <div className="titleContainer">
                <h4 className="title">About Me</h4>
                <div className="line"></div>
            </div>
            <div className="contentContainer">
                <div className="imageCard">
                    <img src="/img/professional.png" alt="" className="aboutImage" />
                </div>
                <div className="descriptionCard">
                    <span className="descriptionAbout">
                    Experienced Scrum master with a keen ability to understand and build complex systems. I have excellent design & coding skills, as well as an ability convert client requirements into exciting online applications. I love spending time on fixing little details and optimizing web/mobile apps.
                    I understand the needs and goals of the organization/individual and can find ways to help them realize their objectives more efficiently. I care for your time and mine also. I'm flexible enough to adjust in your requirements ensuring you the quality work
                    </span>
                    <span className="descriptionAbout">Here are a Few Highlights:</span>
                <div className="itemContainerAbout">
                    <Circle className='icon' />
                    <span className="descriptionAbout">Full Stack web and mobile development</span>
                </div>
                <div className="itemContainerAbout">
                    <Circle className='icon' />
                    <span className="descriptionAbout">Interactive Front End design HTML5, CSS, Javascript, jQuery</span>
                </div>
                <div className="itemContainerAbout">
                    <Circle className='icon' />
                    <span className="descriptionAbout">React and React Native</span>
                </div>
                <div className="itemContainerAbout">
                    <Circle className='icon' />
                    <span className="descriptionAbout">PHP and Laravel </span>
                </div>
                <div className="itemContainerAbout">
                    <Circle className='icon' />
                    <span className="descriptionAbout">Node and Express </span>
                </div>
                <div className="itemContainerAbout">
                    <Circle className='icon' />
                    <span className="descriptionAbout">Redux for State Mnanagement</span>
                </div>
                <div className="itemContainerAbout">
                    <Circle className='icon' />
                    <span className="descriptionAbout">Building REST API</span>
                </div>
                <div className="itemContainerAbout">
                    <Circle className='icon' />
                    <span className="descriptionAbout">Database Management MySql, MongoDB, Sql, </span>
                </div>
                <div className="actionButtonsRow">
                <Link to="/contactme" className="hireMe">Hire Me</Link>
            <a href="mailto:contact@seyiadejugbagbe.com" className="downloadCv">Contact me</a>
                </div>
                </div>
            </div>
            
        </div>
    );
}

export default About;