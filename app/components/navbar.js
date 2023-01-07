'use client'

import Link from "next/link";
import ActiveLink from "./linked";

export default function Navbar () {
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
    <nav><div><ActiveLink href={'/'}>Charlytoc</ActiveLink></div>
   <h2 onClick={showMenu}>=</h2></nav>
   </>
}