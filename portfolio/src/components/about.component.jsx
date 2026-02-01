import React from 'react'
import Techcard from './techcard.component'

function About() {
    return (
        <div className='w-full h-screen px-6 md:px-16 '>

            <div >
                <h1 className='font-extrabold md:text-5xl text-4xl text-center mb-4 '>About</h1>
                <p className='w-1/2 mx-auto text-center  '>Passionate about building intelligent systems that solve real-world problems. Currently pursuing B.Tech in AI & Data Science with hands-on experience in machine learning, NLP, and full-stack development.</p>
            </div>

            <div className='flex mt-20 w-full gap-10 p-4'>
                <div className='w-1/2 '>
                    <h1 className='font-bold md:text-2xl text-xl text-left mb-2 '>Education</h1>

                    <div className='text-left' >
                        <h1 className='text-cyan-200 text-xl font-bold '>B.Tech - Artifical Intelligence and Data Science</h1>
                        <p className='text-violet-300 '> Guru Gobind Singh Indraprastha University, Delhi Oct 2022 - Aug 2026 • GPA: 7.8</p>
                    </div>

                </div>

                <div className=''>

                    <h1 className='font-bold md:text-2xl text-xl text-left mb-3 '>Technical Skills</h1>
                    <Techcard title='Programing languages' skills={["Python", "Java", "Js"]} />
                    <Techcard title='ML/AI Frameworks' skills={["Tensorflow", "LLMs", "RAG", "NLP", "Transformers"]} />
                    <Techcard title='Backend & APIs' skills={["Flask", "Django", "FastApi"]} />
                    <Techcard title='DevOps & Cloud' skills={["Docker", "Git", "GitHub", "AWS",]} />
                </div>
            </div>

        </div>
    )
}

export default About