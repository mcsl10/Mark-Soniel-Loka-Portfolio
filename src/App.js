import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useRef } from "react";
import styled from "styled-components";

//Components
import NavBar from "./components/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth"});
  };

  return (
    <>
      <NavBar
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
    <EveryComponentSection ref={homeRef}>
        <Home />
    </EveryComponentSection>
    <EveryComponentSection ref={aboutRef}>
        <About />
    </EveryComponentSection>
    <EveryComponentSection ref={projectsRef}>
        <Projects />
    </EveryComponentSection>
    <EveryComponentSection ref={contactRef}>
        <Contact />
    </EveryComponentSection>
    </>
  );
};

const EveryComponentSection = styled.section`
min-height: 100vh;
max-width: 100vw;
padding-top: 6rem;
`

export default App;
