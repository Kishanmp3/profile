import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Interests from './components/Interests'
import Startups from './components/Startups'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Interests />
        <Startups />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </>
  )
}
