import React from 'react';
import { Image } from 'react-bootstrap';
import picture1 from './Screen Shot 2021-02-09 at 9.38.36 PM.png';
import picture2 from './Screen Shot 2021-02-09 at 9.40.02 PM.png';
import picture3 from './Screen Shot 2021-02-09 at 9.40.36 PM.png';
import picture4 from './Screen Shot 2021-02-09 at 9.41.10 PM.png';

function Project5() {
    return (
        <>
        <div className="project5-description">
            <h2>Happy Cabbage Gifts</h2>
            <p>Months before I knew of General Assembly I was creating the SquareSpace ecommerce site for a new small business, Happy Cabbage, there were things I was unable to do that the owners had hoped would be a feature on the site. This was the start of my development interests. This is a full-stack Ruby on Rails and React application with many to many relationships of users, products, categories, and a few different forms. With only a week to create this application I focused on the admin functionality and the css and bootstrap. Build Status Working with room for improvement and expansion.</p>
        </div>
        <a href="https://happycabbageclient.herokuapp.com/">Live Build</a> <br/>
        <a href="https://github.com/mekahay/happycabbage-backend">GitHub Repository API</a><br/>
        <a href="https://github.com/mekahay/happycabbageclient">GitHub Repository Client</a>
        <hr/>
            <div className="images">
                <Image className="p1-picture1" src={picture1} alt="picture1" fluid/>
                <Image className="p1-picture2" src={picture2} alt="picture2" fluid/>
                <Image className="p1-picture3" src={picture3} alt="picture3" fluid/>
                <Image className="p1-picture4" src={picture4} alt="picture4" fluid/>
            </div>
        </>
    )
}

export default Project5;