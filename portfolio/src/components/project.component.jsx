import Projectcard from './projectCard.component.jsx'

export default function ProjectSection({ projects }) {
  return (
    <div className='w-full px-6 md:px-20 sm:px-10 py-5 overflow-hidden flex flex-col gap-5 scroll-mt-20 mt-20' id='projects'>

      <div className='text-center mb-10'>
        <h1 className='font-extrabold md:text-5xl text-4xl  mb-3  hover:scale-105 hover:text-cyan-400 duration-500'>Featured Projects</h1>
        <p className='max-w-xl mx-auto text-center md:text-lg '>A showcase of my work in artificial intelligence, machine learning, and full-stack development. Each project demonstrates practical applications of cutting-edge technologies.</p>
      </div>


      <div className='flex gap-6 sm:gap-8 md:gap-10 overflow-x-auto p-5  '>
        {
          projects.map((detail, i) => (
            <Projectcard key={i} title={detail.title} description={detail.description} subheading={detail.tag} features={detail.keyFeatures} skillset={detail.tech} github={detail.repo} />
          ))
        }
      </div>
    </div>
  )
}
