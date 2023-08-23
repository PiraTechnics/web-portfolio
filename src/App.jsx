import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";

const App = () => {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
