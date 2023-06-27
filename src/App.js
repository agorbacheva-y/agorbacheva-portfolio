import { BrowserRouter } from 'react-router-dom';
import Appbar from "./components/Appbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import FormSent from "./components/FormSent";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Appbar />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      {/* <FormSent /> */}
    </BrowserRouter>
  );
}

export default App;
