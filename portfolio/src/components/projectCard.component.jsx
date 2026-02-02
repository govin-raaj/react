import React from 'react'
import Techcard from './techcard.component'

export default function Projectcard({ title = "", subheading = "", description = "", features = [], skillset = [], github = "" }) {
    return (
        <div className='flex flex-col gap-6  bg-white w-72 sm:w-80 md:w-96 rounded-2xl text-black p-4 shrink-0 justify-between hover:scale-105 duration-600 ' >
            <div>
                <h1 className='text-xl font-bold text-black text-center hover:scale-103 hover:text-violet-800 duration-300'> {title}</h1>
                <p className='text-s font-medium text-violet-600 text-right px-3 hover:scale-103 hover:text-cyan-500 duration-300'>{subheading}</p>
            </div>

            <div>
                <p>{description}</p>
            </div>

            <div>
                <h2 className=' font-bold'> key features:</h2>
                <ul className='text-cyan-500 list-disc px-5'>
                    {features.map((feature, i) => (
                        <li  key={i}  className='hover:text-violet-400 duration-500'>{feature}</li>
                    ))}
                </ul>
            </div>

            <Techcard skills={skillset} />


         
            <a className='text-white text-center font-bold bg-black rounded-xl p-2 hover:scale-105 hover:text-cyan-500 duration-500' href={github} target='_blank'>Github</a>
        </div>
    )
}
