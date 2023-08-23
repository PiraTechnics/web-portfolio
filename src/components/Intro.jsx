import { Container, Row, Col } from "react-bootstrap";
import DownScroll from "./utils/DownScroll";

const Intro = () => {
  return (
    <Container
      id="intro"
      className="section-container d-flex flex-column"
      style={{ height: "90vh" }}
      fluid
    >
      <Row className="justify-content-center flex-grow-1 align-items-end">
        <Col md={10} lg={8} className="px-5">
          <h1 className="fadein-down title pb-2 pt-4">Devin Younge</h1>
          <h5 className="fadein-up subtitle border-success border-3 pb-4 border-bottom border-end rounded">
            Full Stack Web Developer
          </h5>
        </Col>
      </Row>
      <DownScroll navLink={"#about"} />
    </Container>
  );
};

export default Intro;
