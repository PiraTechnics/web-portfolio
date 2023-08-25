import { Container, Row } from "react-bootstrap";
import DownScroll from "./utils/DownScroll";
import ProjectCard from "./utils/ProjectCard";
import Wetter from "../images/projecticons/Wetter.png";
import QuestMap from "../images/projecticons/QuestMap.png";

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
        <ProjectCard
          title={"Wetter"}
          text={"A responsive, location-based weather application"}
          thumbnail={Wetter}
          github={"https://github.com/PiraTechnics/wetter"}
          external={"https://piratechnics.github.io/wetter/"}
          technologies={["React", "Bootstrap", "ViteJs"]}
        />
        <ProjectCard
          title={"QuestMap"}
          text={
            "Upload, edit and plot your RPG journey alongside the whole party"
          }
          thumbnail={QuestMap}
          github={"https://github.com/PiraTechnics/questmap"}
          technologies={["Python", "Django", "LeafletJS"]}
        />
        <ProjectCard
          title={"Prio"}
          text={"A To-do list web application"}
          thumbnail={Wetter}
          github={"https://github.com/PiraTechnics/questmap"}
          technologies={["React", "Bootstrap"]}
        />
        <ProjectCard
          title={"Wisdom Ball"}
          text={"Ponder the orb to receive nuggets of wisdom"}
          thumbnail={Wetter}
          github={"https://github.com/PiraTechnics/questmap"}
          technologies={["Vanilla JS", "CSS"]}
        />
        <ProjectCard
          title={"Biblog"}
          text={"A simple web UI to keep track of your reading"}
          thumbnail={Wetter}
          github={"https://github.com/PiraTechnics/questmap"}
          technologies={["Vanilla JS", "Bootstrap"]}
        />
        <ProjectCard
          title={"Aliems!"}
          text={"A fun and easy Space Invaders clone"}
          thumbnail={Wetter}
          github={"https://github.com/PiraTechnics/questmap"}
          technologies={["Python", "Pygame"]}
        />
      </Row>
      <DownScroll navLink={"#contact"} />
    </Container>
  );
};

export default Projects;
