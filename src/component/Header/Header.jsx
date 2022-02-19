import React from 'react';
import "./header.scss";
import {LinkedIn,Google,Twitter,Dehaze} from "@mui/icons-material"

var show="none";
function Header(props) {
    const showMenu=()=>{
        show=show==="none"?"flex":"none";
        document.getElementById("mobileMenu").style.display = show;
    }
    return (
        <div className='header'>
            <div className="rowNav">
            <div className="logo">
            <Dehaze onClick={showMenu} className="mobNav" />
                <h4 className="logoTitle">ZIGGYBABA</h4>
              
            </div>
            <div className="menu">
                <a className='active'>Home</a>
                <a>AboutMe</a>
                <a>LatestWork</a>
                <a>Testimonial</a>
                <a>ContactMe</a>
            </div>
            <div className="social">
                <LinkedIn className='icon' />
                <Google  className='icon'/>
                <Twitter className='icon' />
            </div>
        </div>
        <div id="mobileMenu" className="mobileMenu">
                <a className='active'>Home</a>
                <a>AboutMe</a>
                <a>LatestWork</a>
                <a>Testimonial</a>
                <a>ContactMe</a>    
        </div>
    </div>
    );
}

export default Header;