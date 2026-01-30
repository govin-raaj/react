import { useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Card from "./components/cards";
import heroVariants from "./data/heroVariants";
import projects from "./data/projects";
import FilterBar from "./components/filterbar";

function App() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <>
      <Navbar
        title={{
          text: "My Portfolio",
          class:
            "text-grey-500 sm:font-bold sm:text-2xl max-[300px]:text-sm hover:scale-110 duration-100",
        }}
        links={[
          { name: "Home", url: "", class: "text-black font-medium hover:scale-110 duration-100" },
          { name: "Features", url: "#", class: "text-black font-medium hover:scale-110 duration-100" },
          { name: "Contact", url: "#", class: "text-black font-medium hover:scale-110 duration-100" },
        ]}
        
        classNav="flex items-center justify-between px-4 rounded-full py-2 mx-3 my-3 bg-gradient-to-r from-[#2A7B9B] via-[#57C785] to-[#EDDD53] ring-2 ring-white "
      />

      <Hero {...heroVariants.home} />

      <FilterBar
        activeCategory={activeCategory}
        onChange={setActiveCategory}
      />

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {filteredProjects.map((project) => (
          <Card key={project.id} {...project} />
        ))}
      </section>

      <Hero {...heroVariants.contact} />
    </>
  );
}

export default App;
