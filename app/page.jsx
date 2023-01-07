import Image from 'next/image'
import Fancy from './components/fancy'
import Navbar from './components/navbar'
import Redirects from './components/redirects'

export default function Home() {
  return (
   <>
   <Navbar />
   <Fancy />
    </>
  )
}
