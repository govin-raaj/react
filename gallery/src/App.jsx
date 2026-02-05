import { useState } from 'react'
import Navbar  from './components/navbar/navbar'
import Card from './components/card/card'
import cardsData from './data/card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar heading={{text:'Port of Calls'}} links={[{text:'see all',class:'rounded-xl underline'},{text:'<-',class:'rounded-xl '},{text:'->',class:'rounded-xl '}]} />
     
     <Card data={cardsData} />
    </>
  )
}

export default App
