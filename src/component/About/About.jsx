import { Circle } from '@mui/icons-material';
import React from 'react';
import "./about.scss";

function About(props) {
    return (
        <div className='about'>
            <div className="titleContainer">
                <h4 className="title">About Me</h4>
                <div className="line"></div>
            </div>
            <div className="contentContainer">
                <div className="imageCard">
                    <img src="/img/professional.png" alt="" className="aboutImage" />
                </div>
                <div className="descriptionCard">
                    <span className="description">
                    Full stack web and mobile developer with background knowledge of MERN stacks with redux, along with a knack of building applications with utmost efficiency. Strong professional with a BSC willing to be an asset for an organization
                    </span>
                    <span className="description">Here are a Few Highlights:</span>
                <div className="itemContainer">
                    <Circle className='icon' />
                    <span className="description">Full Stack web and mobile development</span>
                </div>
                <div className="itemContainer">
                    <Circle className='icon' />
                    <span className="description">Interactive Front End design</span>
                </div>
                <div className="itemContainer">
                    <Circle className='icon' />
                    <span className="description">React and React Native</span>
                </div>
                <div className="itemContainer">
                    <Circle className='icon' />
                    <span className="description">PHP and Laravel </span>
                </div>
                <div className="itemContainer">
                    <Circle className='icon' />
                    <span className="description">Redux for State Mnanagement</span>
                </div>
                <div className="itemContainer">
                    <Circle className='icon' />
                    <span className="description">Building REST API</span>
                </div>
                <div className="itemContainer">
                    <Circle className='icon' />
                    <span className="description">Database Management</span>
                </div>
                <div className="actionButtonsRow">
                <button className="hireMe">Hire Me</button>
                <button className="downloadCv">Get Resume</button>
                </div>
                </div>
            </div>
            
        </div>
    );
}

export default About;