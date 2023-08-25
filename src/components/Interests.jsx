import { Container, Row, Col, Image, Card } from "react-bootstrap";
import DownScroll from "./utils/DownScroll";
import TravelIcon from "../images/interesticons/airplane-departure.svg";
import GameIcon from "../images/interesticons/console-controller.svg";
import DiceIcon from "../images/interesticons/dice-twenty-faces-twenty.svg";
import BookIcon from "../images/interesticons/spell-book.svg";
import SectionHeader from "./utils/SectionHeader";

const Interests = () => {
  return (
    <Container
      id="interests"
      className="py-5 mt-3 section-container d-flex flex-column"
      fluid
    >
      <SectionHeader
        title={"Interests"}
        subtitle={"My hobbies and passions outside of coding"}
      />
      <Row className="p-2 justify-content-center">
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
            <Card.Body>
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
            <Card.Body>
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
            <Card.Body>
              <Card.Title>Video Games</Card.Title>
              <Card.Text>
                I enjoy PC and console games, and anything with a big world to
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
            <Card.Body>
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
