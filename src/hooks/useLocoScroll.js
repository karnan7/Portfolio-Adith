import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import LocomotiveScroll from 'locomotive-scroll'
import "locomotive-scroll/src/locomotive-scroll.scss"

gsap.registerPlugin(ScrollTrigger);

export default function useLocoScroll(start){
    useEffect(() => {
        if(!start) return;
        let locoScroll = null;

        const scrollEl = document.querySelector('#main-container');

        locoScroll = new LocomotiveScroll({
            el: scrollEl,
            smooth: true,
            multiplier: 1,
            class: "is-reveal",
        })

        locoScroll.on("scroll", () => {
            ScrollTrigger.update();
          });

        ScrollTrigger.scrollerProxy(scrollEl,{
            scrollTop(value){
                if(locoScroll){
                    return arguments.length ? locoScroll.scrollTo(value, 0, 0)
                    : locoScroll.scroll.instance.scroll.y;
                }
                return null;
            },
            scrollLeft(value){
                if(locoScroll){
                    return arguments.length ? locoScroll.scrollTo(value, 0, 0)
                    : locoScroll.scroll.instance.scroll.x;
                }
                return null; 
            }
        })

        const handleNavClick = (event) => {
            event.preventDefault();
            const target = event.target.getAttribute('href');
            const targetElement = document.querySelector(target);
            console.log("target", target)
            console.log("targetElement", targetElement)
            if (targetElement) {
              locoScroll.scrollTo(targetElement);
            }
          };
      
          const navLinks = document.querySelectorAll('[data-scroll]');
          navLinks.forEach((link) => {
            link.addEventListener('click', handleNavClick);
          });
          console.log(navLinks);
        
        const isUpdate = () => {
            if(locoScroll){
                locoScroll.update();
            }
        }
        ScrollTrigger.addEventListener('refresh', isUpdate)
        ScrollTrigger.refresh();

        return () => {
            if(locoScroll){
                ScrollTrigger.removeEventListener('refresh', isUpdate);
                locoScroll.destroy()
                locoScroll = null;
            }
        }
    }, [start])
}