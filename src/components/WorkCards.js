import "./WorkCardsStyles.css"
import project1 from "../assets/project1.png"
import React from 'react'
import { NavLink } from "react-router-dom"
import EachSlide from "./EachSlide1Page"
import Slideshow from "./Slides"
import SlideshowMultiPg from "./MultiPageSlides"

import { Slide } from "react-slideshow-image"

const WorkCards = () => {
    
  return (
    <div className="PageArea">
    <div className="work-container">

    <Slideshow type='singlePage'/>
    <SlideshowMultiPg type='multiplePages'/>
    
    </div></div>
  )
}

export default WorkCards



// <h1 className="project-heading"> Projects</h1>
// <div className="project-container">


//     <div className="project-card">
//         <img src={project1} alt="image"/>
//         <h2 className="project-title"> Title</h2>
//         <div className="proj-details">
//             <p>Details details</p>
//             <div className='proj-btns'>
//                 <NavLink to='google.com' className='btn'> View  
//                 </NavLink>
//                 <NavLink to='google.com' className='btn'> Source  
//                 </NavLink>
//             </div>
//         </div>
//     </div>
// </div>