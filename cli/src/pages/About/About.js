import React from 'react';
import './About.css';
import Slide from 'react-reveal/Slide';
import pranav from '../../assets/images/pranav.jpg';


const About = () => {
  return (
    <>
    <Slide right>
    <div className='about' id='about'>
        <div className='row'>
            <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img'>
                <img src={pranav} alt='' />
            </div>
            <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content'>
                <h1>About Me</h1>
                <p>
                I am a pre-final year student joyfully
                doing my Engneering in Computer Engneering,
                looking for an opportunity to deeply dive on
                what I have learnt so far, want to get acknowledged 
                with real industrial work and want to explore
                 new things.<br/>
                I am a mern stack web developer(still learning)
                with good knowledge of backend and database.
                Currently I am getting acquaintance with AI&ML since I have 
                developed a great interest on it.
                
                
                
                </p>
            </div>
        </div>
    </div>
    </Slide>
    </>
  )
}

export default About