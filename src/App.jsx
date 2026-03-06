import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Interests from './components/Interests'
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
        <Experience />
        <Projects />
      </main>
      <Footer />
    </>
  )
}
