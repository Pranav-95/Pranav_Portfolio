import React,{useState} from 'react'
import {  toast } from 'react-toastify';
import axios from 'axios';
import './Contact.css'
import {AiFillLinkedin ,AiFillGithub ,AiOutlineTwitter} from 'react-icons/ai'
import {BiLogoWhatsappSquare} from 'react-icons/bi'
import Fade from 'react-reveal/Fade';
import Tada from 'react-reveal/Tada';
import contact from '../../assets/images/contact.jpg';





const Contact = () => {
  const[name,setName]= useState("");
  const[email,setEmail]= useState("");
  const[msg,setMsg]= useState("");

  //handle submit button
  const handleSubmit =  async(e)=>{
    e.preventDefault()
    try {
      if(!name||!email||!msg){
        toast.error('Please provide all fields!')
      }const res = await axios.post('/api/v1/portfolio/sendMail',{name,email,msg});
      ///validation on success
      if(res.data.success){
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setMsg("");
      }else{
        toast.error(res.data.message);
      }
      
    } catch (error) {
      console.log(error)
      
    }
  }
  
  return (
    <> 
    <Fade right>
    <div className='contact' id='contact'>
    <div className='card card0 border'>
      <div className='row'>
        <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
        <div className='card1'>
          <div className='row border-line'>
          <Tada>
          <img className='image' src={contact} alt='contact' />
          </Tada>
          </div>
        </div>

        </div>
        <div className=' col-lg-6 col-md-6'>
        <div className='card2 d-flex card border-0 px-4 py-5'>
        <div className='row'>
        <div className='row'>
        <h6>
              Contact with 
              <a href='https://www.linkedin.com/in/pranav95?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><AiFillLinkedin color='blue' size = "30" className='mp-2' /></a>
              <a href='https://github.com/Pranav-95'><AiFillGithub color='black' size = "30" className='mp-2' /></a>
              <a href='https://api.whatsapp.com/send?phone=8103965552'><BiLogoWhatsappSquare color='green' size = "30" className='mp-2' /></a>
              

            </h6>

        </div>
            
          
          <div className='row  mb-4'>
          <div className='line' />
            <small className='or text-center'>OR</small>
          <div className='line' />
         

          </div>
          <div className='row px-3'>
            <input type='text' name = "name" placeholder='Enter your name' className='mb-3' value={name} onChange={(e)=>setName(e.target.value)} />
          </div>
          <div className='row px-3'>
            <input type='email' name = "email" placeholder='Enter your email' className='mb-3' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className='row px-3'>
            <textarea type='text' name = "msg" placeholder='write your message' className='mb-3' value={msg} onChange={(e)=>setMsg(e.target.value)}/>
          </div>
          <div className='row px-3'>
            <button  className='button' onClick={handleSubmit}>Send</button> 
          </div>

        </div>

          
        </div>
        </div>
      </div>
    </div>
    </div>
</Fade>
    
    </>
  )
}

export default Contact