import { Container, Row, Col } from "react-bootstrap";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";
import UpScroll from "./utils/UpScroll";
import SectionHeader from "./utils/SectionHeader";

const Contact = () => {
  return (
    <footer>
      <Container
        id="contact"
        className="pt-5 pb-3 mt-3 d-flex flex-column"
        fluid
        style={{ maxWidth: "1000px" }}
      >
        <SectionHeader title={"Get in Touch!"} />
        <Row className="pt-3 justify-content-center">
          <Col xs={2} sm={1} className="d-flex justify-content-center">
            <a
              className="text-dark contact-icon"
              href="mailto:devin1younge@gmail.com"
            >
              <FaEnvelope size={30} className="nav-link" />
            </a>
          </Col>
          <Col xs={2} sm={1} className="d-flex justify-content-center">
            <a
              href="https://linkedin.com/in/devinyounge"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={30} className="nav-link" />
            </a>
          </Col>
          <Col xs={2} sm={1} className="d-flex justify-content-center">
            <a
              href="https://github.com/piratechnics"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={30} className="nav-link" />
            </a>
          </Col>
          <Col xs={2} sm={1} className="d-flex justify-content-center">
            <a
              href="https://twitter.com/piratechnics"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter size={30} className="nav-link" />
            </a>
          </Col>
          <Col xs={2} sm={1} className="d-flex justify-content-center">
            <a
              href="https://instagram.com/piratechnics"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={30} className="nav-link" />
            </a>
          </Col>
        </Row>
        <UpScroll navLink={"#top"} />

        <Row className="mt-5 justify-content-center">
          &copy; {new Date().getFullYear()} Devin Younge
        </Row>
      </Container>
    </footer>
  );
};

export default Contact;
