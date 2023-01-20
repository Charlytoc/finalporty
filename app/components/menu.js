'use client'
import Link from "next/link";
import { useEffect } from "react";
import ActiveLink from "./linked";
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
        enhance('contact');
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
        <div ><ActiveLink click={true} href={'/about'} className={"word fancy2"} id={'about'}>About me</ActiveLink></div>
        <ActiveLink click={true} href={'/project/where2day'} className={"word fancy2"} id={'projects'}>Projects</ActiveLink>
        <Link href={'https://github.com/Charlytoc'} className={"word fancy2"} id={'github'}>Github</Link>
        <Link href={'https://www.linkedin.com/in/charlytoc/'} className={"word fancy2"} id={'linkedin'}>Linkedin</Link>

        <ActiveLink click={true} href={'/contact'} className={"word fancy2"} id={'contact'}>contact</ActiveLink>
        <h2 onClick={showMenu}>x</h2>
    </div>
    </>
}