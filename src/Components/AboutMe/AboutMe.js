import React from 'react';
import {Card, CardDeck} from 'react-bootstrap';


function AboutMe() {
    return(
        <>
        <CardDeck className="align-items-center" >
        <Card style={{  height:'auto' }}>
            <p>Hi! I am Mekenzie, I am a software engineer! </p> <p>I am also an adventurer, chef, dog mom, aunt, graphic designer, reader, and home renovator. I am happiest laughing with friends and family, being by the mountains or the water, eating tacos, or trying out a new workout. I have lived all over the United States with a passion for finding the hole in the wall bookstore, antique shop, and dive bar to pass time and meet new people. If you see me scrolling on my phone I am most likely planning my next adventure or figuring out what to make for dinner.</p><p> I hope you have enjoyed learning a little about me and find my work intriguing. Shoot me a message for questions, comments, or to just send over a delicious new recipe! </p>
        </Card>
        </CardDeck>
        </>
    )
}

export default AboutMe;