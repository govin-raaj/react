import { useState , useEffect} from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [noAllowed , setNoAllowed]=useState(false)
  const [charAllowed,setCharAlwd]=useState(false)
  const [pass,setPass]=useState("")


  function passgen(){
    let pass='';
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(noAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%&*"

    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }

    setPass(pass)
  }

  useEffect(()=>{
    passgen()
  },[length,noAllowed,charAllowed])

  
  return (
    <>
      <div className=' ring-2 p-3 m-2'>
        <div>
          <h1 className='font-bold text-2xl text-center'>Password Generator</h1>
        </div>

        <div className='flex rounded-3xl shadow-xl overflow-hidden bg-white p-2 px-4 justify-between mb-3'>
         <input
          type='text'
          value={pass}
          placeholder='Password'
          className='font-bold text-red bg-violet-400 rounded-2xl px-2 w-100 '
          readOnly
        /> 
        <button className='bg-violet-500 rounded-2xl font-bold p-2'>Copy</button>

       </div>

       <div className='flex gap-4 '>
         <input
          type='range'
          min={6}
          max={40}
          value={length}
          className=''
          onChange={(e)=> setLength(e.target.value)}
        /> 
        <label className='font-bold'>length: {length}</label>

        <input
          type='checkbox'
          defaultChecked={noAllowed}
          id="numberInput"
          value={length}
          className=''
          onChange={(e)=> setNoAllowed((prev)=> !prev)}
        /> 
        <label className='font-bold'>Number</label>

        <input
          type='checkbox'
          defaultChecked={noAllowed}
          id="CharacterInput"
          value={length}
          className=''
          onChange={(e)=> setCharAlwd((prev)=> !prev)}
        /> 
        <label className='font-bold'>Characters</label>
       </div>



      </div>

    </>
  )
}

export default App



// <nav className='flex bg-gradient-to-r from-[#006466] to-[#212f45] text-white justify-between py-2 px-4 rounded-2xl m-2'>
        
//           <h1>navbar</h1>
        

//         <div className='flex gap-2 max-[425px]:hidden '>
//           <a>Home</a>
//           <a>Home</a>
//           <a>Home</a>
//         </div>

//         <button className='min-[425px]:hidden'>
//         =
//         </button>

//       </nav>