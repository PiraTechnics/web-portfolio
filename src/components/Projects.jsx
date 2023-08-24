import { Container, Row, Col, Card, Image } from "react-bootstrap";
import DownScroll from "./utils/DownScroll";
import Github from "../images/projecticons/github.svg";
import ExternalLink from "../images/projecticons/external.svg";
import WetterIcon from "../images/projecticons/Wetter.png";
import ProjectCard from "./utils/ProjectCard";

const Projects = () => {
  return (
    <Container
      id="projects"
      fluid
      className="py-5 mt-3 section-container d-flex flex-column"
    >
      <Row>
        <h2>Portfolio</h2>
        <p>Some of the things I've built</p>
      </Row>
      <Row className="justify-content-center">
        <Col
          xs={10}
          sm={6}
          lg={3}
          className="my-3 d-flex align-items-center justify-content-center"
        >
          <ProjectCard
            title={"Wetter"}
            text={"A responsive, location-based weather application"}
            thumbnail={WetterIcon}
            github={"https://github.com/PiraTechnics/wetter"}
            external={"https://piratechnics.github.io/wetter/"}
            technologies={["React", "Bootstrap", "ViteJs"]}
          />
        </Col>
        <Col
          xs={10}
          sm={6}
          lg={3}
          className="my-3 d-flex align-items-center justify-content-center"
        >
          <ProjectCard
            title={"QuestMap"}
            text={"Upload, Edit and plot your RPG journey"}
            thumbnail={WetterIcon}
            github={"https://github.com/PiraTechnics/questmap"}
            technologies={["Python", "Django", "LeafletJS"]}
          />
        </Col>
        <Col
          xs={10}
          sm={6}
          lg={3}
          className="my-3 d-flex align-items-center justify-content-center"
        >
          <ProjectCard
            title={"QuestMap"}
            text={"Upload, Edit and plot your RPG journey"}
            thumbnail={WetterIcon}
            github={"https://github.com/PiraTechnics/questmap"}
            technologies={["Python", "Django", "LeafletJS"]}
          />
        </Col>
        <Col
          xs={10}
          sm={6}
          lg={3}
          className="my-3 d-flex align-items-center justify-content-center"
        >
          <ProjectCard
            title={"QuestMap"}
            text={"Upload, Edit and plot your RPG journey"}
            thumbnail={WetterIcon}
            github={"https://github.com/PiraTechnics/questmap"}
            technologies={["Python", "Django", "LeafletJS"]}
          />
        </Col>
      </Row>
      <DownScroll navLink={"#contact"} />
    </Container>
  );
};

export default Projects;
