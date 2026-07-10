import Nav from './components/Nav.jsx'
import SectionProgress from './components/SectionProgress.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import TechStack from './components/TechStack.jsx'
import Projects from './components/Projects.jsx'
import Certificates from './components/Certificates.jsx'
import Timeline from './components/Timeline.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <SectionProgress />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Certificates />
        <Timeline />
        <Contact />
      </main>
    </>
  )
}
