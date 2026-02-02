import React from 'react'

export default function Techcard({title="",skills=[]}) {
  return (
    <div className='mt-2'>
        <h3 className='font-semibold md:text-xl text-cyan-200 hover:scale-102 duration-300 hover:text-violet-300'>{title}</h3>
        <div className='flex flex-wrap w-full gap-2 mt-1'>
            {skills.map((skill,i)=>{
                return(
                    <div key={i} className='bg-violet-300 md:rounded-2xl rounded-xl md:px-4 px-2 md:py-0.5 text-center w-auto text-black hover:scale-105 hover:bg-cyan-500 transition duration-300'><p>{skill}</p></div>
                )
        })}
        </div>
    </div>
  )
}
