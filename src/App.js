
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import SplashScreen from './components/SplashScreen';
import Projects from './components/Projects';
import NewHome from './components/NewHome';
import Contact from './components/Contact';
import useLocoScroll from './hooks/useLocoScroll';
import Footer from './components/Footer';




function App() {
  const [preloader, setPreloader] = useState(true);
  
  useLocoScroll(!preloader)
  
  const handleTransitionComplete = () => {
    setPreloader(false);
  };

  return (
    <div className="App" data-scroll-container>
      {preloader ? (
        <SplashScreen onTransitionComplete={handleTransitionComplete}/>
      ) : (
        <>
          <Navbar/>
          <div id='main-container'>
            <NewHome/>
            <AboutMe/>
            <Projects/>
            <Contact/>
            <Footer/>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
