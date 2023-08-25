import { Container, Row, Col, Image } from "react-bootstrap";
import DownScroll from "./utils/DownScroll";
import PiraHeadshot from "../images/piratechnics-headshot.jpg";

const About = () => {
  return (
    <Container
      id="about"
      className="section-container d-flex flex-column"
      fluid
    >
      <Row
        className="flex-grow-1 align-items-center justify-content-center mt-5"
        style={{ minHeight: "60vh" }}
      >
        <Col xs={10} sm={6} className="ps-4 fs-5 text-start">
          <div className="terminal-bg p-3">
            Hi there! I'm{" "}
            <strong>
              <i>Devin Younge</i>
            </strong>
            , Web Developer & Designer with a background in application
            development. I also have extensive experience in marketing and
            public speaking from my previous career in Esports Broadcast. You
            might also know me by my stage name, <i>PiraTechnics</i>.
          </div>
        </Col>
        <Col xs={10} sm={6} className="my-5">
          <Image
            fluid
            src={PiraHeadshot}
            roundedCircle
            className="color-pulse"
            style={{ maxWidth: "300px" }}
          />
        </Col>
      </Row>
      <DownScroll navLink={"#skills"} />
    </Container>
  );
};

export default About;
