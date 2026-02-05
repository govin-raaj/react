import React from 'react'
import Btn from '../buttons/btn'

const Navbar = ({
    heading={text:'',class:''},
    links=[{text:'',url:'',class:''}],
    classname=''
}) => {
  return (
    <nav className={`w-full p-4 flex items-center justify-between shadow-xl  ${classname}`}>
        <h1 className={`text-4xl font-bold text-black  ${heading.class}`}>{heading.text}</h1>

        <div>
            {links.map((el,i)=>{return( <Btn key={i} text={el.text} classname={el.class}/>)}
            )}
        </div>
    </nav>
  )
}
export default Navbar
