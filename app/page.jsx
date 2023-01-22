import Image from 'next/image'
import Fancy from './components/fancy'
import Navbar from './components/navbar'
import Redirects from './components/redirects'
export const showMenu = () => {
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
export default function Home() {
  return (
   <>
  {/* <Navbar /> */}
   <Fancy />
    </>
  )
}
