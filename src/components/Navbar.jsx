import React, { useState, useRef, useEffect } from 'react'
import "./navbar.css"
import  { gsap } from "gsap";

const Navbar = () => {
  const[navMenu, setNavMenu] =useState(false);
  const tlNav = gsap.timeline();
  let li1= useRef(null)
  let li2= useRef(null)
  let li3= useRef(null)
  let li4= useRef(null)

  const handleClick = () => {
    setNavMenu(!navMenu)
  }

  useEffect(() => {
    tlNav.fromTo([li1, li2, li3, li4],{
      opacity: 0,
      y: "50%"
    },{
      opacity:1,
      y:0,
      delay: 0.2,
      stagger: {
        amount: 0.6,
      }
    })

    return () => {
      tlNav.kill();
    };

  })

  return (
    <section className='nav' data-scroll-section>
        <div className='nav-wrapper'>
            <a className='logo' href=''>
              <span>Karnan .</span>
              <span>developer</span>
            </a>
            <div 
            onClick={handleClick}
            className={`nav-menu ${navMenu ? 'active': ''}`}
            >
                <div className='nav-menu-ham'>
                    <span></span>
                    <span></span>
                </div>
                <span className='nav-menu-text'>
                  {navMenu ? ("close") : ("menu")}
                </span>
            </div>
            <button className='nav-btn'>
              <a href="#contact" data-scroll>Contact</a>
            </button>
        </div>

        <div className={`menu-screen ${navMenu ? 'clipped': ""}`}>
          <li ref={el => li1=el}><a onClick={handleClick} href='#about-me' data-scroll>About</a></li>
          <li ref={el => li2=el}><a onClick={handleClick} href='#projects' data-scroll>Projects</a></li>
          <li ref={el => li3=el}><a onClick={handleClick} href="#contact" data-scroll>Contact</a></li>        
          <div ref={el => li4=el} className='social'>
            <li><a href='https://www.linkedin.com/in/adith-p-a-90ab581b7/' target='blank'>linkedIN</a></li>
            <li className='period'>.</li>
            <li><a href='https://github.com/karnan7' target='blank'> Github</a></li>
          </div>
        </div>
       
    </section>
  )
}

export default Navbar;