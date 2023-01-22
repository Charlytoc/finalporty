import ActiveLink from "./linked"
export default function Footer () {
    return <>
    <footer>
        <div>
        <ActiveLink className={'color-changing'} href={'/project/where2day'}>See my projects</ActiveLink>
        <ActiveLink className={'color-changing'} href={'/blog'}>Go to the blog</ActiveLink>
        <ActiveLink className={'color-changing'} href={'/contact'}>Contact me</ActiveLink>
        </div>
        <a href="https://storyset.com/home">Home illustrations by Storyset</a>
        Owner: Charlytoc 2023
        
    </footer></>
}