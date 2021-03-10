import React from 'react';
import helloimg from './Untitled-1.png';
import p2img from '../Work/project2main.jpg';
import p3img from '../Work/project3main.jpg';
import p5img from '../Work/fianlprojectmain.jpg';
import {Card, CardDeck} from 'react-bootstrap';

function Home() {
    return(
        <>
        <div className="homepage">
        <div className="homepage-div">
            <div className="justify-content-center">
            <CardDeck>
            <Card className="border-0">
                <Card.Img src={helloimg} className="homepage-hello"></Card.Img>
            </Card>
            <Card className="border-0">
                <Card.Body className="homepage-p">I am Mekenzie Hayford, I am a driven Software Engineer who brings creative problem solving and technical skills to fast-paced workplaces focused on solving challenging programming problems. With a background in marketing and customer service, I am passionate about collaborating with many different teams and clients.</Card.Body>
            </Card>
            </CardDeck>
            </div>
            </div>
            <div className="homepage-div2">
                <div className="work-header">
                    <h4>RECENT WORK</h4>
                </div>
                <div className="work-cards">
                <CardDeck>
                <Card border="light" style={{ width: '18rem' }}>
                <Card.Img variant="top" className="work-p5" src={p5img} />
                    <Card.Body>
                    <Card.Title><a href="/happycabbage"><h4>Happy Cabbage</h4></a></Card.Title>
                    <Card.Text>
                    Last Updated: February 3, 2021
                    </Card.Text> 
                    <hr/>
                    <Card.Text>
                    A full-stack Ruby on Rails and React ecommerce application.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Card border="light" style={{ width: '18rem' }}>
                    <Card.Img variant="top" className="work-p3" src={p3img} />
                    <Card.Body>
                    <Card.Title><a href="/cocktailapp"><h4>Cocktail App</h4></a></Card.Title>
                    <Card.Text>
                    Last Updated: January 7, 2021
                    </Card.Text> 
                    <hr/>
                    <Card.Text>
                    This is a full-stack, full CRUD application, using the MERN stack: Node.js, Mongoose, Express and React using JWT authorization.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Card border="light" style={{ width: '18rem' }}>
                    <Card.Img variant="top" className="work-p2" src={p2img} />
                    <Card.Body>
                        <Card.Title><a href="/commentdatabase"><h4>Comment Database</h4></a></Card.Title>
                        <Card.Text>Last Updated: December 9, 2020</Card.Text> 
                        <hr/>
                        <Card.Text>A comment database using all RESTful routes.</Card.Text>
                    </Card.Body>
                </Card>
                </CardDeck>
                </div>
                </div>
        </div>
        </>
    )
}

export default Home;