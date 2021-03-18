import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import Modal from './Screen Shot 2021-02-09 at 2.27.25 PM.png';
import GameBoard from './Screen Shot 2021-02-09 at 2.30.18 PM.png';


function Project1() {
    return(
        <>
        <div className="project1-description">
            <h2>Recollection</h2>
            <p>Recollection is the first project for the General Assembly's Software Engineering Immersive program. We were asked to develop a browser game using HTML, CSS, and JavaScript. I chose a matching game because it is a game I loved as a child and still love to this day as a sort of 'brain gym'. I decided to have a little fun with it and use emojis as the images that are being matched. Build Status Working with room for improvement and expansion.</p>
            <a rel="noreferrer" href="https://mekahay.github.io/project_1/" target="_blank">Live Build</a><br/>
            <a rel="noreferrer" href="https://github.com/mekahay/project_1" target="_blank">GitHub Repository</a><br/>
            <br/>
            <br/>
            <CardDeck className="images">
                <Card>
                <Card.Img className="p1-modal" src={Modal} alt="modal" fluid/>
                </Card>
                <Card>
                <Card.Img className="p1-gameboard" src={GameBoard} alt="gameboard" fluid/>
                </Card>
            </CardDeck>
        </div>
        </>
    )
}

export default Project1;
