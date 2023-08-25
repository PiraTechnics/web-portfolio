import GHIcon from "../../images/projecticons/github.svg";
import ExtIcon from "../../images/projecticons/external.svg";
import { Card, Row, Col, Image } from "react-bootstrap";

const ProjectCard = ({
  title,
  text,
  thumbnail,
  github,
  external,
  technologies,
}) => {
  return (
    <Col
      xs={10}
      sm={6}
      lg={3}
      className="my-3 d-flex align-items-center justify-content-center"
    >
      <Card className="border-0 text-start project-card" bg="dark-subtle">
        <Card.Img variant="top" src={thumbnail} />
        <Card.Body className="py-2">
          <Row>
            <Col xs>
              <Card.Title className="fw-semibold fst-italic fs-3">
                {title}
              </Card.Title>
            </Col>
            <Col xs={1} className="d-flex justify-content-end pe-3">
              <a
                href={external}
                target="_blank"
                rel="noopener"
                /* don't display external link if we havent provided one */
                style={{ display: external ? "block" : "none" }}
              >
                <Image src={ExtIcon} fluid style={{ maxWidth: "29px" }} />
              </a>
            </Col>
            <Col xs={1} className="d-flex justify-content-end">
              <a href={github} target="_blank" rel="noopener">
                <Image src={GHIcon} fluid style={{ maxWidth: "25px" }} />
              </a>
            </Col>
          </Row>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-secondary line-list">
          {technologies.map((tech, index) => {
            return <span key={index}>{tech}</span>;
          })}
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default ProjectCard;
