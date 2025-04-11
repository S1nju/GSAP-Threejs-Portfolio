
import Education from "./components/Education"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

function App() {
  return (
   <main className="bg-transparent" style={{backgroundColor:'transparent'}}>
    <NavBar />
    <Hero />

    <Skills/>
    <Education />
    <Experience/>
    <Projects/>

    <Footer />
   </main>
  )
}

export default App
