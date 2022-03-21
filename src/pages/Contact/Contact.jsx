import React from 'react';
import { Footer, Header } from '../../component';
import "./contact.scss";

const Contact = () => {
    return (
        <div className='contact'>
            <Header menu="contact" />
            <div className="contactContainer">
            <div className="titleContainer">
                <h4 className="title">Reach out to me</h4>
                <div className="line"></div>
            </div>
            <div className="contentContainer">
                <div className="imageCard">
                    <img src="/img/professional.png" alt="" className="aboutImage" />
                </div>
                <div className="descriptionCard">
                    <span className="descriptionAbout">
                    Please kindly reach out to me by filling your informations to the form below.
                    </span>
                    <div className="itemContainerContact">
                   <label htmlFor="">Your Name</label>
                   <input type="text" placeholder='Enter your full name' />
                    </div>
                    <div className="itemContainerContact">
                   <label htmlFor="">Email Address</label>
                   <input type="text" placeholder='Enter email address' />
                    </div>
                    <div className="itemContainerContact">
                   <label htmlFor="">Message</label>
                  <textarea name="" id="" cols="30" rows="5"></textarea>
                    </div>
                <div className="actionButtonsRow">
                {/* <button className="hireMe">Hire Me</button> */}
                <button className="downloadCv">Submit Information</button>
                </div>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;