// https://www.npmjs.com/package/react-slideshow-image
import React from 'react';
import { Slide } from 'react-slideshow-image';
import './SlidesStyles.css'
import 'react-slideshow-image/dist/styles.css'
import pR1 from '../assets/pR1.png'
import pR2 from '../assets/pR2.png'
import pR3 from '../assets/pR3.png'
import pR4 from '../assets/pR4.png'
// import pR5 from '../assets/pR5.png'
// import pR6 from '../assets/pR6.png'
// import pR7 from '../assets/pR7.png'
// import pR8 from '../assets/pR8.png'
import { NavLink } from 'react-router-dom';
// import EachSlide from './EachSlide1Page';
import EachSlideMultiPage from './EachSlideMultiPage';
const slideImages = [
    pR1, pR2];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

const SlideshowMultiPg = (type) => {

    const projNo = 0
    return (
        <div className='slideshow-supercontainer'>
        <div className='slideshow-container'>

      <h3 className='projType'>Multiple Page Apps</h3>
      
      <div>
      <Slide {...properties}>        
      <EachSlideMultiPage projNo={0}/>
      <EachSlideMultiPage projNo={1}/>
      <EachSlideMultiPage projNo={2}/>
      <EachSlideMultiPage projNo={3}/>
      {/* <EachSlideMultiPage projNo={2}/>
      <EachSlideMultiPage projNo={4}/>
      <EachSlideMultiPage projNo={1}/>
      <EachSlideMultiPage projNo={5}/>
      <EachSlideMultiPage projNo={6}/>
      <EachSlideMultiPage projNo={7}/> */}
    
      </Slide>
      
      </div>
      </div>
      </div>
    )
}

export default SlideshowMultiPg