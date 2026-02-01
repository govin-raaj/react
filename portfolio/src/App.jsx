import { useState } from 'react'
import Navbar from './components/navbar.component'
import information from './data/about.data'
import Center from './components/center.component'
import About from './components/about.component'
import ProjectSection from './components/project.component'

function App() {

  return (
    <>
      <div className="min-h-screen w-full bg-gray-700 text-white relative overflow-hidden" >
        {/* <div className="absolute top-0 right-0 h-96 w-96 bg-blue-500/40 blur-3xl rounded-full " />
        <div className="absolute bottom-0 left-0 h-96 w-96 bg-purple-500/30 blur-3xl rounded-full" /> */}
        <Navbar title={{ text: 'GR', class: 'font-style: italic' }}
          links={[{ name: 'Home' },{name:"About"},{name:"Projects"}]} />

        <Center {...information.home}/>
        <About/>
        <ProjectSection/>
      </div>
    </>
  )
}

export default App
