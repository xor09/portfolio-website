import React from 'react';
import Card from '../Card/Card';
import './Projects.css'
import image1 from '../../Images/the-house-of-movies-image.png'
import image2 from '../../Images/chat-room-image.png'
import image3 from '../../Images/care-touch-image.png'

const Projects = () => {
    return (
        <div id='projects' className='projects-wrapper'>
            <div className='projects-section1'>
                <div>Projects</div>
            </div>
            <div className='projects-section2'>
                <div className='projects-section2-card'>
                    <Card 
                        image={image1}
                        title = {"The House of Movies"}
                        description = {"The House of Movies is a responsive website where you can get detailed information and ratings on movies and web series. You can watch trailer, search for movies, tv shows, web series, and also get recommendations based on your search."}
                        source={"https://xor09.github.io/thehouseofmovies/#/"}
                    />
                </div>
                <div className='projects-section2-card'>
                    <Card
                        image={image2}
                        title = {"Chat Room"}
                        description={"Chat Room is a responsive website where users can group chat in realtime. Users need to simply enter his/her name and room id to start chatting."}
                        source={"https://github.com/xor09/chat-room"}
                    />
                </div>
                <div className='projects-section2-card'>
                    <Card
                        image={image3}
                        title={"Care Touch"}
                        description={"Web app was based over health care services, with real-time crud operation and completely authenticated."}
                        source={"https://github.com/xor09/care-touch"}
                    />
                </div>
            </div>
        </div>
    );
} 


export default Projects;
