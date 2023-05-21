import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero2Img from '../assets/hero-img2.jpg'
import HeroImg2 from '../components/HeroImg2'
import PricingCard from '../components/PricingCard'
import WorkCards from '../components/WorkCards'
import Slideshow from '../components/Slides'

const Project = () => {
  return (
    <div>
    <Navbar/>
    <HeroImg2 heading='Projects.' text='Some of my recent works and possible projects with you.'/>
    
    <WorkCards/>
    <PricingCard />
    {/* Simple cards */}
    <Footer/>
    </div>
  )
}

export default Project