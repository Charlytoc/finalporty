import ActiveLink from "../../components/linked"
import svg from '../../../public/img-1.png'
import Image from "next/image"
import biology from '../../../public/img-2.png'
import teacher from '../../../public/img-3.png'
import database from '../../../public/img-4.png'
import frontend from '../../../public/img-5.png'
import backend from '../../../public/backend.svg'
export default function Where2day () {
    return <>
    <div className="scrollpy scrollpy-1">
            <div>
            <h1>Where2day</h1>
            <h2>is a social network where people can share their life experiences and inspire others to live theirs</h2>
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
                <p>Landing page of Where2day<br/> 
                </p>
                <h3>
                It is a simple application in terms of its objective, it seeks to provide a source of experiences to be carried out for its users
                </h3>
            </div>
            </div>
        </div>
        {/* End of section */}
        {/* Beginning of section */}
        <div id="sc-2" className="scrollpy scrollpy-3">
            <div>
            <div>
                <h2>Filter experiences</h2>
                <p>One of  the best functions<br/> 
                </p>
                <h3>
                Users can select the type of experience they would like to see the most, they can also add more tags. This function was made with React Flux and calls to a Rest API
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
            <h1>A lot of functions</h1>
            <div>
                
            <div>
                <Image src={teacher} width={700} height={700} alt='Coding' style={{
                    width: '100%',
                    height: 'auto'
                }}/>
            </div>
            <div>
                <h2>Post an experience</h2>
                <p>The typical social media function<br/> 
                </p>
                <h3>
                When uploading an experience, users can add images, date, tags, and various useful data for user story data management
                </h3>
            </div>
            </div>
        </div>
        {/* End of section */}
        {/* Beginning of section */}
        <div id="sc-2" className="scrollpy scrollpy-2">
            <h1>Design</h1>
            <div>
            <div>
                <h2>Minimalism is the way</h2>
                <p>Low contrast and beautiful fonts
                </p>
                <h3>
                The UI was made using bootstrap, CSS and CSS preprocessors, a bit of Javascript for transitions and animations, resulting in an intuitive and minimalist page.
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
        <div id="sc-2" className="scrollpy scrollpy-3">
            <h1>Profile section</h1>
            <div>
            <div>
                <Image src={frontend} width={700} height={700} alt='Coding' style={{
                    width: '100%',
                    height: 'auto'
                }}/>
            </div>
            <div>
                <h2>User profile</h2>
                <p>You can change all your data here<br/> 
                </p>
                <h3>
                Users can put a profile picture, location data for future features, age, gender, and contact information.
                </h3>
            </div>
            </div>
        </div>
        <div id="sc-2" className="scrollpy scrollpy-2">
            <h1>Do you want to see a little bit more?</h1>
            <div>
            <div>
                <h2>Check out the next project</h2>
                <p>Later...<br/> 
                </p>
                <h3>
                </h3>
            </div>
            <div>
                <Image src={backend} width={700} height={700} alt='Coding' style={{
                    width: '100%',
                    height: 'auto'
                }}/>
            </div>
            
            </div>
        </div></>
}