import ActiveLink from "../../components/linked"
import svg from '../../../public/sw-1.png'
import Image from "next/image"
import biology from '../../../public/sw-2.png'
import teacher from '../../../public/sw-3.png'
import database from '../../../public/img-4.png'
import frontend from '../../../public/img-5.png'
import backend from '../../../public/backend.svg'
import Link from "next/link"
export default function StarWars () {
    return <>
    <div className="scrollpy scrollpy-1">
            <div>
            <h1>StarWars</h1>
            <h2>it's a reading blog when I'm consuming the StarWars API, you can find information about the characters, vehicles, starships and planets.</h2>
            </div>
            <a href="#sc-2">↓</a>
        </div>
        {/* Beginning of section */}
        <div id="sc-2" className="scrollpy scrollpy-2">
            <div>
            <div>
                <Image src={svg} width={700} height={700} alt='Coding' style={{
                    width: '100%',
                    height: 'auto'
                }}/>
            </div>
            <div>
                <h2>Easy to understand</h2>
                <p>Even a kid can to use this app<br/> 
                </p>
                <h3>
                    You just need to select the one you want to read and everythin will be prepared for you
                </h3>
            </div>
            </div>
        </div>
        {/* End of section */}
        {/* Beginning of section */}
        <div id="sc-2" className="scrollpy scrollpy-3">
            <div>
            <div>
                <h2>See all characteristics</h2>
                <p>THe main function<br/> 
                </p>
                <h3>
                    All data is consumed from the StarWars API, and it is the real actual information for the elements of the series
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
        <div id="sc-2" className="scrollpy scrollpy-3">
            <div>
                
            <div>
                <Image src={teacher} width={700} height={700} alt='Coding' style={{
                    width: '100%',
                    height: 'auto'
                }}/>
            </div>
            <div>
                <h2>Going to the next is easy</h2>
                <p>It is a plus in the reading experience<br/> 
                </p>
                <h3>
                    When you call the API to obtain all characters the API will the response contain just the first 10, but with this function it is possible to read all data.
                </h3>
            </div>
            </div>
        </div>
  
        <div id="sc-2" className="scrollpy scrollpy-2 ignore ignored">
            <h1><Link href={'https://nextstarwars.vercel.app/'}>See it live</Link></h1>
            <div>
            <div>
             
                <p>I hope you enjoyed my page
                </p>
            </div>
            </div>
        </div>
        {/* End of section */}
      
        </>
}