import { Link } from 'react-router-dom'
import './AboutContentStyles.css'
import React from 'react'
import React1 from '../assets/react1.png'
import React2 from '../assets/react2.jpg'
import React3 from '../assets/react3.webp'
import React4 from '../assets/react4.jpg'
import resumeImg from '../assets/resume-img.jpg'


import SinglePagePDFViewer from "./single-page";

import { Document, Page } from 'react-pdf';
import resume from '../assets/resume.pdf'

const AboutContent = () => {
  return (
    <div className='Daddy-about' id='Daddy-about'>
        <div className='about' id='about'>
            <div className='left'>
                <h1> Who am I?</h1>
                <p id='WhoAmI'> I am a react front-end developer. I create responsive secure websites at affordable rates.</p>
                <p> I graduated a dual degree program from BITS Pilani in 2020 with honours in both. My first degree is an integrated MSc in Physics and the second one is a BE in Mechanical Engineering. 
                I have fallen in love with programming, solving problems and creating creative products by myself. This motivates me to become a developer. 
                Apart from developing, I enjoy a hiking, reading, cycling and astrophysics.  
                </p>

                <p>
                    Now that you somewhat know me, pl feel free to drop me a message so that I can learn more about you and your requirements. 
                </p>
                <Link to='/contact'> <button className='btn'> 
                    Contact
                </button></Link>
            </div>
            <div className='right'>
                <div className='image-container'>
                    <div className='image-stack top'> 
                        <img src={React2} className='img' alt='true'/>
                    </div>
                    <div className='image-stack bottom'> 
                        <img src={React4} className='img' alt='true'/>
                    </div>
                </div>
                
            </div>
        </div>
        <div className='resume'> 
            <h2 style={{color:'white'}}> My Resume</h2>
            <img src={resumeImg} alt='true' ></img>

        {/* <SinglePagePDFViewer pdf={resume} /> */}
        </div>
        {/* <Document file={resume}>
            <Page pageNumber={1}/>
        </Document> */}
    </div>
  )
}

export default AboutContent