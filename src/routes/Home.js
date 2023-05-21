import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg from '../components/HeroImg'
import Footer from '../components/Footer'
import WorkCards from '../components/WorkCards'


const Home = () => {
  return (
    <div> 

    <Navbar/>
    <HeroImg/>
    <div className='projects-list' style={{'background-color':'rgba(10,10,10,1)', 'text-align':'center', 'color':'white'}}> <h2><br/>Project Previews</h2>
    <WorkCards/></div>
    <Footer/>
    </div>
  )
}

export default Home