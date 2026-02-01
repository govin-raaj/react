const projects = [
  {
    id: 1,
    title: "RAG Chatbot",
    tag: "ai",
    description:
      "An end-to-end Retrieval-Augmented Generation (RAG) chatbot that combines document retrieval with large language models to deliver accurate, context-aware responses. Built with FastAPI and LangChain, containerized using Docker, and deployed on AWS for scalable inference and low-latency performance.",
    image: {
      src: "https://images.icon-icons.com/3685/PNG/512/github_logo_icon_229278.png",
      alt: "RAG Chatbot",
    },
    tech: ["FastAPI", "LangChain", "OpenAI API", "Vector DB", "Docker", "AWS"],
    keyFeatures: [
      "Context-aware question answering",
      "Document ingestion and embedding pipeline",
      "Semantic search using vector database",
      "RESTful API with FastAPI",
      "Dockerized deployment on AWS",
    ],
    repo: "https://github.com/govin-raaj/Rag_chatbot",
    demo: "#",
  },
  {
    id: 2,
    title: "Portfolio Website",
    tag: "frontend",
    description:
      "A modern, responsive personal portfolio showcasing projects, skills, and experience. Built using React and Tailwind CSS with a focus on clean UI, smooth animations, and performance optimization.",
    image: {
      src: "https://images.icon-icons.com/3685/PNG/512/github_logo_icon_229278.png",
      alt: "Portfolio Website",
    },
    tech: ["React", "Tailwind CSS", "Vite", "JavaScript"],
    keyFeatures: [
      "Fully responsive design across devices",
      "Reusable and modular React components",
      "Optimized build with Vite",
      "Smooth UI interactions and animations",
      "Clean and accessible UI layout",
    ],
    repo: "https://github.com/govin-raaj/portfolio",
    demo: "#",
  },
  {
    id: 3,
    title: "Vehicle Insurance Prediction",
    tag: "ml",
    description:
      "A machine learning project that predicts whether a customer is likely to purchase vehicle insurance based on demographic and vehicle-related features. Includes data preprocessing, feature engineering, and model evaluation.",
    image: {
      src: "https://images.icon-icons.com/3685/PNG/512/github_logo_icon_229278.png",
      alt: "Vehicle Insurance Prediction",
    },
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
    ],
    keyFeatures: [
      "Exploratory data analysis (EDA)",
      "Feature engineering and data preprocessing",
      "Multiple ML model comparison",
      "Model evaluation using accuracy and ROC-AUC",
      "Clear visualization of results",
    ],
    repo: "https://github.com/govin-raaj/",
    demo: "#",
  },
  {
    id: 4,
    title: "Plant Classification",
    tag: "dl",
    description:
      "A deep learning-based image classification system that identifies plant species from leaf images using convolutional neural networks.",
    image: {
      src: "https://images.icon-icons.com/3685/PNG/512/github_logo_icon_229278.png",
      alt: "Plant Classification",
    },
    tech: [
      "Python",
      "TensorFlow",
      "Keras",
      "CNN",
      "OpenCV",
      "Matplotlib",
    ],
    keyFeatures: [
      "Image preprocessing and augmentation",
      "CNN-based classification model",
      "Training and validation performance tracking",
      "Evaluation on unseen test images",
      "Visualization of predictions",
    ],
    repo: "https://github.com/govin-raaj/portfolio",
    demo: "#",
  },
];

export default projects;
