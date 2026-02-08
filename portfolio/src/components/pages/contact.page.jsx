import Form from '../addons/form'
import Footer from "../navbar/footer.component";
import Navbar from "../navbar/navbar.component";


function ContactPage() {
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

      <Form />

      <Footer />
    </div>
  );
}

export default ContactPage