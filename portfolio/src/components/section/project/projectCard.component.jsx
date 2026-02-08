import React from 'react'
import Techcard from './techcard.component'

export default function Projectcard({ title = "", subheading = "", description = "", features = [], skillset = [], github = "" }) {
    return (
        <div className='flex flex-col gap-6  bg-gray-900 w-72 sm:w-80 md:w-96 rounded-2xl text-black p-4 shrink-0 justify-between hover:scale-105 duration-600 ' >
            <div>
                <h1 className='text-xl font-bold text-[#fca311] text-center hover:scale-103  duration-300'> {title}</h1>
                <p className='text-s font-medium text-violet-400 text-right px-3 hover:scale-103 duration-300'>{subheading}</p>
            </div>

            <div>
                <p className='text-white'>{description}</p>
            </div>

            <div>
                <h2 className=' font-bold text-[#bc6c25]'> key features:</h2>
                <ul className='text-[#e5e5e5] list-disc px-5'>
                    {features.map((feature, i) => (
                        <li  key={i}  className='hover:text-violet-300 duration-500'>{feature}</li>
                    ))}
                </ul>
            </div>

            <Techcard skills={skillset} />


         
            <a className='text-black text-center font-bold bg-[#e5e5e5] rounded-xl p-2 hover:scale-105 hover:text-[#fca311] duration-500' href={github} target='_blank'>Github</a>
        </div>
    )
}
