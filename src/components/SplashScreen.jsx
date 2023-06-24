import React, {useState, useEffect} from 'react'
import styled from 'styled-components';

const SplashScreen = ({ onTransitionComplete }) => {
    const greetings=['Hello','നമസ്കാരം', 'Hola', 'नमस्ते', 'Bonjour','안녕하세요', 'Hallo', 'こんにちは']
    const[currentIdx, setCurrentIdx] = useState(0);
    const[transition, setTransition] = useState(false);

    useEffect(() => {
        const greetingTimer = setInterval(()=>{
            setCurrentIdx((prevIdx)=>(
                prevIdx === greetings.length -1 ? 0 : prevIdx + 1
            ))
        }, 200)
        setTimeout(() => {
            setTransition(true);
            clearInterval(greetingTimer)
            setTimeout(() => {
                onTransitionComplete(); // Notify parent component
              }, 600);
        }, 1700)

        return() => {
            clearInterval(greetingTimer)
        }
    }, [])

    const transitionStyle = {
        moveUp:{
            transform: "translateY(-100%)",
            clipPath: "ellipse(70% 65% at 50% 30%)"
        }

    }
  return (
    <Splash style={ transition ? transitionStyle.moveUp: {}}>
        <h1>{greetings[currentIdx]}</h1>
    </Splash>
  )
}

export default SplashScreen;

const Splash = styled.div`
    height: 100vh;
    width: 100%;
    position: absolute;
    inset: 0;
    background-color: #151617;
    display: grid;
    place-content: center;
    transition: all 600ms;
    z-index: 999;

    h1{
        color:#fff;
        pointer-events: none;
        font-family: 'Roboto', sans-serif;
    }
`