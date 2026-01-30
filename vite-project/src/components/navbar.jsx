import{useState} from "react";


function Navbar({
  title={text:'',class:''}, 
  links=[{name: '', url: '',class:''}], 
  classNav=''
}) {

  const [menu , setMenu] = useState(false);

  return (
    <nav className={`${classNav} relative   `}>
     
       <h1 className={title.class}>{title.text}</h1>

      <div className="sm:flex sm:gap-5 font-bold hidden ">
        {links.map(((link,i)=>{
          return <a key={i} href={link.url} className={link.class}>{link.name}</a>
        }))}
   
     </div>


      <button className="sm:hidden min-[300px]:font-bold hover:scale-110" onClick={() => {setMenu(!menu)}}>☰</button>


      {menu &&
        <div className="grid gap-2 absolute top-8 right-4  p-3 rounded-md sm:hidden bg-linear-45 from-[#C05850] to-[#E2AB7F] ring-2 ring-white" >
          {links.map(((link,i)=>{
            return <a key={i} href={link.url}  className={`${link.class}  text-white `} onClick={() => setMenu(false)}>{link.name}</a>
          }))}
        </div>
      }  

    </nav>
  )
}

export default Navbar
