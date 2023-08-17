import AppLink from "./AppLink";
import WetterIcon from "./assets/wetter-icon.png";
import { FcTodoList, FcCalculator } from "react-icons/fc";
import { TbCrystalBall } from "react-icons/tb";
import { GiBookshelf } from "react-icons/gi";
import { Container, Row, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const Projects = () => {
  return (
    <Container fluid style={{ marginTop: "75px" }}>
      <Row>
        <AppLink
          icon={<Image src={WetterIcon} alt="wetter cloud icon"></Image>}
          link={"https://piratechnics.github.io/wetter"}
          title={"Wetter"}
          subtitle={"The Better Weather App"}
        />
        <AppLink
          icon={<FcTodoList size={75} />}
          link={"https://piratechnics.github.io/Prio/"}
          title={"Prio"}
          subtitle={"Your Tasklist, Prioritized"}
        />
        <AppLink
          icon={<TbCrystalBall size={65} />}
          link={"https://piratechnics.github.io/wisdomball/"}
          title={"Wisdomball"}
          subtitle={"A most ponderous Orb"}
        ></AppLink>
        <AppLink
          icon={<GiBookshelf size={65} color={"#624a2e"} />}
          link={"https://piratechnics.github.io/BibLog/"}
          title={"BibLog"}
          subtitle={"Record your reading"}
        ></AppLink>
        <AppLink
          icon={<FcCalculator size={75} />}
          link={"https://piratechnics.github.io/odin-project-calculator/"}
          title={"Calc5000"}
          subtitle={"Crunch the Numbers"}
        ></AppLink>
      </Row>
    </Container>
  );
};

export default Projects;
