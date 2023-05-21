import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Slideshow from '../components/Slides'
import Form from '../components/Form'
import { PricingCard } from '../components/PricingCard'
import './ContactStyle.css'


const Contact = () => {

  return (
    <div>
    <Navbar/> 
    {/* <h1>{messageSubject}</h1> */}
    <HeroImg2 heading='Contact us' text="Please drop a message to me.  I'll reply at the earliest."/>
    
    <div id='contactform-note-container' >
      {/* <p  id='contactform-note' className='m-auto'> (The following contact form is not linked at the moment)</p> */}
    </div>
    <Form/>
    <Footer/>
    </div>
  )
}

export default Contact