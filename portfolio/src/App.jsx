import { useState } from 'react'
import Navbar from './components/navbar.component'
import HeroCard from './components/hero.component'
import Card from './components/card.component'
import information from './data/about.data'

function App() {

  return (
    <>
      <div className="min-h-screen w-full bg-black text-white relative overflow-hidden" >
        <div className="absolute top-0 right-0 h-96 w-96 bg-blue-500/40 blur-3xl rounded-full " />
        <div className="absolute bottom-0 left-0 h-96 w-96 bg-purple-500/30 blur-3xl rounded-full" />
        <Navbar title={{ text: 'Govin', class: 'font-style: italic' }}
          links={[{ name: 'Home' },{name:"About"}]} />

          <HeroCard {...information.home} subheadings={['AI & Data Science · Machine Learning','React · Tailwind · UI Engineering','Frontend Developer · AI Engineer · Builder']} />
          
          <Card/>
      </div>
    </>
  )
}

export default App
