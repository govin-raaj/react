import React from 'react'
import Projectcard from './projectCard.component.jsx'
import projects from '../data/project.data.jsx'

export default function ProjectSection() {
  return (
          <div className='w-full px-6 md:px-20 sm:px-10 py-5 overflow-hidden flex flex-col gap-5 scroll-mt-20 mt-20' id='projects'>
  
              <div className='text-center mb-10'>
                  <h1 className='font-extrabold md:text-5xl text-4xl  mb-3  hover:scale-105 hover:text-cyan-400 duration-500'>Featured Projects</h1>
                  <p className='max-w-xl mx-auto text-center md:text-lg '>A showcase of my work in artificial intelligence, machine learning, and full-stack development. Each project demonstrates practical applications of cutting-edge technologies.</p>
              </div>
  
                
            <div className='flex gap-6 sm:gap-8 md:gap-10 overflow-x-auto p-5'>
               <Projectcard title={projects[0].title} description={projects[0].description} subheading={projects[0].tag} features={projects[0].keyFeatures} skillset={projects[0].tech}/>
               <Projectcard title={projects[1].title} description={projects[1].description} subheading={projects[1].tag} features={projects[1].keyFeatures} skillset={projects[1].tech}/>
               <Projectcard title={projects[2].title} description={projects[2].description} subheading={projects[2].tag} features={projects[2].keyFeatures} skillset={projects[2].tech}/>
               <Projectcard title={projects[3].title} description={projects[3].description} subheading={projects[3].tag} features={projects[3].keyFeatures} skillset={projects[3].tech}/>
               
            </div>
          </div>
  )
}
