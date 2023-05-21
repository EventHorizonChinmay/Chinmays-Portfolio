import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <div>
    <Navbar/>
    <HeroImg2 heading='About us' text='Hi visitor, I am Chinmay. I am a website developer with focus on frontend development.'/>
    

    <AboutContent/>
    <Footer/>
    </div>
  )
}

export default About