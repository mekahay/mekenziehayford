import React from 'react';
import resume from './printableRESUME.png';
import resumepdf from './MEKENZIE HAYFORD RESUME.pdf'
import {Card, Button} from 'react-bootstrap';



function Resume() {

    return(
        <>
        <div className="resume-div">
        <Card className="resume">
            <Card.Body>
                <Card.Text>
                <Button variant="light"><a href={resumepdf} class='download' download>Download</a></Button>
                </Card.Text>
            </Card.Body>
            <Card.Img className="justify-content-center" variant="bottom" src={resume} />
        </Card>
        </div>
        </>
    )
}

export default Resume;