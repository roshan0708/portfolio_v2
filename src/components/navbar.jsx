import React from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade'; 
import Resume from "../assets/Resume.pdf";

const NavbarComponent = () => {
    const changeBackground = () => {
      let header = document.getElementsByClassName("header-nav")[0];
      if (window.scrollY < 200) {
        header.classList.remove("sticky");
      } else {
        header.classList.add("sticky");
      }
    };

    window.addEventListener("scroll", changeBackground);
    return (
      <>
        <Navbar
          className="header-nav"
          fixed="top"
          collapseOnSelect
          bg="dark"
          expand="lg"
        >
          <Fade left cascade>
          <Navbar.Brand href="#home" className="brand-name ml-5">
            Roshan.
          </Navbar.Brand>
          </Fade>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto mr-5">
              <Fade right cascade>
              <Nav.Link className="px-3" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="px-3" href="#about">
                About
              </Nav.Link>
              <Nav.Link className="px-3" href="#work">
                Experience
              </Nav.Link>
              <Nav.Link className="px-3" href="#project">
                Projects
              </Nav.Link>
              <Nav.Link className="px-3" href="#contact">
                Contact
              </Nav.Link>
              <Nav.Link
                className="px-3"
                rel="noopener noreferrer"
                href={Resume}
                target="_blank"
              >
                <Button variant="outline-success" className="button">
                  Resume
                </Button>
              </Nav.Link>
              </Fade>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
}

export default NavbarComponent;
