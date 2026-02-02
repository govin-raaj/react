import { useState } from 'react'
import Navbar from './components/navbar.component'
import information from './data/about.data'
import Center from './components/center.component'
import About from './components/about.component'
import ProjectSection from './components/project.component'
import Footer from './components/footer.component'
import projects from './data/project.data.jsx'

function App() {

  return (
    <>
      <div className="min-h-screen w-full bg-gradient-to-r from-gray-800 to-gray-400 text-white relative overflow-hidden " >
        <Navbar title={{ text: 'GR', class: 'font-style: italic' }}
          links={[{ name: 'Home', url: "#home" }, { name: "About", url: "#about" }, { name: "Projects", url: "#projects" }]} />

        <Center {...information.home} />
        <About />
        <ProjectSection projects={projects} />
        <Footer />

      </div>
    </>
  )
}

export default App
