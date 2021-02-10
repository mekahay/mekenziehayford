import React from 'react';
import p1img from './Screen Shot 2021-02-09 at 7.10.18 PM.png';
import p2img from './Screen Shot 2021-02-09 at 7.00.21 PM.png';
import p3img from './Screen Shot 2021-02-09 at 7.02.36 PM.png';
import p4img from './Screen Shot 2021-02-09 at 7.01.55 PM.png';
import p5img from './Screen Shot 2021-02-09 at 7.03.02 PM.png';
import {Row, Col, Image, Card, CardColumns} from 'react-bootstrap';

function Work () {
    return(
        <>
            <div className="work-header">
                <h1>RECENT WORK</h1>
            </div>
            <div className="work-cards">
            <CardColumns>
            <Card border="light">
                    <Card.Img variant="top" className="work-p1" src={p1img}/>
                <Card.Body>
                    <Card.Title ><a href="/recollection"><h4>Recollection</h4></a></Card.Title>
                    <Card.Text>Last Updated: November 23, 2020</Card.Text> 
                    <hr/>
                    <Card.Text> A memory browser game using HTML, CSS, and JavaScript.</Card.Text>
                </Card.Body>
            </Card>
            <br />
            <Card border="light">
                    <Card.Img variant="top" className="work-p2" src={p2img} />
                <Card.Body>
                    <Card.Title><a href="/commentdatabase"><h4>Comment Database</h4></a></Card.Title>
                    <Card.Text>Last Updated: December 9, 2020</Card.Text> 
                    <hr/>
                    <Card.Text>A comment database using all seven restful routes.</Card.Text>
                </Card.Body>
            </Card>
            <br />
            <Card border="light">
                <Card.Img variant="top" className="work-p3" src={p3img} />
                <Card.Body>
                <Card.Title><a href="/cocktailapp"><h4>Cocktail App</h4></a></Card.Title>
                <Card.Text>
                Last Updated: January 7, 2021
                </Card.Text> 
                <hr/>
                <Card.Text>
                This is a full-stack, full CRUD application, using the MERN stack: Node.js, Mongoose, Express and React using JWt authorization.
                </Card.Text>
                </Card.Body>
            </Card>
            <br />
            <Card border="light">
            <Card.Img variant="top" className="work-p4" src={p4img} />
                <Card.Body>
                <Card.Title><a href="/instainspire"><h4>Insta Inspire</h4></a></Card.Title>
                <Card.Text>
                Last Updated: February 2, 2021
                </Card.Text> 
                <hr/>
                <Card.Text>
                A simple CRUD app with Ruby on Rails and React.</Card.Text>
                </Card.Body>
            </Card>
            <br />
            <Card border="light">
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
            </CardColumns>
            </div>
        </>
    )
}

export default Work;