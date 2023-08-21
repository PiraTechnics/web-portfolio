import { Container, Row, Col, Image } from "react-bootstrap";
import DownScroll from "./utils/DownScroll";

const Skills = () => {
  /* Vite-specific bulk import, map to Image Components */
  const devIcons = import.meta.glob("../images/devicons/*", {
    as: "url",
    eager: true,
  });
  const iconList = Object.values(devIcons).map((iconPath, key) => (
    <Col xs={4} sm={2} lg={1} className="p-3">
      <Image
        key={"skill-icon-" + key}
        src={iconPath}
        width={"65px"}
        className="skill-icon"
      />
    </Col>
  ));

  const toolIcons = import.meta.glob("../images/toolicons/*", {
    as: "url",
    eager: true,
  });
  const toolsList = Object.values(toolIcons).map((iconPath, key) => (
    <Col xs={4} sm={2} lg={1} className="p-3">
      <Image
        key={"tool-icon-" + key}
        src={iconPath}
        width={"65px"}
        className="skill-icon"
      />
    </Col>
  ));

  return (
    <Container
      id="skills"
      className="py-5 mt-3 section-container d-flex flex-column"
      fluid
    >
      <Row>
        <h1>Skills</h1>
        <h5>Some of the Technologies I've worked with:</h5>
      </Row>
      <Row className="p-5 pt-3">{iconList}</Row>
      <Row className="p-5 pt-3">{toolsList}</Row>
      <DownScroll navLink={"#projects"} />
    </Container>
  );
};

export default Skills;
