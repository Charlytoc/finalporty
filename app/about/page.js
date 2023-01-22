
import svg from '../../public/code.svg'
import biology from '../../public/biology.svg'
import teacher from '../../public/teacher.svg'
import database from '../../public/database.svg'
import frontend from '../../public/frontend.svg'
import backend from '../../public/backend.svg'
import Image from 'next/image'

import ActiveLink from '../components/linked'
import Footer from '../components/footer'
export default function About () {

    return <>
        <div className="scrollpy scrollpy-1">
            <div>
            <h1>Welcome to my page</h1>
            <h2>My name is <ActiveLink href={'/'}>Charly Chacon</ActiveLink>, I'm a software developer that loves designing and animations</h2>
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
                The bootcamp I did at this academy helped me get much deeper into the world of programming, I had been loving design for years, and when I started programming I discovered my passion.
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
        <h1>Job experience</h1>
            <div>
            
            <div>
                <h2>Python specialist and data Scientist</h2>
                <p>At: 4GeeksAcademy<br/> Date: November 2022 - Now<br/> 
                </p>
                <h3>
                Working here has helped me specialize as a backend developer and have a better relationship with the data
                </h3>
            </div>
            <div>
                <Image src={database} width={700} height={700} alt='Coding' style={{
                    width: '100%',
                    height: 'auto'
                }}/>
            </div>
            </div>
        </div>
        <div id="sc-2" className="scrollpy scrollpy-3">
     
            <div>
            <div>
                <Image src={teacher} width={700} height={700} alt='Coding' style={{
                    width: '100%',
                    height: 'auto'
                }}/>
            </div>
            <div>
                <h2>Programming mentor</h2>
                <p>Self-employed<br/> Date: November 2022 - Now<br/> 
                </p>
                <h3>
                The best way to learn is by teaching, it's something I've known since I was a child, so when I learn something new I want to show it to the world.
                </h3>
            </div>
            </div>
        </div>
        {/* End of section */}
        
        {/* Beginning of section */}
        <div  className="scrollpy scrollpy-2">
            <div>
            
            <div>
                <h2>Seller and database manager</h2>
                <p>At: Liz Shoes<br/> Date: August 2021 - January 2023<br/> 
                </p>
                <h3>
                When I started working here, orders and inventories were managed with notebooks, I developed a system to make the company's typical processes more productive, and it worked.
                </h3>
            </div>
            <div>
                <Image src={database} width={700} height={700} alt='Coding' style={{
                    width: '100%',
                    height: 'auto'
                }}/>
            </div>
            </div>
        </div>
        {/* End of section */}
        {/* End of section */}{/* Beginning of section */}
        <div  className="scrollpy scrollpy-3">
            <h1>Technologies</h1>
            <div>
            <div>
                <Image src={frontend} width={700} height={700} alt='Coding' style={{
                    width: '100%',
                    height: 'auto'
                }}/>
            </div>
            <div>
                <h2>Frontend</h2>
                <p>I usually make UI and UX with the next technologies<br/> 
                </p>
                <h3 className='ignore'>
                <span className='ball'></span> Typescript  
                </h3>
                <h3 className='ignore'>
                <span className='ball'></span>Tailwind
                </h3>
                <h3 className='ignore'>
                <span className='ball'></span>React
                </h3>
                <h3 >
                <span className='ball'></span>GSAP
                </h3>
            </div>
            </div>
        </div>
        <div id="sc-2" className="scrollpy scrollpy-2">
            <div>
            <div>
                <h2>Backend</h2>
                <p>From the back I work with<br/> 
                </p>
                <h3 className='ignore'>
                <span className='ball'></span>Python 
             
                </h3>
                <h3 className='ignore'>
                <span className='ball'></span>Flask
                </h3>
                <h3 className='ignore'>
                <span className='ball'></span>GraphQL
                </h3>
                <h3 className='ignore'>
                <span className='ball'></span>ExpressJS
                </h3>
            </div>
            <div>
                <Image src={backend} width={700} height={700} alt='Coding' style={{
                    width: '100%',
                    height: 'auto'
                }}/>
            </div>
            
            </div>
        </div>
        <div id="sc-2" className="scrollpy scrollpy-2">
            <div>
            <div>
                <h2>Testing and others</h2>
                <p>Useful tools I learned for the years<br/> 
                </p>
                <h3 className='ignore'>
                <span className='ball'></span>Docker
                </h3>
                <h3 className='ignore'>
                <span className='ball'></span>Jest
                </h3>
                <h3 className='ignore'>
                <span className='ball'></span>MySQL
                </h3>
                <h3 >
                <span className='ball'></span>Agile
                </h3>
            </div>
            <div>
                <h2>But that's not all</h2>
                <p>Learning is the thing I love the most, so<br/> 
                </p>
                <h3 style={{display: 'block'}}>
                    I'll be happy with the opportunity to learn new things, if you have an offer just <ActiveLink href={'/contact'}>contact me!</ActiveLink> or
                    <br/>
                    
                </h3>
                <h2 className='mb'><ActiveLink className={'color-changing'} href={'/project/where2day'}>See my projects</ActiveLink></h2>
            </div>
          
            </div>
            
        </div>
        <Footer />
        </>
}