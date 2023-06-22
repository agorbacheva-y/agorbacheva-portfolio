import Appbar from "./components/Appbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import FormSent from "./components/FormSent";

function App() {
  return (
    <div>
      <Appbar />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <FormSent />
    </div>
  );
}

export default App;
