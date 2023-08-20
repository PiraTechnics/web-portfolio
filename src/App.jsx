import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";

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
