import React from 'react'
import styled from 'styled-components';
import flag from '../assets/indian-flag.png'
import greenFlame from '../assets/green-flames.mp4'

const AboutMe = () => {
  return (
    <Container data-scroll-section id='about-me'>
      <video 
      muted
      autoPlay
      loop
      src={greenFlame}/>
      <Wrapper>
        <AboutTitle>
          <span>A React Developer</span>
          <span className='second-line'>
            <span>Based</span>
            <img src={flag} alt="indian flag" />
            <span>In India</span>
          </span>
        </AboutTitle>
        <MyDescription>
          Hello! My name is Adith, and I am a React developer with a strong mechanical background. With my unique blend of skills in both mechanical engineering and web development, I bring a fresh perspective and problem-solving approach to building user-friendly and efficient web applications.
          My journey into the world of technology began with my passion for understanding how things work. My curiosity and love for technology led me to explore the fascinating realm of web development. I discovered React, a powerful JavaScript library for building user interfaces, and immediately felt a connection. The ability to create dynamic and interactive web applications using React's component-based architecture captivated me, and I decided to dive deeper into this field.I embarked on a journey to expand my skill set, immersing myself in learning React and its ecosystem. Through online courses, tutorials, and personal projects, I gained hands-on experience in developing responsive and intuitive user interfaces. I became proficient in front-end technologies such as HTML, CSS, and JavaScript, while also mastering modern tools and libraries like Redux, JavaScript, and Next.js.
        </MyDescription>
      </Wrapper>
    </Container>
  )
}

export default AboutMe;

const Container = styled.section`
  min-height:100vh;
  position:relative;
  video{
    position: absolute;
    inset:0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: 1;
  }
  @media screen and (max-width:780px){
    min-height:100vh;
  }
`
const Wrapper = styled.div`
  height: 100%;
  padding: 100px 40px 0px 40px;
  position: relative;
  z-index: 2;
  color: #fff;
  overflow:hidden;
  
  @media screen and (max-width:780px){
    padding: 30px 40px 0px 40px;
  }
`
const AboutTitle = styled.div`
  display:flex;
  flex-direction: column;
  line-height:123px;
  margin-bottom:60px;

  @media screen and (max-width:780px){
    line-height:60px;
    margin-bottom:40px;
  }
  @media screen and (max-width:500px){
    margin-bottom:10px;
  }

  img{
    width:190px;
    margin-top:8px;

    @media screen and (max-width:1000px){
      width:150px;
    }
    @media screen and (max-width:780px){
      width:90px;
    }
    
  }
  span{
    font-family: 'Oswald', sans-serif;
    font-size:120px;
    text-transform:uppercase;

    @media screen and (max-width:1000px){
      font-size:90px;
    }
    @media screen and (max-width:780px){
      font-size:45px;
    }
    @media screen and (max-width:500px){
      font-size:35px;
    }
  }
  .second-line{
    display:flex;
    align-items:center;
  }
`
const MyDescription = styled.p`
  max-width:1200px;
  font-size:20px;
  font-family: 'Roboto', sans-serif;
  line-height:32px;

  @media screen and (max-width:1000px){
    font-size:18px;
    line-height:30px;
  }
  @media screen and (max-width:680px){
    font-size:16px;
    line-height:28px;
  }
  @media screen and (max-width:500px){
    font-size:14px;
    line-height:25px;
  }

`