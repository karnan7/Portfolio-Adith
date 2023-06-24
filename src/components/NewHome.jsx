import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import hero from "../assets/adith.png"
import { CgMouse, CgArrowLongDown } from 'react-icons/cg'
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NewHome = () => {

  let right = useRef(null)
  let title = useRef(null);
  let hello = useRef(null);
  let step = useRef(null);
  
  

  useEffect(() => {
    const tlHero = gsap.timeline();
    
    tlHero.fromTo(right,{
      y: "100%",
    }, 
    {
      duration: 1,
      y: 0,
    })

    tlHero.to(title,{opacity:1, scale:1, duration:2.5, ease: "elastic.out(1.5,1)" },"<10%")
    tlHero.fromTo(hello, { opacity:0, y:50 }, { opacity: 1, y:0}, "<20%")
    tlHero.fromTo(step,{ x: -30, opacity:0 }, { x: 0, opacity:1 },"<")

    return () => {
      tlHero.kill();
    }
  },[])

  return (
    <Container data-scroll-section id='home'>
        <LeftSection>
          <Description>
            <h2 ref={el => hello = el}>Hello <span>World !</span></h2>
            <p ref={el => step = el}>Step into the world of web development with <span>me</span></p>
            <Scroll>
              <CgMouse style={{fontSize: "40px"}}/>
              <CgArrowLongDown color='white'/>
              <span>scroll</span>
            </Scroll>
          </Description>
        </LeftSection>
        <RightSection>
          <Title ref={el => title = el}>ADITH</Title>
          <HeroImage ref={el => right = el} src={hero} alt=''/>
        </RightSection>   
    </Container>
  )
}

export default NewHome;

const Container = styled.section`
  height: 100vh;
  width: 100%;
  background-color: #000;
  position: relative;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 60px;

  @media (max-width: 1250px) {
    flex-direction: column;
  }
  @media (max-width: 780px) {
    padding: 0px 5px;
    justify-content: space-around;
  }
`
const LeftSection = styled.div`
  height: 100%;
  padding: 0px 200px;
  @media (max-width: 2600px) {
    padding: 0px 150px;
  }
  @media (max-width: 1250px) {
    padding: 0px 10px;
  }
`
const Description = styled.div`
  position: absolute;
  top: 30%;
  font-family: 'Roboto', sans-serif;
  z-index:2;
  margin-top:10px;
    h2{
      font-size: 50px;
      letter-spacing:2px;
      text-transform: uppercase;
    }
    span{
      color:#8FFF00;
    }
    p{
      margin-top:10px;
      font-size: 15px;
      width:450px;
      letter-spacing:5px;
      text-transform: uppercase;
    }
    @media (max-width: 1250px){
      left: 50%;
      transform: translate(-50%, -20%);
    }
    @media (max-width: 500px){
      text-align: center;
      h2{
        font-size: 35px;
      }
      p{
        font-size:10px;
        width:400px;
      }
    }
    @media (max-width: 400px){
      h2{
        font-size: 30px;
      }
      p{
        width:300px;
      }
    }
`
const Scroll = styled.div`
  margin-top: 50%;
  font-size:25px;
  display : flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  span{
    font-size:14px;
  }
  @media (max-width: 1250px){
    display: none;
  }
`
const RightSection = styled.div`
  height: 100%;
`
const HeroImage = styled.img`
  position: absolute;
  bottom:0;
  right: 5%;
  width:600px;
  height:950px;
  @media (max-width:1400px){
    width:450px;
    height:750px;
  }
  @media (max-width: 780px) {
    width:350px;
    height:550px;
  }
`
const Title = styled.h1`
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 130px;
  font-weight: 900;
  letter-spacing:55px;
  color: transparent;
  -webkit-text-stroke: 1px #fff;
  position: absolute;
  top: 50%;
  left: 45%;
  z-index: 9;
  scale: 1.5;

  @media (max-width: 1250px) {
    font-size: 120px;
  }
  @media (max-width: 1050px) {
    font-size:110px;
    left: 7%;
  }
  @media (max-width: 780px) {
    font-size:100px;
    letter-spacing:45px;
    top: 70%;
  }
  @media (max-width: 500px) {
    font-size:60px;
    letter-spacing:40px;
    left: 13%;
  }
  @media (max-width: 400px){
    font-size:52px;
    letter-spacing:35px;
  }
  @media (max-width: 360px){
    left: 5%;
  }
`