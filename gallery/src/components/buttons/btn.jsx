import React from 'react'

const Btn = ({
    text='',
    classname='',
}) => {
  return (
    <button className={`py-1 px-3 active:scale-95 cursor-pointer  ${classname} `}>{text}</button>
  )
}

export default Btn