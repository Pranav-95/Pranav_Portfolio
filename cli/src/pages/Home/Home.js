import React from 'react';
import Fade from 'react-reveal/Fade';
import './home.css';
import Typewriter from 'typewriter-effect';
import Resume from '../../assets/docs/resume.txt';
import {IoIosCall} from 'react-icons/io';
import {HiMail} from 'react-icons/hi';
import {ImLocation2} from 'react-icons/im';






const Home = () => {
 
  return (
    
    <>
      <div className='home-container'id='home'>
      
        <div className='container home-content'>
        <Fade right>

       
        <h2>Hii 🖐️, I am </h2>
        <h1>
        
        <Typewriter
  options={{
    strings: ['Pranav Prajapati ' , 'a MERN Stack Developer !', 'and ','an AI ML enthusiast'],
    autoStart: true,
    loop: true,
    
  }}
/>

        </h1>
        
        </Fade>
        <Fade bottom>
        <div className='home-buttons'>
        <a className='btn btn-hire' href='https://api.whatsapp.com/send?phone=8103965552' rel='noreferrer' target='_blank'>Hire Me</a>
          
          <a className='btn btn-cv' href= {Resume} download="your_name.pdf">My Resume</a>
        </div>
        </Fade>
        <div className='cont'>
        <Fade right>
         <p><IoIosCall/>: 8103965552 | <HiMail/>: pranavprajapati277@gmail.com | <ImLocation2/>: Wagholi,Pune</p>
         
         
        </Fade>

        </div>
        

        </div>
        
      </div>
    
    </>
  )
}



export default Home