import React from 'react';
import { Image } from 'react-bootstrap';
import picture1 from './Screen Shot 2021-02-09 at 9.20.06 PM.png';
import picture2 from './Screen Shot 2021-02-09 at 9.20.31 PM.png';

function Project3() {
    return (
        <>
        <div className="project3-description">
            <h2>Cocktail App</h2>
            <p>This application is a way to track your favorite cocktail recipes and then add each separate ingredient to a shopping list. This is a working full-stack, full CRUD application, using the MERN stack: Node.js, Mongoose, Express and React. Authorization using JWT with sign up/login functionality, encrypted passwords & an authorization flow. There are  two separate models with the plan to be related in a one-to-many relationship with users having many lists. It is deployed online and accessible to the public via Heroku. Build Status Working with room for improvement and expansion.</p>
        </div>
        <a href="https://cocktailshoppinglist.herokuapp.com/">Live Build</a> <br/>
        <a href="https://github.com/mekahay/Project3">GitHub Repository</a>
        <hr/>
            <div className="images">
                <Image className="p1-picture1" src={picture1} alt="picture1" fluid/>
                <Image className="p1-picture2" src={picture2} alt="picture2" fluid/>
            </div>
            
        </>
    )
}

export default Project3;