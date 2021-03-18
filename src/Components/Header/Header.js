import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


function Header() {
    return(
        <>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="justify-content-end">
            <Nav.Link eventKey="1" href="/mekenziehayford/">
                Home
            </Nav.Link>
            <Nav.Link eventKey="2" href="/mekenziehayford/work">
                Work
            </Nav.Link>
            <Nav.Link eventKey="3" href="/mekenziehayford/aboutme">
                About Me
            </Nav.Link>
            <Nav.Link eventKey="5" href="/mekenziehayford/resume">
                Resume
            </Nav.Link>
        </Nav>
        </Navbar.Collapse>
        <Navbar.Brand className="initials" href="/mekenziehayford/" style={{fontSize: 35}}>MDH</Navbar.Brand>

    </Navbar>
    </>
    )
}

export default Header;