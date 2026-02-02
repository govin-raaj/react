import { useState } from "react";


function Navbar({
    title = { text: '', class: '' },
    links = [{ name: '', url: '', class: '' }],
    classNav = ''
}) {

    const [menu, setMenu] = useState(false);

    return (
        <nav className={`${classNav}    fixed top-0 left-0 w-full flex items-center justify-between px-10 py-6  `}>

            <div className={`${title.class} text-white text-2xl font-bold`}>{title.text}</div>

            <div className="flex gap-8 md:text-lg  max-[426px]:hidden ">
                {links.map(((link, i) => {
                    return <a key={i} href={link.url} className={`${link.class} hover:scale-110  hover:text-cyan-300  duration-300 font-style: italic`}>{link.name}</a>
                }))}

            </div>

            
            <button className=" min-[426px]:hidden min-[300px]:font-bold hover:scale-110 hover:text-cyan-300  duration-300 " onClick={() => { setMenu(!menu) }}>☰</button>


            {menu &&
                <div className="min-[426px]:hidden grid gap-2 absolute top-10 right-4  p-3 rounded-md sm:hidden " >
                    {links.map(((link, i) => {
                        return <a key={i} href={link.url} className={`${link.class} hover:scale-110  hover:text-cyan-300  duration-300 font-style: italic`} onClick={() => setMenu(false)}>{link.name}</a>
                    }))}
                </div>
            }
        
        </nav>
    )
}

export default Navbar
