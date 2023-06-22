import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import character from "../assets/character 1.svg"
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef(null);
    const [submit, setSubmit] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_koz5zk5', 'template_pa1f2o7', form.current, 'k0HZCGMJkf5Zk3VZu')

        setSubmit(true)
      };
  return (
    <Container data-scroll-section id='contact'>
        <Form 
        id='form'
        ref={form}
        onSubmit={sendEmail}>
            {!submit? (
                <>
                <ContactLeft>
                    <h1>Let's Connect</h1>
                    <p>I would love to connect and discuss how I can contribute to your projects</p>
                </ContactLeft>
                <ContactRight>
                    <InputContainer>
                        <input 
                        type="text" 
                        name='names'
                        placeholder='Your Name'
                        autoComplete='off'
                        required/>
                    </InputContainer>
                    <InputContainer>
                        <input 
                        type="email" 
                        name='email'
                        placeholder='Your Email'
                        autoComplete='off'
                        required/>
                    </InputContainer>
                    <InputContainer>
                        <textarea
                         placeholder='Message' 
                         name="message" 
                         className='text-area' 
                         id="form"                   
                         required />
                    </InputContainer>
                    <Button>Send</Button>
                </ContactRight>
            </>
            ):(
                <div className='submitted'>
                    <p>Thanks for the Message <br/>You will hear from me soon</p>
                </div>
            ) }
            <img src={character} alt='' className={submit ? "submitted-image" : "image"}/>
        </Form>
    </Container>
  )
}

export default Contact;

const Container = styled.section`
    min-height:100vh;
    display: flex;
    align-items: center;
    padding: 0px 200px;
    font-family:'Poppins', sans-serif;
    background: #051933;

    @media screen and (max-width:1300px){
        padding: 0px 100px;
        align-items: start;
        justify-content: center;
    }
`
const Form = styled.form`
    min-height: 70vh;
    width: 63vw;
    display: flex;
    gap: 15px;
    border-bottom: 1px solid white;
    padding-bottom:3rem;
    color: #777474;
    position: relative;

    .image{
        position: absolute;
        bottom: 0;
        left: 0;
        transform: scale(0.7) translate(0%, 30%);
        transform-origin: bottom;
        transition: transform 500ms ease-out;

        @media screen and (max-width:1300px){
            left: 40%;
            transform: scale(0.4) translate(0%, 30%)
        }
    }
    .submitted-image{
        transform: scale(1.5) translate(0%);
        transition: transform 500ms ease-out;

        @media screen and (max-width:1300px){
            transform: scale(1) translate(0%, 30%)
        }
    }
    .submitted{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 1.5rem;
        text-align: center;
        pointer-events: none;

        @media screen and (max-width:1300px){
            top: 30%;
            font-size: 1rem;
        }
    }
    @media screen and (max-width:1300px){
        width:90vw;
        height:80vh;
        padding:8rem 3rem;
        flex-direction: column;
        border: none;
    }
`
const ContactLeft = styled.div`
    h1{
        color: #66CD16;
        font-size:7rem;
        width: 90%;
        line-height:100px;

        @media screen and (max-width:1300px){
            width: 100%;
            font-size: 5rem;
            line-height: 40px;
        }
        @media screen and (max-width:900px){
            font-size: 3rem;
        }
    }
    p{
        margin-top: 40px;
        width: 15rem;
        @media screen and (max-width:1300px){
            margin-top: 30px;
            width: 100%;
        }
    }
`
const ContactRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 15px;

    @media screen and (max-width:1300px){
        width: 100%;
    }
`
const InputContainer = styled.div`
    input{
        width: 100%;
        height: 100%;
        border: none;
        outline:none;
        color: #777474;
        font-size: 1.1rem;
        background-color: #051933;
        border-bottom: 1px solid #fff;
        padding: 1rem;
    }
    input::placeholder{
        font-size: 0.8rem;
        font-family:'Poppins', sans-serif;
        opacity: 0.6;
    }
    .text-area{
        border:none;
        outline:none;
        border-bottom: 2px solid #DADDE1;
        background-color: #051933;
        color: #fff;
        font-size: 0.8rem;
        font-family:'Poppins', sans-serif;
        padding:1rem;
        width: 100%;

        @media screen and (max-width:900px){
            col: 20;
        }
    }
    .text-area::placeholder{
        font-size: 0.8rem;
        font-family:'Poppins', sans-serif;
        opacity: 0.6;
    }
`

const Button = styled.button`
    font-family:'Poppins', sans-serif ;
    font-weight: 500;
    font-size: 1rem;
    background: #66CD16;
    color: #fff;
    letter-spacing:2px;
    border-radius: 0.2rem;
    border-style: none;
    padding: 0.5rem;
    cursor: pointer;
    margin-top: 1rem;
    transition: 200ms ease-in-out;
    &:hover{
        background: #55AB12;
    }
`