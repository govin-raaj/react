import React from 'react'

export default function Techcard({title="",skills=[]}) {
  return (
    <div className='mt-2'>
        <h1 className='font-semibold text-xl text-cyan-200 '>{title}</h1>
        <div className='flex flex-wrap w-full gap-2 mt-1 '>
            {skills.map((skill,i)=>{
                return(
                    <div key={i} className='bg-violet-300 rounded-2xl px-4 py-0.5 text-center w-auto text-black'><p>{skill}</p></div>
                )
        })}
        </div>
    </div>
  )
}
