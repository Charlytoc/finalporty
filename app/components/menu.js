'use client'
import { useEffect } from "react";
export default function Menu () {
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
        enhance('about');
        enhance('projects');
        enhance('github');
        enhance('linkedin');
    }, [])
    const showMenu = () => {
        let menu = document.getElementById('menu')
        let all = document.getElementById('mr-all')
        if (menu.style.display == 'none') {
            menu.style.display = 'block';
            all.style.display = 'none'
        }
        else {
            menu.style.display = 'none';
            all.style.display = 'block'
        }
    }
    return <>
    <div className="menu">
        <div className="word fancy2" id="about">About</div>
        <div className="word fancy2" id="projects">Projects</div>
        <div className="word fancy2" id="github">GitHub</div>
        <div className="word fancy2" id="linkedin">Linkedin</div>
        <h2 onClick={showMenu}>X</h2>
    </div>
    </>
}