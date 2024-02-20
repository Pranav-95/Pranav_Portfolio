import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import './Menus.css';
import {FcHome,FcAbout,FcContacts,FcWorkflow,FcManager,FcAddDatabase} from 'react-icons/fc';
import {MdSchool} from 'react-icons/md';
import { Link } from 'react-scroll';
import pp from '../../assets/images/pp.png'

const  Menus = ({toggle}) => {
  return (
    <>
    {toggle ? (<>
    <Zoom>
    <div className='navbar-profile-pic'>
          <img src={pp} alt='profile pic' />

          </div>
    </Zoom>
        <Fade left>
        <div className='nav-items'>
          <div className='nav-item'>
          <div className='nav-link'><Link to='home' spy={true} smooth={true} offset={-100} duration={100}><FcHome/>Home</Link></div>
          <div className='nav-link'><Link to='about' spy={true} smooth={true} offset={-100} duration={100}><FcAbout/>About</Link></div>
          <div className='nav-link'><Link to='education' spy={true} smooth={true} offset={-100} duration={100}><MdSchool/>Education</Link></div>
          <div className='nav-link'><Link to='techstack' spy={true} smooth={true} offset={-100} duration={100}><FcAddDatabase/>Tech Stack</Link></div>
          <div className='nav-link'><Link to='project' spy={true} smooth={true} offset={-100} duration={100}><FcWorkflow/>Projects</Link></div>
          <div className='nav-link'><Link to='work' spy={true} smooth={true} offset={-100} duration={100}><FcManager/>Work Experience</Link></div>
          <div className='nav-link'><Link to='contact' spy={true} smooth={true} offset={-100} duration={100}><FcContacts/>Contact</Link></div>

          </div>
          

          </div>
          </Fade>
          
          
          
          
          </>)
          : (
            <>
            <div className='nav-items'>
          <div className='nav-item'>
          <div className='nav-link'><Link to='home' spy={true} smooth={true} offset={-100} duration={100}title='Home'><FcHome/></Link></div>
          <div className='nav-link'><Link to='about' spy={true} smooth={true} offset={-100} duration={100} title='About'><FcAbout/></Link></div>
          <div className='nav-link'><Link to='education' spy={true} smooth={true} offset={-100} duration={100} title='Education'><MdSchool/></Link></div>
          <div className='nav-link'><Link to='techstack' spy={true} smooth={true} offset={-100} duration={100} title='Tech Stack'><FcAddDatabase/></Link></div>
          <div className='nav-link'><Link to='project' spy={true} smooth={true} offset={-100} duration={100} title='Project'><FcWorkflow/></Link></div>
          <div className='nav-link'><Link to='work' spy={true} smooth={true} offset={-100} duration={100} title='Work Experience'><FcManager/></Link></div>
          <div className='nav-link'><Link to='contact' spy={true} smooth={true} offset={-100} duration={100} title='Contact'><FcContacts/></Link></div>

          </div>


          </div>
          </>

          )}
          



    </>
  )
}

export default Menus;