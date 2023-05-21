import React from 'react'
import './FooterStyles.css'
import { FaEnvelope, FaFacebook, FaHome, FaLinkedin, FaPhone, FaTwitter } from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            
            <div className='left'>
             <div className='location'>
                <div> 
                    <FaHome size={20} style={{color:'yellow' , marginTop:'4px' , marginRight:'2rem'}}/>
                </div>
                <div>
                    {/* <p style={{marginBottom:'-0.5rem'}}>
                        123, Great Apartments,
                    </p> */}
                    <p style={{marginBottom:'-0.5rem'}}>
                        New Delhi, IN,
                    </p>
                    <p style={{marginBottom:'-0.5rem'}}>
                        Earth Solar System, Milkyway.
                    </p>
                </div>                
             </div>

             <div className='phone'>
                <h4>
                    <FaPhone size={20} style={{color:'yellow', marginRight:'2rem'}}/>
                </h4>
                <div>
                    <p> +91-8080-198-376</p>
                </div>
             </div>
             <div className='email'>
                <h4>
                    <FaEnvelope size={20} style={{color:'yellow', marginRight:'2rem'}}/>
                </h4>
                <div>
                    <p> chinmay.g2022@gmail.com</p>
                </div>
             </div>

                
            </div>
            <div className='right'>
                <h4> About me</h4>
                <p> This is me Chinmay Gandevikar, a frontend developer. I enjoy building websites with my friends like JavaScript, React and Bootstrap. I hope your project ideas become my next challenge! </p>
                <div className='social'>
                <h4>
                <br></br>
                    <FaFacebook size={20} style={{color:'yellow', marginRight:'2rem'}}/>
                    <FaTwitter size={20} style={{color:'yellow', marginRight:'2rem'}}/>
                    <FaLinkedin size={20} style={{color:'yellow', marginRight:'2rem'}}/>
                
                </h4>
             </div>
            
            </div>
        </div>
    </div>
  )
}

export default Footer