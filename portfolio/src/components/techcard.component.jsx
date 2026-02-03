import React from 'react'

export default function Techcard({title="",skills=[]}) {
  return (
    <div className='mt-2'>
        <h3 className='font-semibold md:text-xl text-[#faedcd] hover:scale-102 duration-300 hover:text-[#fca311]'>{title}</h3>
        <div className='flex flex-wrap w-full gap-2 mt-1'>
            {skills.map((skill,i)=>{
                return(
                    <div key={i} className='bg-[#e99032] md:rounded-2xl rounded-xl md:px-4 px-2 md:py-0.5 text-center w-auto text-black hover:scale-105 hover:bg-[#e5e5e5] transition duration-300'><p>{skill}</p></div>
                )
        })}
        </div>
    </div>
  )
}
