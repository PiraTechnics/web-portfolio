import { useState, useEffect } from "react";
import PiraTechnics from "./assets/pira-icon.png";
import { Container, Navbar, Nav, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

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
      /*       bg="dark" */
      data-bs-theme="dark"
      fixed="top"
      /* className="navbar-custom py-1" */
      className={
        scroll
          ? "bg-dark-subtle px-2 py-1 scrolled"
          : "bg-dark-subtle px-2 py-3"
      }
    >
      <Container fluid className="px-0">
        <Navbar.Brand href="#home" className="ps-2">
          <Image
            fluid
            src={PiraTechnics}
            width={50}
            alt="Devin Younge Logo"
          ></Image>{" "}
          <span className="px-2 fs-4">Devin Younge</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="top-nav-toggler"
          className="me-3 border border-0"
        />
        <Navbar.Collapse
          id="to-nav-toggler"
          className="justify-content-end my-1 border-top"
        >
          <Nav>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
