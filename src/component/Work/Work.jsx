import { ArrowLeft, ArrowRight, KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import React, { useState } from 'react';
import "./work.scss";
import {isMobile} from 'react-device-detect';

function Work(props) {
    const [scroll,setScroll]=useState(0);
    const scrollLeft=()=>{
      if (isMobile) {
        document.getElementById('section').scrollLeft -= 270;
      }
      else{
        document.getElementById('section').scrollLeft -= 50;
      }
    }
    const scrollRight=()=>{
      if (isMobile) {
        document.getElementById('section').scrollLeft += 270;
      }
      else{
        document.getElementById('section').scrollLeft += 50;
      }
        
    }
    return (
        <div className='work'>
             <div className="titleContainer">
                <h4 className="title">Latest Work</h4>
                <div className="line"></div>
            </div>
            <div className="widthContainer">
                <KeyboardArrowLeft onClick={()=>scrollLeft()} className='icon' />
                <div id="section" className="scrollContainer">
                <div className="itemContainer">
                <div className="mobileMockupContainer">
                    <div className="contentContainer">
                        <div className="speaker"></div>
                        <div className="mic"></div>
                        <img src="/img/professional.png" alt="" className="screenShot" />
                    </div>
                </div>
                <div className="titleContainer">
                    <span className="title">React Native/Node.js</span>
                    <a className="heading">NissAgro Mobile Application</a>
                </div>
                </div>

                <div className="itemContainer">
                <div className="mobileMockupContainer">
                    <div className="contentContainer">
                        <div className="speaker"></div>
                        <div className="mic"></div>
                        <img src="/img/professional.png" alt="" className="screenShot" />
                    </div>
                </div>
                <div className="titleContainer">
                    <span className="title">React Native/Node.js</span>
                    <a className="heading">NissAgro Mobile Application</a>
                </div>
                </div>

                <div className="itemContainer">
                <div className="mobileMockupContainer">
                    <div className="contentContainer">
                        <div className="speaker"></div>
                        <div className="mic"></div>
                        <img src="/img/professional.png" alt="" className="screenShot" />
                    </div>
                </div>
                <div className="titleContainer">
                    <span className="title">React Native/Node.js</span>
                    <a className="heading">NissAgro Mobile Application</a>
                </div>
                </div>

                <div className="itemContainer">
                <div className="mobileMockupContainer">
                    <div className="contentContainer">
                        <div className="speaker"></div>
                        <div className="mic"></div>
                        <img src="/img/professional.png" alt="" className="screenShot" />
                    </div>
                </div>
                <div className="titleContainer">
                    <span className="title">React Native/Node.js</span>
                    <a className="heading">NissAgro Mobile Application</a>
                </div>
                </div>
                
                <div className="itemContainer">
                <div className="mobileMockupContainer">
                    <div className="contentContainer">
                        <div className="speaker"></div>
                        <div className="mic"></div>
                        <img src="/img/professional.png" alt="" className="screenShot" />
                    </div>
                </div>
                <div className="titleContainer">
                    <span className="title">React Native/Node.js</span>
                    <a className="heading">NissAgro Mobile Application</a>
                </div>
                </div>
                </div>
                <KeyboardArrowRight onClick={()=>scrollRight()} className='icon' />
            </div>
        </div>
    );
}

export default Work;