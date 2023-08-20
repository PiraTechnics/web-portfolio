import Header from "./Header";
import Intro from "./Intro";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Skills from "./Skills";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Intro />
      <Container
        data-bs-spy="scroll"
        data-bs-target=".navbar"
        data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true"
      >
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Container>
    </>
  );
};

export default App;
