import { Container, Row, Col } from "react-bootstrap";
import { FaChevronDown } from "react-icons/fa";

const Intro = () => {
  return (
    <Container
      id="intro"
      className="position-relative"
      style={{ minHeight: "50vh" }}
      fluid
    >
      <Row className="title-container justify-content-center">
        <Col md={10} lg={8} xl={7} xxl={6} className="px-5">
          <h1 className="fadein-down title pb-2 pt-4">Devin Younge</h1>
          <h5 className="fadein-up subtitle border-success border-3 pb-4 border-bottom border-end rounded">
            Full Stack Web Developer
          </h5>
        </Col>
      </Row>
      <Row className="position-absolute bottom-0 end-50 pb-5">
        <a href="#about">
          <FaChevronDown size={30} className="nav-link" />
        </a>
      </Row>
    </Container>
  );
};

export default Intro;
