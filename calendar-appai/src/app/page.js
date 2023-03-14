import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Day from './day/page'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className='layout'>
    <Day />
    </div>
    </>
  )
}
