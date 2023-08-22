import React from 'react';
import './About.css'

const About = () => {
    return (
        <div id='about' className='about-wrapper'>
            <div className='about-section1'>
                <div>About Me !</div>
            </div>
            <div className='about-section2'>
                <div className='about-section2-background-img'> </div>
                <div className='about-section2-text'><p>I am a competitive programmer, who loves to solve problems using C++. 
                    Firm grasp of Data Structures and Algorithms.
                    <br/>
                    I love to build websites using different frameworks and technical stacks. 
                    Like participating in different cultural programs and hackathons.
                    <br/>
                    I have solved more than 1500+ questions on different platform like leetcode, GeeksForGeeks, etc.
                    I an currently a knight at leetcode with max rating (1947).
                    </p>

                    
                </div> 
                {/* <div className='about-section2-text'>
                    I love to build websites using different frameworks and technical stacks. 
                    Like participating in different cultural programs and hackathons.
                </div>
                <div className='about-section2-text'>
                    I have solved more than 1500+ questions on different platform like leetcode, GeeksForGeeks, etc.
                    I an currently a knight at leetcode with max rating (1947).
                </div> */}
            </div>
        </div>
    );
}

export default About;
