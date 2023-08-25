import { Container, Row, Col } from "react-bootstrap";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

const Contact = () => {
  return (
    <Container
      id="contact"
      className="py-5 mt-3 section-container d-flex flex-column"
      fluid
    >
      <h3>Get in touch!</h3>
      <Row className="pt-3 justify-content-center">
        <Col xs={2} sm={1}>
          <a
            className="text-dark contact-icon"
            href="mailto:devin1younge@gmail.com"
          >
            <FaEnvelope size={30} className="nav-link" />
          </a>
        </Col>
        <Col xs={2} sm={1}>
          <a
            href="https://linkedin.com/in/devinyounge"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={30} className="nav-link" />
          </a>
        </Col>
        <Col xs={2} sm={1}>
          <a
            href="https://github.com/piratechnics"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={30} className="nav-link" />
          </a>
        </Col>
        <Col xs={2} sm={1}>
          <a
            href="https://twitter.com/piratechnics"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter size={30} className="nav-link" />
          </a>
        </Col>
        <Col xs={2} sm={1}>
          <a
            href="https://instagram.com/piratechnics"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram size={30} className="nav-link" />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
