
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import SplashScreen from './components/SplashScreen';
import Projects from './components/Projects';
import NewHome from './components/NewHome';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useLocoScroll from './hooks/useLocoScroll';
import Works from './components/Works';


const App = () => {
  const [preloader, setPreloader] = useState(true);
  
  useLocoScroll(!preloader)
  
  const handleTransitionComplete = () => {
    setPreloader(false);
  };

  return (
    <div className="App">
      {preloader ? (
        <SplashScreen onTransitionComplete={handleTransitionComplete}/>
      ) : (
        <>
          <Navbar/>
          <div 
          className="main-container"
          data-scroll-container
          id='main-container'>
            <NewHome/>
            <AboutMe/>
            <Projects/>
            {/* <Works/> */}
            <Contact/>
            <Footer/>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
