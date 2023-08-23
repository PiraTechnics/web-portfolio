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
        className="flex-grow-1 align-items-center mt-5"
        style={{ minHeight: "90%" }}
      >
        <Col xs={10} sm={6} className="ps-5 fs-5 mx-auto">
          Hi there! I'm Devin, and I am a Web Developer. I create beautiful,
          custom websites for a variety of clients. These days I primarily work
          in Javascript on JAMstack applications, but I also have experience
          working with Python and Java. I earned my Bachelor's Degree in
          Computer Science from the University of Colorado at Boulder in 2012,
          and have followed a multifacted career trajectory since then!
        </Col>
        <Col xs={10} sm={6} className="my-5 mx-auto">
          <Image
            fluid
            src={PiraHeadshot}
            roundedCircle
            className="color-pulse"
            style={{ maxWidth: "80%" }}
          />
        </Col>
      </Row>
      <DownScroll navLink={"#skills"} />
    </Container>
  );
};

export default About;
