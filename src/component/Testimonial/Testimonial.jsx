import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import React, { useState } from 'react';
import "./testimonial.scss";
import {isMobile} from 'react-device-detect';

function Testimonial(props) {
    const [scroll,setScroll]=useState(0);
    const scrollLeft=()=>{
      if (isMobile) {
        document.getElementById('section').scrollLeft -= 200;
      }
      else{
        document.getElementById('section').scrollLeft -= 50;
      }
    }
    const scrollRight=()=>{
      if (isMobile) {
        document.getElementById('section').scrollLeft += 200;
      }
      else{
        document.getElementById('section').scrollLeft += 50;
      }
        
    }
    return (
        <div className='testimonial'>
             <div className="titleContainer">
                <h4 className="title">Testimonial</h4>
                <div className="line"></div>
            </div>
            <div className="rowContainer">
            <KeyboardArrowLeft onClick={()=>scrollLeft()} className='icon' />
                <div id="section" className="scrollTestimonial">
                <div className="cardTestimonial">
                    <span className="textTestifier">
                    “ It was nice nice working with seyi. he deliver project with perfection. He listen to us and added to the solution aswell. He is good at what he does.”
                    </span>
                    <div className="rowTitle">
                        <img src="/img/avatar.jpeg" alt="" className="image" />
                        <div className="headerContainer">
                            <span className="name">Prof Victor Chude</span>
                            <span className="workplace">CEO/Registrar Nigeria Institute of Soil Science (NISS)</span>
                        </div>
                    </div>
                </div>

                <div className="cardTestimonial">
                    <span className="textTestifier">
                    “ It was nice nice working with seyi. he deliver project with perfection. He listen to us and added to the solution aswell. He is good at what he does.”
                    </span>
                    <div className="rowTitle">
                        <img src="/img/avatar.jpeg" alt="" className="image" />
                        <div className="headerContainer">
                            <span className="name">Prof Victor Chude</span>
                            <span className="workplace">CEO/Registrar Nigeria Institute of Soil Science (NISS)</span>
                        </div>
                    </div>
                </div>

                <div className="cardTestimonial">
                    <span className="textTestifier">
                    “ It was nice nice working with seyi. he deliver project with perfection. He listen to us and added to the solution aswell. He is good at what he does.”
                    </span>
                    <div className="rowTitle">
                        <img src="/img/avatar.jpeg" alt="" className="image" />
                        <div className="headerContainer">
                            <span className="name">Prof Victor Chude</span>
                            <span className="workplace">CEO/Registrar Nigeria Institute of Soil Science (NISS)</span>
                        </div>
                    </div>
                </div>

                <div className="cardTestimonial">
                    <span className="textTestifier">
                    “ It was nice nice working with seyi. he deliver project with perfection. He listen to us and added to the solution aswell. He is good at what he does.”
                    </span>
                    <div className="rowTitle">
                        <img src="/img/avatar.jpeg" alt="" className="image" />
                        <div className="headerContainer">
                            <span className="name">Prof Victor Chude</span>
                            <span className="workplace">CEO/Registrar Nigeria Institute of Soil Science (NISS)</span>
                        </div>
                    </div>
                </div>
                </div>
                <KeyboardArrowRight onClick={()=>scrollRight()} className='icon' />
            </div>
        </div>
    );
}

export default Testimonial;