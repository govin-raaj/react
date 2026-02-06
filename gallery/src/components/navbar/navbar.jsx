import React from 'react'
import Btn from '../buttons/btn'
import Text from '../text/text'

const Navbar = ({
    heading={text:'',class:''},
    links=[{text:'',url:'',class:'',onClick}],
    classname=''
}) => {
  return (
    <nav className={`w-1/2 p-4 flex items-center justify-between shadow-xl m-2 overflow-hidden ${classname}`}>
        
        <Text type='h1' text={heading.text} className={`md:text-4xl text-xl font-bold text-black  ${heading.class}`} />

        <div >
            {links.map((el,i)=>{return( <Btn key={i} {...el} />)}
            )}
        </div>
    </nav>
  )
}
export default Navbar
