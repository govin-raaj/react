function Hero() {
  return (
    <section className="bg-gray-900 text-white px-6 py-20 text-center">
      <h1 className=" text-4xl md:text-5xl font-bold mb-6">
        Hi, I'm Govin 👋
      </h1>
       <p className="text-gray-300 max-w-2xl mx-auto mb-10 ">
        I'm an <span className="text-purple-400 font-semibold">AI / MLOps Engineer </span> 
        building end-to-end machine learning systems — from data ingestion and model
        training to CI/CD pipelines and cloud deployment on AWS.
      </p>
      
        <a href="https://github.com/govin-raaj">
      <img src="https://imgs.search.brave.com/_lRl2LgDXSsmEagoHoewfn6-VOBe8kVlT-hg-e8OMLM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzI5L2U0/Lzc2LzI5ZTQ3Njk2/ZmU0MGVkZDc2NGQ4/NTNlNTRlYTk0ODFl/LmpwZw" 
       className="mx-auto mt-5 rounded-full w-25 h-25 hover:scale-110" />
       </a>

      <button className="bg-purple-600 px-6 py-3 rounded-md mt-4 hover:bg-purple-500"  > 
        Github
      </button>

      
    </section>
  )
}

export default Hero
