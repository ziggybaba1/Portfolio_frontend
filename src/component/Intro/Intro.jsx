import { Laptop } from '@mui/icons-material';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./intro.scss";

function Intro(props) {
    useEffect(() => {
      
    });
   

    return (
        <div className='intro'>
            
            {/* <div class="bubbles"></div> */}
            <div className="introContent">
            <div className="firstColumn">
                <span className="introTitle">Hello I’M <b>Oluwaseyi</b></span>
                <div className="rowIntroAnimate"><span className="introAnimate"></span> <Laptop className='icon' /></div>
                <span className="introDescription">Knack of building applications with front and backend operations</span>
           <div className="introButton">
            <Link to="/contactme" className="hireMe">Hire Me</Link>
            <a href="mailto:contact@seyiadejugbagbe.com" className="downloadCv">Contact me</a>
            </div>
            </div>
            <div className="secondColumn">
                {/* <div className="circleTop"></div>
                <div className="circleBottom"></div> */}
                <img src="/img/avatar.jpg" alt="" className='introImage' />
            </div>
        </div>
        </div>
    );
}

export default Intro;