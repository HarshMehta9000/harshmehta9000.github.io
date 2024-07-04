import { useContext } from 'react';
import { ThemeContext } from './contexts/theme.js';
import Header from './components/Header/Header.js';
import About from './components/About/About.js';
import Projects from './components/Projects/Projects.js';
import Skills from './components/Skills/Skills.js';
import ScrollToTop from './components/ScrollToTop/ScrollToTop.js';
import Contact from './components/Contact/Contact.js';
import Footer from './components/Footer/Footer.js';
import Experience from './components/Experience/Experience.js';
import Education from './components/Education/Education.js';
import './App.css';

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default App;
