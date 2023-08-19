import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { FaChevronDown } from "react-icons/fa";

const Intro = () => {
  return (
    <Container
      id="intro"
      className="py-5 mt-5 bg-secondary-subtle position-relative"
      style={{ minHeight: "50vh" }}
      fluid
    >
      <Row>
        <h1>Hi, I'm Devin!</h1>
        <h5>Full Stack Web Developer</h5>
      </Row>
      <Row className="position-absolute bottom-0 end-50 pb-5">
        <FaChevronDown size={30} className="" />
      </Row>
    </Container>
  );
};

export default Intro;
