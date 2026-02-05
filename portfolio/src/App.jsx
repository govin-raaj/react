import { useState, useEffect } from 'react'
import Navbar from './components/navbar.component'
import information from './data/about.data'
import Center from './components/center.component'
import About from './components/about.component'
import ProjectSection from './components/project.component'
import Footer from './components/footer.component'
import projects from './data/project.data.jsx'
import Form from './components/form.jsx'
import Loader from './components/loader.jsx'

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 5000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
      {loading && (
        <Loader />
      )}

      {!loading && (
        <div className="min-h-screen w-full bg-[#14213d] text-white relative overflow-hidden z-10" >
          <Navbar title={{ text: 'GR', class: 'font-style: italic' }}
            links={[{ name: 'Home', url: "#home" }, { name: "About", url: "#about" }, { name: "Projects", url: "#projects" }, { name: "Contact", url: "#contact" }]} />

          <Center {...information.home} />
          <About />
          <ProjectSection projects={projects} />
          <Form />
          <Footer />

        </div>
      )}



    </>
  )
}

export default App
