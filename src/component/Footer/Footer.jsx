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
                <img src="/logo/niss.png" alt="" className="clientLogo" />
                <img src="/logo/niss.png" alt="" className="clientLogo" />
                <img src="/logo/niss.png" alt="" className="clientLogo" />
                </div>
            </div>
            <div className="clientContainer">
                <span className="clientTitle">Get in touch</span>
                <div className="clientContent">
                <LinkedIn className='icon' />
                <Google  className='icon'/>
                <Twitter className='icon' />
                </div>
            </div>
           
        </div>
    );
}

export default Footer;