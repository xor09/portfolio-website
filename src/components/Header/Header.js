import React from 'react';
import './Header.css';
import {Link} from 'react-scroll'

const Header = () => {
    return (
        <div className='Header-wrapper'>
            <div className='section1'>
                <p className='header-title'>Portfolio</p>
            </div>
            <div className='section2'>
                <span class="sub-section" ><Link  to="contact" spy={true} smooth={true}> Contact </Link></span>
                <span class="sub-section" ><Link  to="achievements" spy={true} smooth={true}> Achievements </Link></span>
                <span class="sub-section" ><Link  to="projects" spy={true} smooth={true}> Projects </Link></span>
                <span class="sub-section" ><Link  to="about" spy={true} smooth={true}> About </Link></span> 
                <span class="sub-section" ><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></span>
            </div>
        </div>
    );
}

export default Header;
