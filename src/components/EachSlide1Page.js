import React, { Component } from 'react'
// import project1 from '../assets/project1.png'
// import project2 from '../assets/project2.png'
// import project3 from '../assets/project3.png'
// import project4 from '../assets/project4.png'
// import project5 from '../assets/project5.png'
// import project6 from '../assets/project6.png'
// import project7 from '../assets/project7.png'
// import project8 from '../assets/project8.png'

import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import p4 from '../assets/p4.png'
import p5 from '../assets/p5.png'
import p6 from '../assets/p6.png'
import p7 from '../assets/p7.png'
import p8 from '../assets/p8.png'
import { NavLink } from 'react-router-dom';
import './EachSlideStyles.css'

// const slideImages = [
//     project1, project2, project3, project4, project5, project6, project7, project8];
const slideImages2 = [
     [p1, 'Periodic break Alarm', 'At 50 mins of every hour, a nice alarm tone rings and reminds you to get up and take a break','https://github.com/EventHorizonChinmay/Periodic-Break-Alarm','https://periodic-break-alarms.netlify.app/'] , 
     [p2, 'Temperature Unit Converter', "It's hard to remember the unit converstions for temperature. Here is an app to help you with the same.",'https://github.com/EventHorizonChinmay/Temperature-Unit-Converter','https://chinmays-temperature-converter.netlify.app/'] , 
     [p3, "Random Quote Generator", "Want some food for your brain? Here are some quotes that are randomly picked from a DB using an API.",'https://github.com/EventHorizonChinmay/Random-Quote-Generator','https://chinmays-random-quotes.netlify.app/'] , 
     [p4, 'Notes App', 'Make a note, and make sure that you never forget anything again.','https://github.com/EventHorizonChinmay/Notes-App','https://chinmays-notes-app.netlify.app/'], 
     [p5, 'Feedback UI', "Let me know how you like my work! Here is an app which can help you do the same.",'https://github.com/EventHorizonChinmay/Feedback-UI','https://chinmays-feedback-ui.netlify.app/'] ,
     [p6, 'Dictionary', "A handy dictionary to find the meanings of English words.",'https://github.com/EventHorizonChinmay/Dictionary','https://chinmays-dictionary.netlify.app/'] ,
     [p7,'Random Dad Jokes', "Want to laugh? Here are some dad jokes, which are fetched at random from a DB using an API",'https://github.com/EventHorizonChinmay/Dad-Jokes','https://chinmays-jokes.netlify.app/'], 
     [p8,"Random Anime Characters", "`A` big Anime fan? Can you recognise these random anime characters fetched at random?",'https://github.com/EventHorizonChinmay/Random-Anime-Characters','https://chinmays-random-anime-characters.netlify.app/']]
    // {"imgName":p1,`
    //`     "title": 'Periodic Break Alarm' },
    //     {"imgName": p2,
    //     "title": ''},
    //     {
    //     "imgName": p3,
    //     "title": ''},
    //     {
    //     "imgName": p4,
    //     "title":''},
    //     {
    //     "imgName": p5,
    //     "title": ''},
    //     {
    //     "imgName": p6,
    //     "title": p7, p8}];
        

class EachSlide1Page extends Component{
  render(){
    return (
    <div className="each-slide">
        <div className='slideImage'> 
            <img src={(slideImages2[this.props.projNo][0])} alt='' className='projSS'></img>
        </div>
        <h3 className="project-title"> {slideImages2[this.props.projNo][1]} </h3>
        <div className="proj-details">
            <div className='details'><p>{slideImages2[this.props.projNo][2]}</p></div>
            <div className='proj-btns'>
                <NavLink to={slideImages2[this.props.projNo][4]} className='proj-btn' target="_blank"> View  
                </NavLink>
                <NavLink to={slideImages2[this.props.projNo][3]} className='proj-btn' target="_blank"> Source  
                </NavLink>
            </div> {/* proj-btns*/}
        </div> {/* proj-details*/}
    
          </div> //Bg image 
        // </div> 


  )
}
}
export default EachSlide1Page