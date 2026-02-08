import { useState } from "react";
import { NavLink } from "react-router-dom";



function Navbar({
    title = { text: '', class: '' },
    links = [{ name: '', url: '', class: '' }],
    classNav = ''
}) {

    // const {contact,setContact} = useContext(contactContext)
    const [menu, setMenu] = useState(false);

    return (
        <nav className={`fixed  w-full flex items-center justify-between px-10 py-6 bg-[#14213d] rounded-b-xl shadow-xl shadow-[#14213d] ${classNav}  `}>

            <div className={` text-white text-2xl font-bold ${title.class}`}>{title.text}</div>

            <div className="flex gap-8 md:text-lg  max-[426px]:hidden ">
                {links.map(((link, i) => {
                    return <NavLink key={i} to={link.url} 
                    // onClick={() => link.name === "Contact" && setContact(p=>!p)} 
                    className={({ isActive }) => `hover:scale-110  hover:text-[#f77f00] duration-300 font-style: italic 
                    ${isActive?'text-red-600':""} ${link.class} `}>
                        {link.name}</NavLink>
                }))}

            </div>

            
            <button className=" min-[426px]:hidden min-[300px]:font-bold hover:scale-110 hover:text-cyan-300  duration-300 " onClick={() => { setMenu(!menu) }}>☰</button>


            {menu &&
                <div className="min-[426px]:hidden grid gap-2 absolute top-10 right-4  p-3 rounded-md sm:hidden " >
                    {links.map(((link, i) => {
                        return <NavLink key={i} to={link.url} 
                        className={({ isActive }) => `hover:scale-110  hover:text-[#f77f00]  duration-300 font-style: italic  
                        ${isActive?'text-red-600':""} ${link.class}`} 
                        onClick={() => setMenu(false)}>{link.name}</NavLink>
                    }))}
                </div>
            }
        
        </nav>
    )
}

export default Navbar
