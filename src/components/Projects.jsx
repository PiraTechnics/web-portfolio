import { Container, Row } from "react-bootstrap";
import ProjectCard from "./utils/ProjectCard";
import NCAARecall from "../images/projecticons/Football.png";
import Wetter from "../images/projecticons/Wetter.png";
import QuestMap from "../images/projecticons/QuestMap.png";
import Prio from "../images/projecticons/Prio.png";
import WisdomBall from "../images/projecticons/WisdomBall.png";
import Biblog from "../images/projecticons/Biblog.png";
import Aliems from "../images/projecticons/Aliems.png";
import SectionHeader from "./utils/SectionHeader";

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
				<ProjectCard
					title={"Football Recall"}
					text={
						"Test your memory of the AP top 25 teams, and score all the points!"
					}
					thumbnail={NCAARecall}
					github={"https://github.com/PiraTechnics/top-25-recall"}
					external={"https://zesty-crisp-40253b.netlify.app/"}
					technologies={["React", "Bootstrap", "Vite.js"]}
				/>
				<ProjectCard
					title={"Wetter"}
					text={"A responsive, location-based weather application"}
					thumbnail={Wetter}
					github={"https://github.com/PiraTechnics/wetter"}
					external={"https://piratechnics.github.io/wetter/"}
					technologies={["React", "Bootstrap", "Vite.js"]}
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
					thumbnail={Prio}
					github={"https://github.com/PiraTechnics/Prio"}
					external={"https://piratechnics.github.io/Prio/"}
					technologies={["React", "Bootstrap"]}
				/>
				<ProjectCard
					title={"WisdomBall"}
					text={"Ponder the orb to receive nuggets of wisdom"}
					thumbnail={WisdomBall}
					github={"https://github.com/PiraTechnics/wisdomball"}
					external={"https://piratechnics.github.io/wisdomball/"}
					technologies={["Vanilla JS", "CSS"]}
				/>
				<ProjectCard
					title={"Aliems!"}
					text={"A fun and easy Space Invaders clone"}
					thumbnail={Aliems}
					github={"https://github.com/PiraTechnics/aliems"}
					technologies={["Python", "Pygame"]}
				/>
			</Row>
		</Container>
	);
};

export default Projects;
