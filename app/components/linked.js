'use client'
import { useRouter } from 'next/navigation'
import { showMenu } from '../page'
function ActiveLink({ children, href, id, className, click}) {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href);
    if (click == true) {
        setTimeout(()=>showMenu(), 300)
    }
  }

  return (
    <span className={`linked ${className}`} id={id}  onClick={handleClick}>
      {children}
    </span>
  )
}

export default ActiveLink