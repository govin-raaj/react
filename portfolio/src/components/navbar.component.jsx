import { useState } from "react";


function Navbar({
    title = { text: '', class: '' },
    links = [{ name: '', url: '', class: '' }],
    classNav = ''
}) {

    const [menu, setMenu] = useState(false);

    return (
        <nav className={`${classNav} relative relative z-10 flex items-center justify-between px-10 py-6   `}>

            <div className={`${title.class} text-xl font-bold`}>{title.text}</div>

            <div className="flex gap-8 text-sm text-gray-300 max-[426px]:hidden">
                {links.map(((link, i) => {
                    return <a key={i} href={link.url} className={`${link.class} hover:scale-110 font-style: italic`}>{link.name}</a>
                }))}

            </div>


            <button className="min-[426px]:hidden min-[300px]:font-bold hover:scale-110" onClick={() => { setMenu(!menu) }}>☰</button>


            {menu &&
                <div className="grid gap-2 absolute top-10 right-8  p-3 rounded-md sm:hidden " >
                    {links.map(((link, i) => {
                        return <a key={i} href={link.url} className={`${link.class}hover:scale-110 font-style: italic`} onClick={() => setMenu(false)}>{link.name}</a>
                    }))}
                </div>
            }

        </nav>
    )
}

export default Navbar
