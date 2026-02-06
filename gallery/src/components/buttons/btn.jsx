import React from 'react'

const Btn = ({
    text='',
    classname='',
    onClick

}) => {
  return (
    <button className={`py-1 px-3 active:scale-95 cursor-pointer  ${classname} `}
     onClick={onClick}
    >{text}</button>
  )
}

export default Btn