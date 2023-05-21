import './HeroImgStyles.css'
import React from 'react'
import IntroImg from '../assets/intro-bg.jpg'
import BgImg from '../assets/bg-img.jpg'
import DP from '../assets/dp.jpg'
import DP2 from '../assets/ChinmayDPcopy.jpg'

import { Link } from 'react-router-dom'


const HeroImg = () => {
  return (
    <div className='hero'>
    <div className='mask'>
        <img className='intro-img' src={BgImg} alt='IntroImg'/>
        
    </div>
    <div className='content' > 
    <img className='dp' id='dp' src={DP2} alt='Chinmay'/>
    <br></br>

    <p> Hi welcome to the portfolio of a </p>
    <h1> React Developer</h1>
    <div> 
        <Link to='/projects' className='btn' >Projects
        </Link>
         <Link to='/contact' className='btn-light'>Contact 
        </Link>
        
    </div>
    </div>
    </div>
  )
}

export default HeroImg
