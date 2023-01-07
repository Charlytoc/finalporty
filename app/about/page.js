import svg from '../../public/code.svg'
import biology from '../../public/biology.svg'
import Image from 'next/image'
export default function About () {
    return <>
        <div className="scrollpy scrollpy-1">
            <div>
            <h1>Welcome to my page</h1>
            <h2>My name is <span>Charly Chacon</span>, I'm a software developer that loves designing and animations</h2>
            </div>
            <a href="#sc-2">↓</a>
        </div>
        {/* Beginning of section */}
        <div id="sc-2" className="scrollpy scrollpy-2">
            <h1>Education</h1>
            <div>
            <div>
                <Image src={svg} width={700} height={700} alt='Coding' style={{
                    width: '100%',
                    height: 'auto'
                }}/>
            </div>
            <div>
                <h2>Fullstack developer</h2>
                <p>At: 4GeeksAcademy <br/> Date: April 2022 - November 2022 <br/> 
                </p>
                <h3>
                The bootcamp I did at this academy helped me get much deeper into the world of programming, I had been loving design for years, and when I started programming I discovered my passion
                </h3>
            </div>
            </div>
        </div>
        {/* End of section */}
        {/* Beginning of section */}
        <div id="sc-2" className="scrollpy scrollpy-3">
            <div>
            
            <div>
                <h2>Biologist</h2>
                <p>At: Central University of Venezuela<br/> Date: August 2017- February 2021<br/> 
                </p>
                <h3>
                Since I was a child I had liked science and mathematics, that pleasure led me to study Biology, for me life is an experiment.
                </h3>
            </div>
            <div>
                <Image src={biology} width={700} height={700} alt='Coding' style={{
                    width: '100%',
                    height: 'auto'
                }}/>
            </div>
            </div>
        </div>
        {/* End of section */}{/* Beginning of section */}
        <div id="sc-2" className="scrollpy scrollpy-2">
            <h1>Education</h1>
            <div>
            <div>
                <Image src={svg} width={700} height={700} alt='Coding' style={{
                    width: '100%',
                    height: 'auto'
                }}/>
            </div>
            <div>
                <h2>Fullstack developer</h2>
                <p>At: 4GeeksAcademy <br/> Date: April 2022 - November 2022 <br/> 
                </p>
                <h3>
                The bootcamp I did at this academy helped me get much deeper into the world of programming, I had been loving design for years, and when I started programming I discovered my passion
                </h3>
            </div>
            </div>
        </div>
        {/* End of section */}
        </>
}