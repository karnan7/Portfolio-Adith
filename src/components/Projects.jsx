import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import cn from "classnames";
import useOnScreen from '../hooks/useOnScreen';

gsap.registerPlugin(ScrollTrigger);

const images = [
  {
    src:"https://i.ibb.co/hy8XW5g/Screenshot-2023-06-21-113242.png",
    link:"https://karnan7.github.io/Sorting-Visualizer/",
    title: "Sorting Visualizer",
  },
  {
    src:"https://i.ibb.co/hMGYJnP/Screenshot-2023-06-21-111925.png",
    link:"https://disneyplus-e86d7.web.app/",
    title: "Disney-Plus Clone",
  },
  {
    src:"https://i.ibb.co/R6HTzHN/iphone13.jpg",
    link:"https://iphone13prokarnan.netlify.app/",
    title: "iPhone 13 Pro Website",
  },
  {
    src:"https://i.ibb.co/MBRT3vr/shoppin-cart.jpg",
    link:"https://karnan7.github.io/shopping-cart/",
    title: "E-Commerce ReactJS",
  },
]

function GalleryItem({src, title, link, index, updateActiveImage}){

  const item = useRef(null);
  const onScreen = useOnScreen(item, 0.5);
  useEffect(() => {
    if(onScreen){
      updateActiveImage(index);
    }
  },[onScreen, index])

  return(
    <ItemWrapper className={cn('item-wrapper', {"is-reveal": onScreen})}
    ref={item}>
      <div></div>
      <Item>
        <ItemInfo>
          <h1>{title}</h1>
          <a href={link} target='blank'>Visit</a>
        </ItemInfo>
        <ItemImage className='item-image' style={{backgroundImage: `url(${src})`}} alt=''></ItemImage>
      </Item>
      <div></div>
    </ItemWrapper>
  )
}

const Projects = () => {

  const [activeImage, setActiveImage] = useState(1)
  let triggerRef = useRef(null)

  useEffect(() => {

    setTimeout(() => {
      let sections = gsap.utils.toArray('.item-wrapper')
      gsap.to(sections,{
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger : {
          start: "top top",
          trigger: triggerRef.current,
          scroller: "#main-container",
          pin: true,
          scrub: 0.5,
          snap: 1 / (sections.length - 1),
          end: () => `+=${triggerRef.current.offsetWidth}`,
        }
      })
      ScrollTrigger.refresh();
    })
  }, [])
  
  const handleUpdateActiveImage = (index) => {
    setActiveImage(index + 1);
  }

  return (
    <Container data-scroll-section id='projects'>
      <Gallery ref={triggerRef}>
        <Counter>
          <span>Project {activeImage}</span>
          <span className='divider'></span>
          <span>{images.length}</span>
        </Counter>
        {images.map((image, index) => (
          <GalleryItem
          key={index}
          index={index}
          src={image.src}
          title={image.title}
          link={image.link}
          updateActiveImage={handleUpdateActiveImage}
          />
        ))}
      </Gallery>
    </Container>
  )
}

export default Projects;

const Container = styled.section`

  margin-left: -5vw;
  margin-right: -5vw;
  font-family: 'Roboto', sans-serif;
  background: hsla(214, 82%, 19%, 1);

  background: linear-gradient(90deg, hsla(214, 82%, 19%, 1) 0%, hsla(203, 87%, 3%, 1) 100%);
  
  background: -moz-linear-gradient(90deg, hsla(214, 82%, 19%, 1) 0%, hsla(203, 87%, 3%, 1) 100%);
  
  background: -webkit-linear-gradient(90deg, hsla(214, 82%, 19%, 1) 0%, hsla(203, 87%, 3%, 1) 100%);
  
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#092C59", endColorstr="#01090E", GradientType=1 );
`
const Gallery = styled.div`
  height: 100vh;
  padding: 10vh 0;
  width: 400%;
  display: flex;
  flex-wrap: nowrap;
`
const Counter = styled.div`
  position: absolute;
  top: 15%;
  left: 200px;
  z-index: 1;
  mix-blend-mode: difference;
  line-height: 16px;
  color: #dbd8d6;
  font-weight: 600;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  
  .divider{
    content: "";
    background-color: white;
    width: 6.25vw;
    margin: 7px 10px;
    height: 1px;
    display: inline-block;
  }
`
const ItemWrapper = styled.div`
  aspect-ratio: 16/9;
  height: 100%;
  display: grid;
  grid-template-columns: 20vw 1fr 200px;
  width: 100vw;

  @media screen and (max-width:1300px){
    margin-top:80px;
    grid-template-columns: 5vw 1fr 50px;
  }
  
  &.is-reveal {
    .item-image {
      transform: scale(1);
      filter: none;
    }
  };

`
const Item = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  will-change: transform;
`
const ItemInfo = styled.div`
  position: absolute;
  bottom: 20%;
  z-index: 1;
  transform: translateX(-20%);
  color: #fff;

  @media screen and (max-width:1300px){
    transform: translateX(10%);
  }

  h1{
    line-height: 6vw;
    font-weight: 600;
    color: #66CD16;
    font-size: 4rem;
    text-shadow: #474747 3px 5px 2px;

    @media screen and (max-width:1300px){
      font-size:2rem;
    }
  }
  a{
    font-size: 1.4rem;
    cursor:pointer;
    color: #fff;
    @media screen and (max-width:1300px){
      font-size: 1rem;
    }
  }
`
const ItemImage = styled.img`
  height:100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  transform-origin: center;
  will-change: transform;
  transform: scale(0.7);
  transition: all 1.5s cubic-bezier(0.77, 0, 0.175, 1);
  filter: grayscale(100%) sepia(20%) brightness(80%);

  @media screen and (max-width:1300px){
    height: 80%;
    width:80%;
  }
`
