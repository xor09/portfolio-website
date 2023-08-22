import React from 'react';
import './Achievements.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import  {faFile} from '@fortawesome/free-solid-svg-icons';

const Achievements = () => {
    return (
        <div id="achievements" className='achievements-wrapper'>
            <div className='achievements-section1'>
                <div>Achievements</div>
            </div>
            <div className='achievements-section2'>
                <div className='section'>
                    <a className='leetcode-icon section-sub-icon' href='https://leetcode.com/xor09'></a>
                    <p>I am a Knight (Highest Rating 1941) & globally in top 3%.</p>
                </div>
                <div className='section'>
                    <a className='leetcode-icon section-sub-icon' href='https://leetcode.com/xor09'></a>
                    <p>I am a Knight (Highest Rating 1941) & globally in top 3%.</p>
                </div>
                <div className='section'>
                    <a className='leetcode-icon section-sub-icon' href='https://leetcode.com/xor09'></a>
                    <p>I am a Knight (Highest Rating 1941) & globally in top 3%.</p>
                </div>
                <div className='section'>
                    <a className='leetcode-icon section-sub-icon' href='https://leetcode.com/xor09'></a>
                    <p>I am a Knight (Highest Rating 1941) & globally in top 3%.</p>
                </div>
            </div>
        </div>
    );
}

export default Achievements;
