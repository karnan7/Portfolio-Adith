import React from 'react'
import styled from 'styled-components';
import { FaTwitter, FaLinkedinIn, FaGithub, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <FooterSection data-scroll-section>
        <Links>
            <Logo>Karnan</Logo>
            <Wrap>
                <Info>
                    <li><a href="tel:+91 8593805232">+91 8593805232</a></li>
                    <li><a href="mailto:adithkayalad@gmail.com">adithkayalad@gmail.com</a></li>
                </Info>
                <ul>
                    <li><a href="#home" data-scroll>Home</a></li>
                    <li><a href="#about-me" data-scroll>About</a></li>
                    <li><a href="#projects" data-scroll>Projects</a></li>
                    <li><a href="#contact" data-scroll>Contact</a></li>
                </ul>
            </Wrap>
        </Links>
        <Socials>
            <li className='social-logo'><a href="https://www.linkedin.com/in/adith-p-a-90ab581b7/" target='blank'><FaLinkedinIn/></a></li>
            <li className='social-logo'><a href="https://github.com/karnan7" target='blank'><FaGithub/></a></li>
            <li className='social-logo'><a href="https://twitter.com/AKayalad" target='blank'><FaTwitter/></a></li>
            <li className='social-logo'><a href="https://www.youtube.com/channel/UC23JOpS6ox5gZWlNoEC44dg" target='blank'><FaYoutube/></a></li>
        </Socials>
    </FooterSection>
  )
}

export default Footer;

const FooterSection = styled.section`
    background:#061D3B;
    padding: 0rem 5rem 0rem 5rem;
    font-family: 'Roboto', sans-serif;
`
const Links = styled.div`
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 1rem 5rem;
    border-bottom: 2px solid white;

    @media screen and (max-width:600px){
        flex-direction:column;
        align-items: center;
        gap: 3rem;
    }

    ul li{
        list-style-type: none;
        margin-bottom: 0.5rem;
        cursor: pointer;
    }
    ul li a{
        text-decoration: none;
        color: #fff;
        letter-spacing:1px;
        transition: 100ms ease-in-out;

        &:hover{
            color: #66CD16;
        }
    }
`
const Wrap = styled.div`
    display: flex;
    font-weight:100;
    gap: 2rem;
    align-items: flex-end;
`
const Info = styled.ul`
    text-align: end;
`
const Logo = styled.h1`
    text-transform: uppercase;
    font-size:2rem;
`
const Socials = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    gap: 1rem;

    li{
        list-style-type: none;
        border: 1px solid white;
        border-radius:50%;
        padding: 0.5rem;
        opacity: 0.6;
        transition: 100ms ease-in-out;

        &:hover{
            background:#66CD16;
            opacity: 1;
        }
    }
    li a{
        color: #fff;
        display: grid;
        place-content: center;
    }
`


{/* <ul>
<li><ScrollLink to='home' smooth={true} duration={500}>Home</ScrollLink></li>
<li><ScrollLink to='about' smooth={true} offset={-50} duration={500}>About</ScrollLink></li>
<li><ScrollLink to='contact' smooth={true} offset={-50} duration={500}>Contact</ScrollLink></li>
</ul> */}