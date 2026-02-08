import projects from "../../data/project.data";
import Footer from "../navbar/footer.component";
import Navbar from "../navbar/navbar.component";

import ProjectSection from "../section/project/project.component";


function ProjectPage() {
  return (
    <div className="min-h-screen w-full bg-[#14213d] text-white relative overflow-hidden z-10">
      <Navbar
        title={{ text: 'GR', class: 'italic' }}
        links={[
          { name: 'Home', url: "/" },
          { name: "About", url: "/about" },
          { name: "Projects", url: "/projects" },
          { name: "Contact", url: "/contact" }
        ]}
      />
      <ProjectSection projects={projects} />
      <Footer />
    </div>
  );
}

export default ProjectPage