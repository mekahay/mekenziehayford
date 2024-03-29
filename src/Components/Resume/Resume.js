import React from 'react';
import resume from './printableRESUME.png';
import resumepdf from './MEKENZIE HAYFORD RESUME.pdf'
import {Card, Button} from 'react-bootstrap';



function Resume() {

    return(
        <>
        <div className="resume-div">
        <Card className="resume" style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Text>
                <Button rel="noreferrer" variant="light"><a rel="noreferrer" href='https://docs.google.com/document/d/1LMaMOk228rsMP8rk9ZkKRBkEYgUJQn0vOI5BoLxO7bo/edit?usp=sharing' class='download' target="_blank" download>Download</a></Button>
                </Card.Text>
            </Card.Body>
            <Card.Img className="justify-content-center" variant="bottom" src={resume} />
        </Card>
        </div>
        </>
    )
}

export default Resume;