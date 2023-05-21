
import Hero2Img from '../assets/hero-img2.jpg'
import './HeroImg2Styles.css'

import React, { Component } from 'react'

class HeroImg2 extends Component {
    render(){
        return (
            <div className='hero-img'>
                <div className='heading'>
                    <h1> {this.props.heading}</h1>
                    <br></br>
                    <p> {this.props.text}</p>
                    <br/>
                    <p> {this.props.text2}</p>
                </div>
        
        
            </div>
          )
        
    }
}

// const HeroImg2 =(heading, text) =>{
//     return (
//                     <div className='hero-img'>
//                         <div className='heading'>
//                             <h1> {heading}</h1>
//                             <p> {text}</p>
//                         </div>
                
                
//                     </div>
//                   )
// }

export default HeroImg2