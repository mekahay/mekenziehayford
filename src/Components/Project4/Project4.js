import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import picture1 from './Screen Shot 2021-02-09 at 9.26.12 PM.png';
import picture2 from './Screen Shot 2021-02-09 at 9.27.52 PM.png';

function Project4() {
    return (
        <>
        <div className="project4-description">
            <h2>Insta Inspire</h2>
            <p>This is an application that gives the user inspirational quotes based on their current mood. Insta-Inspire is the group project for the General Assembly Software Engineering Immersive program. We were asked to develop a simple CRUD app with Ruby on Rails on the back-end and React on the front-end. We chose an inspirational quote feed to show all our functioning routes. We all worked together with my main role being the back-end making models with a one-to-many relationship with users having many quotes, I also had a hand in the front end adding bootstrap and a mood search function.</p>
        </div>
        <a rel="noreferrer" href="http://insta-inspire.herokuapp.com/" target="_blank">Live Build</a> <br/>
        <a rel="noreferrer" href="https://github.com/dilyaj/insta_app" target="_blank">GitHub Repository API</a><br/>
        <a rel="noreferrer" href="https://github.com/mekahay/group_project_frontend" target="_blank">GitHub Repository Client</a>
        <br/>
        <br/>
        <CardDeck className="images">
            <Card>
                <Card.Img className="p1-picture1" src={picture1} alt="picture1" fluid/>
            </Card>
            <Card>
                <Card.Img className="p1-picture2" src={picture2} alt="picture2" fluid/>
            </Card>
        </CardDeck>
            
        </>
    )
}

export default Project4;