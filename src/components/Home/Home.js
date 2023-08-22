import React from 'react';
import myImage from '../../Images/1678163379151-PhotoRoom.png';
import './Home.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import  {faFile} from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <div id='home' className='home-wrapper'>
            <div className='home-section1'>
                <img className='my-image' src={myImage} />
            </div>
            <div className='home-section2'>
                <span className='intro-text1'>Hello 👋</span>
                <span className='intro-text2'>I Am Bishal Suvechha</span>
                <span className='intro-text3'>I am a competitive programmer and a web developer</span>
                <a className='intro-button' href='https://drive.google.com/file/d/1jMRtYmqPhVZA48CxkdWX5aA5ZO7p4CvA/view?usp=share_link'>Resume <FontAwesomeIcon icon={faFile} /></a>
                <div className='home-icons'>
                    <a className='linkedin-icon home-sub-icon' href='https://www.linkedin.com/in/suvechha-bishal/'></a>
                    <a className='github-icon home-sub-icon' href='https://github.com/xor09'></a>
                    <a className='leetcode-icon home-sub-icon' href='https://leetcode.com/xor09'></a>
                    <a className='gfg-icon home-sub-icon' href='https://auth.geeksforgeeks.org/user/xor09/practice'></a>
                </div>
            </div>
        </div>
    );
}

export default Home;
