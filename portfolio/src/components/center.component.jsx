import React from 'react'

function Center({name={text:"",class:""}, about={text:"",class:""},image=""}) {
  return (
    <div className="w-full h-screen flex flex-col-reverse md:flex-row justify-center items-center gap-12 md:px-16 px-6 ">


        <div className=' p-4 m w-full md:w-1/2  flex-col  items-center text-center md:text-left '>
           <h1 className="text-4xl md:text-6xl font-semibold mb-4  ">
                Hello, I'm <span className={`${name.class}font-bold`}>{name.text}</span>
            </h1>

            <p className={`${about.class}  text-gray-400 md:text-lg mb-10`}>{about.text}</p>

             <button className="mt-4 bg-white text-black px-6 py-3 rounded-xl font-medium shadow-lg hover:bg-gray-200 hover:scale-102 transition duration-500 ">
                 Resume</button>
        </div>

        <div className='h-65 w-65 md:w-80 md:h-80 overflow-hidden rounded-full shadow-xl shrink-0 '>
            <img className=' h-full w-full object-cover ' src={image} alt="profile pic" />
        </div>

    </div>
  )
}

export default Center