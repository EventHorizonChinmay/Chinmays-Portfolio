import { Link } from 'react-router-dom'
import './PricingCardStyles.css'
import React, { useState } from 'react'



const PricingCard = () => {

    const [messageSubject, setMessageSubject]= useState('')
    const subjectBasic= ()=>{
        setMessageSubject('Basic: Pl tell me more')
    }
    const subjectPremium= ()=>{
        setMessageSubject('Premium: Pl tell me more')
    }
    const subjectBusiness= ()=>{
        setMessageSubject('Business: Pl tell me more')
    }
    const subjectConsultation= ()=>{
        setMessageSubject('Consulation: Pl tell me more')
    }
    return (
    <div className='pricing'>
    <h2> Our Services</h2>
    <h3> We use the latest in the market techniques like <span style={{'color':'yellow'}}> ReactJS</span>, <span style={{'color':'yellow'}}>Typescript</span>, <span style={{'color':'yellow'}}>Firebase</span>,  <span style={{'color':'yellow'}}>Bootstrap</span>,  <span style={{'color':'yellow'}}>TailwindCSS </span>
    {/* ,  <span style={{'color':'yellow'}}>RapidAPI</span>  */}
    
    ,  <span style={{'color':'yellow'}}>Material UI</span> etc to build awesome websites. </h3> 
    <h3> Let us assist you in making a beautiful website that catches everyone's attention! 
    </h3>
    <h3>We have several offers for the same wherein we can build the entire website for you or even improve on the previous version of your website. Following are some packages that we offer, pl feel free to drop a message and opt for our service preferably via email.</h3>
    <br/><br/><br/>    
        <div className='card-container'>

        <div className='card'>
                <h3> -Basic-</h3>
                <span className='bar'></span>
                <p className='btc'> $80 </p>
                <p>-2 Days-</p>
                <p>-2 Pages-</p>
                <p>-Featured-</p>
                <p> -Responsive Designs- </p>
                <p> -Up to 2 updates within 1 month-</p>
                <Link to={"/contact"} className='btn' onClick={subjectBasic}> Purchase Now</Link>
            </div>
            <div className='card'>
                <h3> -Premium-</h3>
                <span className='bar'></span>
                <p className='btc'> $150 </p>
                <p>-4 Days-</p>
                <p>-5 Pages-</p>
                <p>-Featured-</p>
                <p> -Responsive Designs- </p>
                <p> -Up to 3 updates within 1 month-</p>
                <Link to={"/contact"} className='btn' onClick={subjectPremium}> Purchase Now</Link>
            </div>
            <div className='card'>
                <h3> -Business-</h3>
                <span className='bar'></span>
                <p className='btc'> $300 </p>
                <p>-6 Days-</p>
                <p>-8 Pages-</p>
                <p>-Featured-</p>
                <p> -Responsive Designs- </p>
                <p> -Up to 4 updates within 1 month-</p>
                <Link to={"/contact"} className='btn' onClick={subjectBusiness}> Purchase Now</Link>
            </div>
            <div className='card'>
                <h3> -Consultation-</h3>
                <span  className='bar'></span>
                <p className='btc'> $50 </p>
                <p>-2 Days-</p>
                <p>-2 Features-</p>
                <p>-Featured-</p>
                <p> -Responsive Designs- </p>
                <p> -Up to 2 updates within 2 weeks-</p>
                <Link to={"/contact"} className='btn' onClick={subjectConsultation}>  Purchase Now</Link>
            </div>
        
        </div>
    </div>
  )
}

export default PricingCard