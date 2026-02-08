import { useState, useEffect, createContext, Component } from 'react'
import {Routes, createBrowserRouter,RouterProvider } from "react-router";
import Navbar from './components/navbar/navbar.component.jsx'
import information from './data/about.data'
import Center from './components/section/center.component.jsx'
import About from './components/section/about.component.jsx'
import ProjectSection from './components/section/project/project.component.jsx'
import Footer from './components/navbar/footer.component.jsx'
import projects from './data/project.data.jsx'
import Form from './components/addons/form.jsx'
import HomePage from './components/pages/home.page.jsx'
import ContactPage from './components/pages/contact.page.jsx';
import AboutPage from './components/pages/About.page.jsx';
import ProjectPage from './components/pages/project.page.jsx';
import NotFOund from './components/pages/NotFOund.jsx';


// const contactContext = createContext()
const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/contact",
    Component: ContactPage,
  },
  {
    path:'/about',
    Component:AboutPage,
  },
    {
    path:'/projects',
    Component:ProjectPage,
  },
  {
    path:'*',
    Component:NotFOund
  }
]);



function App() {

  // const [loading, setLoading] = useState(true)
  // const [contact, setContact] = useState(false)



  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false)
  //   }, 5000)

  //   return () => {
  //     clearTimeout(timer)
  //   }
  // }, [])

  return (
    <>

    <RouterProvider router={router} />;




    </>
  )
}

export default App
// export { contactContext }





// <div className='relative '>

//       {loading && (
//         <div className='fixed z-20 h-screen w-full'>
//           <Loader />
//         </div>
//       )}



//       <div className="min-h-screen w-full bg-[#14213d] text-white relative overflow-hidden z-10" >

//         <contactContext.Provider value={{ contact, setContact }}>
//           <Navbar title={{ text: 'GR', class: 'font-style: italic' }}
//             links={[{ name: 'Home', url: "#home" }, { name: "About", url: "#about" }, { name: "Projects", url: "#projects" }, { name: "Contact", url: "#contact" }]} />
//         </contactContext.Provider>

//         <Center {...information.home} />
//         <About />
//         <ProjectSection projects={projects} />

//         {
//           contact && (
//             <Form />
//           )
//         }
//         <Footer />

//       </div>

//     </div>



