import {
  Container,
  Row,
  Col,
  Image,
  ToggleButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import DownScroll from "./utils/DownScroll";
import { useState } from "react";

const Skills = () => {
  let [skillSet, setSkillSet] = useState("dev");
  const handleChange = (val) => setSkillSet(val);

  /* Vite-specific bulk import, map to Image Components */
  let iconImport, iconList;

  const devImport = import.meta.glob("../images/devicons/*", {
    as: "url",
    eager: true,
  });

  const toolImport = import.meta.glob("../images/toolicons/*", {
    as: "url",
    eager: true,
  });

  if (skillSet == "dev") {
    iconImport = devImport;
  } else if (skillSet == "tool") {
    iconImport = toolImport;
  }

  /* Define our icons based on whichever button is pressed -- dev by default*/
  /* ***NOTE: We may want to try a different method in future - display/hide and not toggle buttons*** */
  iconList = Object.values(iconImport).map((iconPath, key) => (
    <Col xs={4} sm={2} lg={1} key={"skill-icon-" + key} className="p-3">
      <Image src={iconPath} width={"65px"} className="skill-icon" />
    </Col>
  ));

  return (
    <Container
      id="skills"
      className="py-5 mt-3 section-container d-flex flex-column"
      fluid
    >
      <Row>
        <div className="text-center">
          <h2>Skills & Experience</h2>
          Some of the technologies I've worked with
        </div>
      </Row>
      <Row>
        <ToggleButtonGroup
          className="d-flex justify-content-center pt-4 pb-2"
          type="radio"
          name="skillTypes"
          defaultValue={skillSet}
          onChange={handleChange}
        >
          <ToggleButton
            variant="outline-success"
            id="skills-button"
            value={"dev"}
            className="toggle-tag"
          >
            Programming
          </ToggleButton>
          <ToggleButton
            variant="outline-success"
            id="tools-button"
            value={"tool"}
            className="toggle-tag"
          >
            Tools
          </ToggleButton>
        </ToggleButtonGroup>
      </Row>
      <Row className="p-5 pt-3">{iconList}</Row>
      <DownScroll navLink={"#interests"} />
    </Container>
  );
};

export default Skills;
