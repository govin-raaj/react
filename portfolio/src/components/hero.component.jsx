function HeroCard({name={text:"",class:""}, about={text:"",class:""},subheadings=[]}) {
    return (
        <div className="relative flex flex-col  items-center justify-center text-center px-6 mt-24 ">
            <h1 className="text-4xl md:text-6xl font-semibold mb-6  ">
                Hello, I'm <span className={`${name.class}font-bold`}>{name.text}</span>
            </h1>

            <p className={`${about.class}max-w-2xl text-gray-400 text-base md:text-lg mb-10`}>{about.text}</p>

            <div className="space-y-2 text-gray-300 mb-10">
                {subheadings.map(heading=>{
                   return <p> {heading}</p>
                })}
            </div>
            
            <button className="bg-white text-black px-6 py-3 rounded-xl font-medium shadow-lg hover:bg-gray-200 hover:scale-102 transition duration-500 ">
                Download My CV as PDF
            </button>
        </div>
    );
}

export default HeroCard