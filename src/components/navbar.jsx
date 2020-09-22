import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const NavbarComponent = () => {
    return (
      <>
        <Navbar className="header-nav" fixed="top" collapseOnSelect bg="light" expand="lg">
          <Navbar.Brand href="#home" className="brand-name ml-5">
            Roshan.
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto mr-5">
              <Nav.Link href="#home">Home</Nav.Link>
              <p className="slash">|</p>
              <Nav.Link href="#about">About</Nav.Link>
              <p className="slash">|</p>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <p className="slash">|</p>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <p className="slash">|</p>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
}

export default NavbarComponent;
