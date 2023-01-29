'use client'
import { useState } from "react"
import svg from '../../public/code.svg'
function Imagenator ({url, description}) {
    return <>
    <p>{url}</p>
    <p>{description}</p></>
}
function ShowSVG () {
    return <>
    
    </>
}

function Gallery () {
    const [activeIndex, setactiveIndex] = useState(0)

    const pictures = [{url: 'URL A LA IMANGE', description: 'ALGO QUE DESCRIBA LA IMAGEN'}, 
    {url: 'SEGUNDO URL', description: 'ALGO QUE DESCRIBA LA IMAGEN 2'}, 
    {url: 'TERCER URL', description: 'ALGO QUE DESCRIBA LA IMAGEN 3'}] 

    const nextPrev = (next) => {
        if (next) {
            if (activeIndex === pictures.length - 1) {
               return setactiveIndex(0)
            }
            else return setactiveIndex(activeIndex + 1)
        }
        if (!activeIndex) {
            return setactiveIndex(pictures.length -1)
        }
        setactiveIndex(activeIndex -1)
    }
    return <><p>Hola</p></>
}
export default Gallery