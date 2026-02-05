import React from 'react'

const Navbar = ({
    title={text:'',class:''},
    btn={text:'',class:''}
}) => {
  return (
    <nav className='fixed flex w-full h-20 items-center justify-between px-10 py-5 shadow-2xl '>
      <div>
        <h1 className={`font-bold text-black text-6xl ${title.class}`}>{title.text} Port of Calls</h1>
      </div>
    </nav>
  )
}

export default Navbar