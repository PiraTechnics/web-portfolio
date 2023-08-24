import { Container, Row, Col, Image, Card } from "react-bootstrap";
import DownScroll from "./utils/DownScroll";
import TravelIcon from "../images/interesticons/airplane-departure.svg";
import GameIcon from "../images/interesticons/console-controller.svg";
import DiceIcon from "../images/interesticons/dice-twenty-faces-twenty.svg";
import BookIcon from "../images/interesticons/spell-book.svg";

const Interests = () => {
  return (
    <Container
      id="interests"
      className="py-5 mt-3 section-container d-flex flex-column"
      fluid
    >
      <Row>
        <div className="text-center">
          <h2>Interests</h2>
          My hobbies and passions outside of coding
        </div>
      </Row>
      <Row className="p-5 pt-3 justify-content-center">
        <Col
          xs={10}
          sm={6}
          lg={3}
          className="my-5 d-flex align-items-center justify-content-center"
        >
          <Card className="interest-card">
            <Card.Img
              variant="top"
              src={DiceIcon}
              className="card-img px-5 py-3"
            />
            <hr className="m-1 border-2 opacity-50" />
            <Card.Body className="card-body">
              <Card.Title>Tabletop RPGs</Card.Title>
              <Card.Text>
                I play and GM a variety of tabletop adventure games, & pen and
                publish my own.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col
          xs={10}
          sm={6}
          lg={3}
          className="my-5 d-flex align-items-center justify-content-center"
        >
          <Card className="interest-card">
            <Card.Img
              variant="top"
              src={BookIcon}
              className="card-img px-5 py-3"
            />
            <hr className="m-1 border-2 opacity-50" />
            <Card.Body className="card-body">
              <Card.Title>Reading</Card.Title>
              <Card.Text>
                I collect and read quality editions of fantasy, horror and
                science-fiction stories.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col
          xs={10}
          sm={6}
          lg={3}
          className="my-5 d-flex align-items-center justify-content-center"
        >
          <Card className="interest-card">
            <Card.Img
              variant="top"
              src={GameIcon}
              className="card-img px-5 py-3"
            />
            <hr className="m-1 border-2 opacity-50" />
            <Card.Body className="card-body">
              <Card.Title>Video Games</Card.Title>
              <Card.Text>
                I enjoy PC and console games, any anything with a big world to
                explore.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col
          xs={10}
          sm={6}
          lg={3}
          className="my-5 d-flex align-items-center justify-content-center"
        >
          <Card className="interest-card">
            <Card.Img
              variant="top"
              src={TravelIcon}
              className="card-img px-5 py-3"
            />
            <hr className="m-1 border-2 opacity-50" />
            <Card.Body className="card-body">
              <Card.Title>Travel</Card.Title>
              <Card.Text>
                I've been to <strong>19</strong> countries,
                <strong>13</strong> US states, <strong>42</strong> cities and
                counting!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <DownScroll navLink={"#projects"} />
    </Container>
  );
};

export default Interests;
