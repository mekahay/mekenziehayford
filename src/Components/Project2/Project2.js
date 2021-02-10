import React from 'react';
import { Image } from 'react-bootstrap';
import picture1 from './Screen Shot 2021-02-09 at 8.57.19 PM.png';
import picture2 from './Screen Shot 2021-02-09 at 8.58.20 PM.png';


function Project2() {
    return(
        <>
        <h2>Comment Database</h2>
        <div className="commentdatabase-description">
        <p>Our second project during General Assembly was a two day build to create a HTTP Server with Node.js using the Express Framework connected to MongoDB Atlas while also using HTML, CSS and JavaScript to make static websites. I choose to create a portfolio to show off my first project, Recollection, with commenting capabilities using all seven restful routes. Build Status Working with room for improvement and expansion.</p>
        </div> 
        <a href="https://mekenziehayford.herokuapp.com/project1">Live Build</a><br/>
        <a href="https://github.com/mekahay/portfolio_project2">GitHub Repository</a>
        <hr/>
            <div className="images">
                <Image className="p1-picture1" src={picture1} alt="picture1" fluid/>
                <Image className="p1-picture2" src={picture2} alt="picture2" fluid/>
            </div>
        </>
    )
}

export default Project2;