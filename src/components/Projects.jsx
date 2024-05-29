import { Container, Row } from "react-bootstrap";
import ProjectCard from "./utils/ProjectCard";
import SectionHeader from "./utils/SectionHeader";
import { v4 as uuidv4 } from "uuid";
/* import BuyRule from "../images/projecticons/BuyRule.png";
import Bookshelf from "../images/projecticons/Bookshelf.png";
import NCAARecall from "../images/projecticons/Football.png";
import Wetter from "../images/projecticons/Wetter.png";
import QuestMap from "../images/projecticons/QuestMap.png";
import Prio from "../images/projecticons/Prio.png";
import WisdomBall from "../images/projecticons/WisdomBall.png";
import Aliems from "../images/projecticons/Aliems.png"; */

import { projects } from "../data.js";

const Projects = () => {
	return (
		<Container
			id="projects"
			fluid
			className="py-5 mt-3 section-container d-flex flex-column"
		>
			<SectionHeader
				title={"Portfolio"}
				subtitle={"Some of the things I've built"}
			/>
			<Row className="pt-4 justify-content-center">
				{projects.map((project) => (
					<ProjectCard
						key={uuidv4()}
						title={project.title}
						text={project.text}
						thumbnail={project.thumbnail}
						github={project.github}
						external={project.live}
						technologies={project.technologies}
					/>
				))}
			</Row>
		</Container>
	);
};

export default Projects;
