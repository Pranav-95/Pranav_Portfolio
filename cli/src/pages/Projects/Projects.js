import React from 'react'
import './Projects.css'
import Fade from 'react-reveal/Fade';
import blog from '../../assets/images/blog.png';
import secret from '../../assets/images/secret.png';
import game from '../../assets/images/game.png';
import portfolio from '../../assets/images/portfolio.png';
import chat from '../../assets/images/chat.png';

const Projects = () => {
  return (
    <>
        <div className='continer project' id='project'>
        <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
            Projects
        </h2>
        <hr/>
        <p className='pb-3  text-center'>
            👉 Here are my projects with live link and source code.
        </p>
        <Fade left>
        <div className='row' id='ads'>
            <div className='col-md-4 mt-4'>
                <div className='card rounded'>
                    <div className='card-image'>
                        <span className='card-notify-badge'>Web App</span>
                        <img src={blog} alt='project1'/>
                    </div>
                    <div className='card-image-overlay m-auto mt-3'>
                        <span className='card-detail-badge'>Node</span>
                        <span className='card-detail-badge'>Expres</span>
                        <span className='card-detail-badge'>MongoDB</span>
                        
                    </div>
                    <div className='card-body text-center'>
                        <div className='ad-title m-auto'>
                            <h5 className='text-uppercase'>Blogs Writing</h5>
                        </div>
                        <a className= 'ad-btn' href=''>View</a>
                    </div>
                </div>
            </div>
            <div className='col-md-4 mt-4'>
                <div className='card rounded'>
                    <div className='card-image'>
                        <span className='card-notify-badge'>Web App</span>
                        <img src={secret} alt='project1'/>
                    </div>
                    <div className='card-image-overlay m-auto mt-3'>
                        <span className='card-detail-badge'>Node</span>
                        <span className='card-detail-badge'>Expres</span>
                        <span className='card-detail-badge'>MongoDB</span>
                        
                    </div>
                    <div className='card-body text-center'>
                        <div className='ad-title m-auto'>
                            <h5 className='text-uppercase'>Share Secrets</h5>
                        </div>
                        <a className= 'ad-btn' href=''>View</a>
                    </div>
                </div>
            </div>
            <div className='col-md-4 mt-4'>
                <div className='card rounded'>
                    <div className='card-image'>
                        <span className='card-notify-badge'>Web App</span>
                        <img src={portfolio} alt='project1'/>
                    </div>
                    <div className='card-image-overlay m-auto mt-3'>
                        <span className='card-detail-badge'>Node</span>
                        <span className='card-detail-badge'>Expres</span>
                        <span className='card-detail-badge'>React</span>
                        
                        
                    </div>
                    <div className='card-body text-center'>
                        <div className='ad-title m-auto'>
                            <h5 className='text-uppercase'>My Portfolio</h5>
                        </div>
                        <a className= 'ad-btn' href=''>View</a>
                    </div>
                </div>
            </div>
            <div className='col-md-4 mt-4'>
                <div className='card rounded'>
                    <div className='card-image'>
                        <span className='card-notify-badge'>Game</span>
                        <img src={game} alt='project1'/>
                    </div>
                    <div className='card-image-overlay m-auto mt-3'>
                        <span className='card-detail-badge'>HTML</span>
                        <span className='card-detail-badge'>CSS</span>
                        <span className='card-detail-badge'>Java Script</span>

                        
                        
                    </div>
                    <div className='card-body text-center'>
                        <div className='ad-title m-auto'>
                            <h5 className='text-uppercase'>Test Your Memory</h5>
                        </div>
                        <a className= 'ad-btn' href=''>View</a>
                    </div>
                </div>
            </div>
            
            <div className='col-md-4 mt-4'>
                <div className='card rounded'>
                    <div className='card-image'>
                        <span className='card-notify-badge'>Java</span>
                        <img src={chat} alt='project1'/>
                    </div>
                    <div className='card-image-overlay m-auto mt-3'>
                        <span className='card-detail-badge'>Java programming</span>
                        
                        
                    </div>
                    <div className='card-body text-center'>
                        <div className='ad-title m-auto'>
                            <h5 className='text-uppercase'>Chats</h5>
                        </div>
                        <a className= 'ad-btn' href=''>View</a>
                    </div>
                </div>
            </div>
        </div>
        </Fade>
        </div>
    </>
  )
}

export default Projects