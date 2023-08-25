import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Interests from "./components/Interests";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import "bootstrap/js/src/scrollspy.js";
import { Container } from "react-bootstrap";

const App = () => {
  //Bootstrap 5 Browser issue workaround - See:
  //https://stackoverflow.com/questions/74783384/react-bootstrap-scrollspy-active-link-not-working-in-android-mobile-browser
  document.body.setAttribute("data-bs-spy", "scroll");
  document.body.setAttribute("data-bs-target", "#navbar-custom");
  document.body.setAttribute("data-bs-offset", "250");

  return (
    <>
      <Header />
      <Intro />
      <About />
      <Skills />
      <Interests />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
