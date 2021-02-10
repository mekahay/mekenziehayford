import React from 'react';
import Work from '../Work/Work';
import Contact from '../Contact/Contact';
import AboutMe from '../AboutMe/AboutMe';
import Resume from '../Resume/Resume';
import hello from './Untitled-1.png'

function Home() {
    return(
        <>
        <div className="homepage-div">
            <div className="homepage-header">
            <img className="hello" src={hello} alt="hello!"/>
            <p>Driven Software Engineer who brings creative problem solving and technical skills to fast paced workplaces focused on solving challenging programming problems. With a background in marketing and customer service I am passionate about collaborating with many different teams and clients.
</p>
            </div>
            <hr/>
            <div className="homepage-div2">
                <div className="homepage-work"><Work /></div>
            </div>
            <hr/>
            <div className="homepage-div3">
                <div className="homepage-resume"><Resume /></div>
                <hr/>
                <div className="homepage-contact"><Contact /></div>
            </div>
        </div>
        </>
    )
}

export default Home;