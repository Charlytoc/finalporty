import Menu from './components/menu'
import './globals.css'
import './about.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div style={{display: 'none'}} id='menu'>
          <Menu />
        </div>
        <div id='mr-all'>
        {children}
        </div>
        </body>
    </html>
  )
}
