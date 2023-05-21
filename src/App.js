import React from 'react';
import './App.css';
import './index.css'
import Home from './routes/Home'
import Contact from './routes/Contact'
import Project from './routes/Project'
import About from './routes/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    // <BrowserRouter>
    <>

    {/* <Navbar/> */}
    
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/projects' element={<Project/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />

        
      </Routes>

    {/* <Footer/> */}
      </>
    //{/* </BrowserRouter> */}
   
  ); {/* <div className="App">
    

    </div> */}
}

export default App;
