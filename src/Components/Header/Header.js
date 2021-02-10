import React from 'react';
import { Nav } from 'react-bootstrap';

function Header() {
    return(
        <>
        <h1 className='name-header'> Mekenzie Hayford</h1>
    <Nav  className="justify-content-center" activeKey="1">
        <Nav.Item>
            <Nav.Link eventKey="1" href="/home">
                Home
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="2" href="/work">
                Recent Work
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="3" href="/aboutme">
                AboutMe
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="4" href="/contact">
                Contact
            </Nav.Link>
        </Nav.Item> 
        <Nav.Item>
            <Nav.Link eventKey="5" href="/resume">
                Resume
            </Nav.Link>
        </Nav.Item>
    </Nav>
    </>
    )
}

export default Header;