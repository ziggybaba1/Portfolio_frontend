import React from 'react';
import "./header.scss";
import {LinkedIn,Google,Twitter,Dehaze} from "@mui/icons-material"
import {Link} from "react-router-dom";

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
                <Link to="/" className={props.menu==="home"?'active':''}>Home</Link>
                <a href="#about" className={props.menu==="about"?'active':''}>AboutMe</a>
                <a href="#work" className={props.menu==="work"?'active':''}>LatestWork</a>
                <a href="#testimony" className={props.menu==="testimony"?'active':''}>Testimonial</a>
                <Link to="/contactme" className={props.menu==="contact"?'active':''}>ContactMe</Link>
                <a href='#activities' className={props.menu==="activities"?'active':''}>Activities</a>
            </div>
            <div className="social">
            <a target="_blank" href='https://www.linkedin.com/in/seyi-adejugbagbe-2a0512114/'><LinkedIn className='icon' /></a>
                <a target="_blank" href='mailto:seyiadejugbagbe@gmail.com'><Google  className='icon'/></a>
                <a target="_blank" href='https://twitter.com/seyiadejugbagbe?lang=en'><Twitter className='icon' /></a>
            </div>
        </div>
        <div id="mobileMenu" className="mobileMenu">
        <Link to="/" className={props.menu==="home"?'active':''}>Home</Link>
                <a href="#about" className={props.menu==="about"?'active':''}>AboutMe</a>
                <a href="#work" className={props.menu==="work"?'active':''}>LatestWork</a>
                <a href="#testimony" className={props.menu==="testimony"?'active':''}>Testimonial</a>
                <Link to="/contactme" className={props.menu==="contact"?'active':''}>ContactMe</Link>
                <a href='#activities' className={props.menu==="activities"?'active':''}>Activities</a>
        </div>
    </div>
    );
}

export default Header;