import { useContext, useEffect } from 'react'
import Cardhelper from './card.helper'
import { showstate } from '../../App'

const Card = ({ data = [] }) => {
  const { showall, scrollDir, setScrollDir } = useContext(showstate)


  useEffect(() => {
    if (showall) return

    const container = document.getElementById("card-scroll")
    if (!container) return


    if (scrollDir === "left") {
      container.scrollBy({
        left: -container.offsetWidth,
        behavior: "smooth"
      })
    }

    if (scrollDir === "right") {
      container.scrollBy({
        left: container.offsetWidth,
        behavior: "smooth"
      })
    }

    setScrollDir(null)
  }, [scrollDir])

  return (
    <div id="card-scroll" className={showall ? 'flex flex-wrap gap-1 p-2 m-2 items-center w-1/2' : ' flex gap-2 overflow-x-auto scroll- p-1 items-center m-2 w-1/2 scrollbar-hide'}>

      {data.map((el, i) => {
        return <Cardhelper key={i} {...el} />
      })}



    </div>

  )
}

export default Card