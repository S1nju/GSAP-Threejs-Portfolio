import Contact from "./components/Contact"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

function App() {
  return (
   <main className="bg-black">
    <NavBar />
    <Hero />
    <Education />
    <Skills/>
    <Experience/>
    <Projects/>
    <Contact />
    <Footer />
   </main>
  )
}

export default App
