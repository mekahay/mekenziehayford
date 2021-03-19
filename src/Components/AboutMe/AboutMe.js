import React from 'react';
import {Card, CardDeck} from 'react-bootstrap';


function AboutMe() {
    return(
        <>
        <CardDeck className="align-items-center" >
        <Card style={{  height:'auto' }}>
            <p>Hi! I am Mekenzie, I am a software engineer! </p> 
            <p>Early in my career, I was building HTML email wireframes for marketing campaigns while more recently I created a Squarespace eCommerce website for a small business that quickly outgrew the platform. It was these jobs that eventually launched my career change. Going through General Assembly didn’t only teach me how to code and think logically but how to learn quickly, seek out advice from the coding community,  and work directly with a team of engineers. I may be newer to the engineering community but I make up for it with my ambition, innovation, and creativity.</p>
            <p>I thrive in creative, collaborative, and fast-paced environments with room to grow and learn while wearing many different hats.  As a marketing manager, I spearheaded a project collaborating with multiple teams and executive members. Under a tight deadline, I was able to provide a month-to-month guide of marketing campaigns and store strategy for two brands and over 200 franchisees to assure franchisee success and brand consistency. While I left shortly after they were distributed I got feedback on the thoroughness and a clearer understanding of how marketing with each store should work. </p>
            <p>It is clear to most that I am motivated and detail-oriented but it is ultimately my outgoing friendly personality and positive character that people know me by. I believe that it is this experience paired with the technical skills that make me a great fit for many different positions.</p>
            <p>I am also an adventurer, chef, dog mom, aunt, graphic designer, reader, and home renovator. I am happiest laughing with friends and family, being by the mountains or the water, eating tacos, or trying out a new workout. I have lived all over the United States with a passion for finding the hole in the wall bookstore, antique shop, and dive bar to pass time and meet new people. If you see me scrolling on my phone I am most likely planning my next adventure or figuring out what to make for dinner.</p>
            <p> I hope you have enjoyed learning a little about me and find my work intriguing. Shoot me a message for questions, comments, or to just send over a delicious new recipe! </p>
        </Card>
        </CardDeck>
        </>
    )
}

export default AboutMe;