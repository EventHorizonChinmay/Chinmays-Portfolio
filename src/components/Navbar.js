import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavbarStyles.css'
import { FaBars, FaTimes } from 'react-icons/fa' 

const Navbar = () => {

    const [isClicked, setClicked] = useState(true)
    const handleClick=()=>{
        setClicked(!isClicked)
    }
    const [colour, setColour] = useState(false)
    const changeColor =()=>{
        window.scrollY >=50? setColour(true): setColour(false)
    }
    window.addEventListener("scroll", changeColor)

  return (
    <div className={colour? 'header header-bg': 'header'}> 
    <Link to='/'> <h1> Chinmay's Portfolio.</h1></Link>

    <ul className={isClicked? 'nav-menu' : 'nav-menu active'}y > 
    <li>
        <Link to='/'> Home </Link>
    </li>
    <li>
        <Link to='/projects'> Projects </Link>
    </li>
    <li>
        <Link to='/about'> About us </Link>
    </li>
    <li>
        <Link to='/contact'> Contact us </Link>
    </li>
    </ul>
    <div className='hamburger' onClick={handleClick}> 
    {!isClicked ? (<FaTimes size={20} style={{color: '#fff'}}/>) : 
    <FaBars size={20} style={{color: '#fff'}}/>}
    </div>
    </div>
  )
}

export default Navbar