import PiraTechnics from "./assets/pira-icon.png";
import { Container, Navbar, Nav, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const Header = () => {
  return (
    <Navbar
      expand="sm"
      bg="dark"
      data-bs-theme="dark"
      fixed="top"
      className="py-1"
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
