import React, {useState} from 'react';
import './MobileNav.css'
import {AiOutlineMenuUnfold, AiOutlineMenuFold} from 'react-icons/ai';
import {FcHome,FcAbout} from 'react-icons/fc';
import {MdSchool} from 'react-icons/md';
import { Link } from 'react-scroll';




const MobileNav = () => {
    const [open , setOpen]=useState(false)
    //handle open
    const handleOpen= ()=>{
        setOpen(!open);
    };

    //handle menu click
    const handleMenuClick=()=>{
        setOpen(false);
    }
  return (

    <>
    <div className='mobile-nav'>
    <div className='mobile-nav-header'>
    {open ?  (<AiOutlineMenuFold size={25} className='mobile-nav-icon' onClick={handleOpen}/>) : (<AiOutlineMenuUnfold size={25} className='mobile-nav-icon' onClick={handleOpen}/>)}
    
    <span className='mobile-nav-title'>
        Pranav Prajapati
    </span>
    </div>
    <div className='line' />
    {open &&(
        <div className='mobile-nav-menu'>
          <div className='nav-items'>
          <div className='nav-item'>
          <div className='nav-link'><Link to='home' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}><FcHome/>Home</Link></div>
          <div className='nav-link'><Link to='about' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}><FcAbout/>About</Link></div>
          <div className='nav-link'><Link to='education' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}><MdSchool/>Education</Link></div>
          <div className='nav-link'><Link to='techstack' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}><FcHome/>Tech Stack</Link></div>
          <div className='nav-link'><Link to='project' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}><FcHome/>Projects</Link></div>
          <div className='nav-link'><Link to='work' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}><FcHome/>Work Experience</Link></div>
          <div className='nav-link'><Link to='contact' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}><FcHome/>Contact Me</Link></div>
          </div>
          </div>
    </div>

    )}

   
    


    </div>
    </>
  )
}

export default MobileNav