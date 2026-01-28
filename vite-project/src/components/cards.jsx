const Projects = [
  {
    title: "RAG Chatbot",
    desc: "An end-to-end RAG (Retrieval-Augmented Generation) system demonstrating modern AI engineering practices — from document ingestion, text chunking, embedding generation, vector storage, semantic search, conversational response generation, Dockerization, CI/CD, to AWS EC2 deployment.",
    image: "https://imgs.search.brave.com/_lRl2LgDXSsmEagoHoewfn6-VOBe8kVlT-hg-e8OMLM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzI5L2U0/Lzc2LzI5ZTQ3Njk2/ZmU0MGVkZDc2NGQ4/NTNlNTRlYTk0ODFl/LmpwZw",
    tech: [
      "LLMs",
      "Vector Search",
      "Embeddings",
      "FastAPI",
      "Docker",
      "CI/CD",
      "AWS EC2",
      "ECR",
    ],
    github: "https://github.com/govin-raaj/Rag_chatbot",
  },
  {
    title: "Vehicle Insurance MLOps",
    desc: "An end-to-end MLOps pipeline demonstrating modern machine learning practices – from data ingestion, validation, transformation, training, model registry, CI/CD, to cloud deployment on AWS EC2.",
    image: "https://imgs.search.brave.com/_lRl2LgDXSsmEagoHoewfn6-VOBe8kVlT-hg-e8OMLM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzI5L2U0/Lzc2LzI5ZTQ3Njk2/ZmU0MGVkZDc2NGQ4/NTNlNTRlYTk0ODFl/LmpwZw",
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "MongoDB Atlas",
      "FastAPI",
      "Docker",
      "CI/CD",
      "AWS EC2",
    ],
    github: "https://github.com/govin-raaj/Vehicle-Insurance-",
  },
  {
    title: "Sentiment Analysis (EKS)",
    desc: "An end-to-end MLOps pipeline taking a machine learning model from development to production on AWS EKS, using MLflow for experiment tracking, DVC for data versioning, Docker for containerization, CI/CD via GitHub Actions, and Prometheus + Grafana for monitoring.",
    image: "https://imgs.search.brave.com/_lRl2LgDXSsmEagoHoewfn6-VOBe8kVlT-hg-e8OMLM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzI5L2U0/Lzc2LzI5ZTQ3Njk2/ZmU0MGVkZDc2NGQ4/NTNlNTRlYTk0ODFl/LmpwZw",
    tech: [
      "Python",
      "MLflow",
      "DVC",
      "Docker",
      "AWS EKS",
      "GitHub Actions",
      "Prometheus",
      "Grafana",
    ],
    github: "https://github.com/govin-raaj/Movie_sentiment_analysis",
  },
]

function Cards() {
  return (
    <section className="bg-gray-100 px-6 py-20">
      <h2 className="text-3xl font-bold text-center mb-14">
        Projects
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {Projects.map((project, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col"
          >
        
            <img
              src={project.image}
              alt={project.title}
              className="h-48 w-full object-cover"
            />

        
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-700 text-sm mb-4 leading-relaxed flex-1">
                {project.desc}
              </p>

           
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto text-center bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800 transition"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Cards
