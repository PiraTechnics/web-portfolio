import { useState, useEffect } from "react";
import PiraTechnics from "../images/pira-icon.png";
import { Container, Navbar, Nav, Image } from "react-bootstrap";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
      /*       console.log(scroll);
      console.log(window.scrollY); */
    });
  }, [scroll]);

  return (
    <Navbar
      id="navbar-custom"
      expand="sm"
      /*       bg="dark-subtle"
      data-bs-theme="dark" */
      sticky="top"
      className={scroll ? "px-2 py-1 scrolled" : "px-2 py-3"}
      /* className="px-2 py-3" */
    >
      <Container fluid>
        <Navbar.Brand href="#intro" className="ps-3">
          <Image
            fluid
            src={PiraTechnics}
            width={60}
            alt="Devin Younge Logo"
          ></Image>{" "}
          {/* <span className="px-2 fs-4 link-text">Devin Younge</span> */}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="top-nav-toggler"
          className="pe-4 border border-0"
        />
        <Navbar.Collapse
          id="top-nav-toggler"
          /* className="justify-content-end my-2 pe-3" */
          className="justify-content-end mt-2"
        >
          <Nav id="nav-scroll">
            <Nav.Link id="about-nav" href="#about">
              About
            </Nav.Link>
            <Nav.Link id="skills-nav" href="#skills">
              Skills
            </Nav.Link>
            <Nav.Link id="projects-nav" href="#projects">
              Projects
            </Nav.Link>
            <Nav.Link id="contact-nav" href="#contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
