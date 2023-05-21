// https://www.npmjs.com/package/react-slideshow-image
import React from 'react';
import { Slide } from 'react-slideshow-image';
import './SlidesStyles.css'
import 'react-slideshow-image/dist/styles.css'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import project5 from '../assets/project5.png'
import project6 from '../assets/project6.png'
import project7 from '../assets/project7.png'
import project8 from '../assets/project8.png'

import pR1 from '../assets/pR1.png'
import pR2 from '../assets/pR2.png'
import { NavLink } from 'react-router-dom';
// import EachSlide from './EachSlide1Page';
import EachSlide1Page from './EachSlide1Page';
import EachSlideMultiPage from './EachSlideMultiPage';
const slideImages = [
    project1, project2, project3, project4, project5, project6, project7, project8];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

const Slideshow = (type) => {

    const projNo = 0
    return (
        <div className='slideshow-supercontainer'>
        <div className='slideshow-container'>

      <h3 className='projType'>Single Page Apps</h3>
      <div>
      <Slide {...properties}>

      <EachSlide1Page projNo={3}/>
      <EachSlide1Page projNo={0}/>
      <EachSlide1Page projNo={2}/>
      <EachSlide1Page projNo={4}/>
      <EachSlide1Page projNo={1}/>
      <EachSlide1Page projNo={5}/>
      <EachSlide1Page projNo={6}/>
      <EachSlide1Page projNo={7}/>
    
      </Slide>
    

      {/* else if (type=='multiplePages'){
      <Slide {...properties}>
      
      <EachSlideMultiPage projNo={0}/>
      <EachSlideMultiPage projNo={1}/>
    
      </Slide>
      } */}
      </div>
      </div>
      </div>
    )
}

export default Slideshow