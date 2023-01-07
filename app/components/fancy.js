'use client'
import { useEffect } from "react";
export default function Fancy () {

    const enhance = id => {
        const elem = document.getElementById(id),
        text = elem.innerText.split('');

        elem.innerText = "";
        text.forEach( letter => {
            const span = document.createElement("span");
            span.className = "letter";
            span.innerText = letter;
            elem.appendChild(span);
        })
    }
    useEffect(()=>{
        enhance('about-me');
        enhance('developer');
        enhance('designer');
        enhance('learning-enthusiast');
    }, [])
    return <>
    <div id="greeting"></div>
    <div id='text'>
      <div className='line'>
      <p id="about-me" className='word fancy'>Hi, I'm Charly</p>
      </div>
      <div className='line'>
        <p id="developer" className='word fancy'>Developer</p>
      </div>
      <div className='line'>
        <p id="designer" className='word fancy'>Designer</p>
      </div>
      <div className='line'>
        <p id="learning-enthusiast" className='word fancy'>learning-enthusiast</p>
      </div>
   </div></>
}