import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";
import "./App.css";

const Contact = () => {
  return (
    <Container id="contact" className="py-5 bg-secondary-subtle" fluid>
      <h3>Get in touch! Links Below</h3>
      <Row className="pt-3">
        <Col>
          <a className="text-dark" href="mailto:devin1younge@gmail.com">
            <FaEnvelope size={30} />
          </a>
        </Col>
        <Col>
          <a
            href="https://linkedin.com/in/devinyounge"
            target="_blank"
            rel="noreferrer"
            className="text-dark"
          >
            <FaLinkedin size={30} />
          </a>
        </Col>
        <Col>
          <a
            href="https://github.com/piratechnics"
            target="_blank"
            rel="noreferrer"
            className="text-dark"
          >
            <FaGithub size={30} />
          </a>
        </Col>
        <Col>
          <a
            href="https://twitter.com/piratechnics"
            target="_blank"
            rel="noreferrer"
            className="text-dark"
          >
            <FaTwitter size={30} />
          </a>
        </Col>
        <Col>
          <a
            href="https://instagram.com/piratechnics"
            target="_blank"
            rel="noreferrer"
            className="text-dark"
          >
            <FaInstagram size={30} />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
