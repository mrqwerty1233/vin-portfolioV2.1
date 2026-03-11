import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import LoadingScreen from "./components/LoadingScreen"
import CustomCursor from "./components/CustomCursor"
import ThemeToggle from "./components/ThemeToggle"
import ProjectDetail from "./pages/ProjectDetail"
import { useEffect, useState } from "react"

function HomePage() {
  return (
    <>
      <Navbar />
      <ThemeToggle />

      <main>
        <section id="home">
          <Hero />
          <div className="section-divider" />
        </section>

        <section id="about">
          <About />
          <div className="section-divider" />
        </section>

        <section id="skills">
          <Skills />
          <div className="section-divider" />
        </section>

        <section id="projects">
          <Projects />
          <div className="section-divider" />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  )
}

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1800)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <CustomCursor />

      {isLoading ? (
        <LoadingScreen />
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
        </Routes>
      )}
    </>
  )
}

export default App