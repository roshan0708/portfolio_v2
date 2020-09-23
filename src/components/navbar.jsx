import React from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';

const NavbarComponent = () => {
    return (
      <>
        <Navbar className="header-nav" fixed="top" collapseOnSelect bg="dark" expand="lg">
          <Navbar.Brand href="#home" className="brand-name ml-5">
            Roshan.
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto mr-5">
              <Nav.Link className="px-3" href="#home" >Home</Nav.Link>
              <Nav.Link className="px-3" href="#about">About</Nav.Link>
              <Nav.Link className="px-3" href="#experience">Experience</Nav.Link>
              <Nav.Link className="px-3" href="#projects">Projects</Nav.Link>
              <Nav.Link className="px-3" href="#contact">Contact</Nav.Link>
              <Nav.Link className="px-3" href="https://drive.google.com/file/d/15SeYYPEyzM0kxhG1UCV32BEVVcEk5xOn/view?usp=sharing" target="_blank"><Button variant="outline-success" className="button">Resume</Button></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
}

export default NavbarComponent;
