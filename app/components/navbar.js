'use client'
import ActiveLink from "./linked";
import { usePathname } from 'next/navigation';

      
  
export default function Navbar () {
    const pathname = usePathname();

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
    let paths = ['/project/where2day', '/about', '/project/starwars']
    return <>
    <nav className={paths.includes(pathname) ? "bg-change" : null}>
        <div><ActiveLink href={'/'}>Charlytoc</ActiveLink></div>
   <h2 onClick={showMenu}>=</h2>
   <div className="blog-button"><ActiveLink href={'/blog'}>Blog</ActiveLink></div></nav>
   </>
}