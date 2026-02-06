import  { useContext,useEffect } from 'react'
import Cardhelper from './card.helper'
import { showstate } from '../../App'

const Card = ({data=[]}) => {
    const {showall,scrollDir,setScrollDir}=useContext(showstate)

    
  useEffect(() => {
    if (showall) return

    const container = document.getElementById("card-scroll")
    if (!container) return

    const firstCard = container.querySelector(".card-item")
    if (!firstCard) return

    const cardWidth = firstCard.offsetWidth


    if (scrollDir === "left") {
      container.scrollBy({
        left: -cardWidth,
        behavior: "smooth"
      })
    }

    if (scrollDir === "right") {
      container.scrollBy({
        left: cardWidth,
        behavior: "smooth"
      })
    }

    setScrollDir(null)
  }, [scrollDir])
    
    return (
        <div id="card-scroll" className={showall? 'flex flex-wrap gap-2 p-2 items-center justify-center ': ' flex gap-2 overflow-x-auto scroll- p-2 m-2  ' 
            }>
            {
                data.map((el,i)=>{
                    return <Cardhelper key={i} {...el}/>
                })
            }
        </div>

    )
}

export default Card