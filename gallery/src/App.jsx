import { createContext, useState } from 'react'
import Navbar from './components/navbar/navbar'
import Card from './components/card/card'
import cardsData from './data/card'

const showstate = createContext()

function App() {
  const [showall, setShowall] = useState(false)
  const [scrollDir, setScrollDir] = useState(null)


  return (
    <>
      <showstate.Provider value={{ showall, setShowall, scrollDir, setScrollDir }}>

        <Navbar heading={{ text: 'Port of Calls' }}
          links={[{ text: 'see all', class: 'rounded-xl underline', onClick: () => setShowall(prev => !prev) },
          { text: '<-', class: 'rounded-xl ', onClick: () => setScrollDir("left") },
          { text: '->', class: 'rounded-xl ', onClick: () => setScrollDir("right") }
          ]} />

        <Card data={cardsData} />

      </showstate.Provider>
    </>
  )
}

export default App
export { showstate }
