import React from 'react'
import styled from 'styled-components'


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
  ]


function Works() {
  return (
    <Container id='projects' data-scroll-section>
        <h1>Projects</h1>
        <Content>
            {images.map((image, index) => (
                <Wrap
                key={index}>
                        <img src={image.src} alt="" />
                        <a href={image.link} target='blank'>
                            <h2>{image.title}</h2>
                        </a>
                </Wrap>
            ))}
        </Content>
    </Container>
  )
}

export default Works;

const Container =styled.section`
    min-height:120vh;
    padding: 10px 100px;
    font-family: 'Roboto', sans-serif;

    h1{
        font-size:5rem;
        padding: 30px 0px;
        color: #66CD16;
    }
`
const Content =styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-gap: 35px;

    @media(max-width:1000px){
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    @media(max-width:768px){
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`
const Wrap =styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    img{
        border-radius: 10px;
        overflow: hidden;
        border: 3px solid rgba(249, 249, 249, 0.1);
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
            rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        height: 100%;
        width: 100%;
        object-fit:cover;

        &:hover{
            box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
            rgb(0 0 0 / 72%) 0px 30px 22px -10px;
            transform: scale(1.05);
            border-color:rgba(249, 249, 249, 0.8);
        }
    }
    h2{
        color: white;
    }
`