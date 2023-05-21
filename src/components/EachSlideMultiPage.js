import React, { Component } from 'react'
// import project1 from '../assets/project1.png'
// import project2 from '../assets/project2.png'
// import project3 from '../assets/project3.png'
// import project4 from '../assets/project4.png'
// import project5 from '../assets/project5.png'
// import project6 from '../assets/project6.png'
// import project7 from '../assets/project7.png'
// import project8 from '../assets/project8.png'

import pR1 from '../assets/pR1.png'
import pR2 from '../assets/pR2.png'
import pR3 from '../assets/pR3.png'
import pR4 from '../assets/pR4.png'
import pR5   from '../assets/pR5.png'
// import pR3 from '../assets/pR3.png'
import { NavLink } from 'react-router-dom';
import './EachSlideStyles.css'

// const slideImages = [
//     project1, project2, project3, project4, project5, project6, project7, project8];
const slideImages2 = [
  [pR4, 'U2b', 'A YouTube clone. User can search for and watch videos with controls, they will also see the real time stats of the views and subscriber counts. ','Source','https://chinmays-u2b.netlify.app/'] ,
  [pR1, 'LISA Black Hole detectabilty', 'For a gravitational waves detector, we predict if certain chosen blackhole would be detectible','https://github.com/EntropySarir/LISA-Black-Holes', 'https://entropysarir.github.io/LISA-Black-Holes/'] ,
      [pR2, 'Generic Social Media', 'A CRUD social media app with "like" feature. Google login is used','Source','View'],
      [pR3, 'My Bike Store', 'Responsive website to add and remove items cycling related items from a cart.','Source','https://my-bike-store.netlify.app/'] ,
      [pR5, 'Portfolio', "Chinmay's portfolio listing a few of my previous projects. The visitor can also send a message using the form in the contact us page which will be received to me on my email.",'Source','https://chinmays-portfolio.netlify.app/'] ,
      [pR4, 'U2b', 'A YouTube clone. User can search for and watch videos with controls, they will also see the real time stats of the views and subscriber counts. ','Source','https://chinmays-u2b.netlify.app/'] ,
      
    ];
      // [IMG, Title, Description, Code, Website]

  class EachSlideMultiPage extends Component{
  render(){
    return (
    <div className="each-slide">
        <div className='slideImage'> 
            <img src={(slideImages2[this.props.projNo][0])} alt='' className='projSS'></img>
        </div>
        <h3 className="project-title"> {slideImages2[this.props.projNo][1]} </h3>
        <div className="proj-details">
            <div className='details'><p> {slideImages2[this.props.projNo][2]}</p></div>
            <div className='proj-btns'>
            <NavLink to={slideImages2[this.props.projNo][4]} className='proj-btn' target="_blank"> View  
                </NavLink>
                {/* <button href='www.google.com' className='proj-btn'> View  
                </button> */}
                {/* <a href='https://www.google.com' type='button' className='btn'></a> */}
                <NavLink to={slideImages2[this.props.projNo][3]}  className='proj-btn' target="_blank"> Source  
                </NavLink>
            </div> {/* proj-btns*/}
        </div> {/* proj-details*/}
    
          </div> //Bg image 
        // </div> 


  )
}
}
export default EachSlideMultiPage