import { Google, LinkedIn, Twitter } from '@mui/icons-material';
import React from 'react';
import "./footer.scss";

function Footer(props) {
    return (
        <div className='footer'>
            <div className="clientContainer">
                <span className="clientTitle">Clients</span>
                <div className="clientContent">
                <img src="/logo/niss.png" alt="" className="clientLogo" />
                <img src="/logo/agra.jpeg" alt="" className="clientLogo" />
                <img src="/logo/pmbl.png" alt="" className="clientLogo" />
                <img src="/logo/care.jpeg" alt="" className="clientLogo" />
                </div>
            </div>
            <div className="clientContainer">
                <span className="clientTitle">Get in touch</span>
                <div className="clientContent">
                <a target="_blank" href='https://www.linkedin.com/in/seyi-adejugbagbe-2a0512114/'><LinkedIn className='icon' /></a>
                <a target="_blank" href='mailto:seyiadejugbagbe@gmail.com'><Google  className='icon'/></a>
                <a target="_blank" href='https://twitter.com/seyiadejugbagbe?lang=en'><Twitter className='icon' /></a>
                </div>
            </div>
           
        </div>
    );
}

export default Footer;