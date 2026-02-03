import React from 'react'
import Techcard from './techcard.component'

function About() {
    return (
        <div className='w-full min-h-screen px-6 md:px-16 overflow-hidden py-5 scroll-mt-20 mt-20 ' id='about'>

            <div >
                <h1 className='font-extrabold md:text-5xl text-4xl text-center mb-4  hover:text-[#f9f495]  duration-500 '>About</h1>
                <p className='max-w-xl mx-auto text-center md:text-lg text-[#fca311] '>Passionate about building intelligent systems that solve real-world problems. Currently pursuing B.Tech in AI & Data Science with hands-on experience in machine learning, NLP, and full-stack development.</p>
            </div>

            <div className='flex md:mt-20 mt-10 w-full gap-10 p-4'>
                <div className='w-1/2 '>
                    <h2 className='font-bold md:text-2xl text-xl text-left mb-2 '>Education</h2>

                    <div className='text-left' >
                        <h3 className='text-[#d4a373] md:text-xl font-bold hover:scale-103 hover:text-[#ccd5ae] duration-500 '>B.Tech - Artifical Intelligence and Data Science</h3>
                        <p className='text-[#faedcd] hover:scale-103 hover:text-[#d4a373] duration-500  '> Guru Gobind Singh Indraprastha University, Delhi Oct 2022 - Aug 2026 • GPA: 7.8</p>
                    </div>

                </div>

                <div className=''>

                    <h2 className='font-bold md:text-2xl text-xl text-left mb-3 '>Technical Skills</h2>
                    <div >
                        <Techcard title='Programing languages' skills={["Python", "Java", "Js"]} />
                        <Techcard title='ML/AI Frameworks' skills={["Tensorflow", "LLMs", "RAG", "NLP", "Transformers"]} />
                        <Techcard title='Backend & APIs' skills={["Flask", "Django", "FastApi"]} />
                        <Techcard title='DevOps & Cloud' skills={["Docker", "Git", "GitHub", "AWS",]} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About