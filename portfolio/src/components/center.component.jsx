import React from 'react'

function Center({ name = { text: "", class: "" }, about = { text: "", class: "" }, image = "" }) {
  return (
    <div className="w-full min-h-screen flex flex-col-reverse md:flex-row justify-center items-center gap-12 md:px-16 px-6 overflow-hidden mt-20 scroll-mt-20" id='home'>


      <div className=' p-4 m w-full md:w-1/2 flex flex-col  md:items-center text-center md:text-left '>
        <h1 className="text-4xl md:text-6xl font-semibold mb-4">
          Hello, I'm <span className={`font-bold  hover:text-[#fca311] duration-500 ${name.class} `}>{name.text}</span>
        </h1>

        <p className={`md:text-lg text-[#fca311] mb-10 ${about.class}`}>{about.text}</p>

        <button className="mx-auto  bg-[#affc41] text-black px-6 py-3 rounded-xl font-medium shadow-lg hover:bg-gray-200 hover:scale-105 active:scale-95 duration-500 ">
          Resume</button>
      </div>

      <div className='h-65 w-65 md:w-80 md:h-80 overflow-hidden rounded-full shadow-xl shrink-0  hover:scale-110 duration-300 '>
        <img className=' h-full w-full object-cover  font-style: italic' src={image} alt="profile pic" />
      </div>

    </div>
  )
}

export default Center