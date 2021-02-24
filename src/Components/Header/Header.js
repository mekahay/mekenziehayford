import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


function Header() {
    return(
        <>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand className="initials" href="/">MDH</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="justify-content-end">
            <Nav.Link eventKey="1" href="/">
                Home
            </Nav.Link>
            <Nav.Link eventKey="2" href="/work">
                Work
            </Nav.Link>
            <Nav.Link eventKey="3" href="/aboutme">
                About Me
            </Nav.Link>
            <Nav.Link eventKey="5" href="/resume">
                Resume
            </Nav.Link>
        </Nav>
        </Navbar.Collapse>

    </Navbar>
    </>
    )
}

export default Header;