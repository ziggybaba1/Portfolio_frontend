import { Laptop } from '@mui/icons-material';
import React from 'react';
import "./intro.scss";

function Intro(props) {
    return (
        <div className='intro'>
            <div className="firstColumn">
                <span className="introTitle">Hello I’M <b>Oluwaseyi</b></span>
                <div className="rowIntroAnimate"><span className="introAnimate">Full Stack Developer</span> <Laptop className='icon' /></div>
                <span className="introDescription">Knack of building applications with front and backend operations</span>
           <div className="introButton">
            <button className="hireMe">Hire Me</button>
            <button className="downloadCv">Get Resume</button>
            </div>
            </div>
            <div className="secondColumn">
                <div className="circleTop"></div>
                <div className="circleBottom"></div>
                <img src="/img/avatar.jpeg" alt="" className='introImage' />
            </div>
        </div>
    );
}

export default Intro;