import { useState } from 'react'


function App() {

  const [counters, setCounters] = useState([{value:0,step:1}, {value:0,step:1},{value:0,stp:1}])

  const [theme,setTheme]=useState("light")

  const increment = (index) => {
    setCounters(prev=> prev.map((counter,i)=>{
      return i===index? {...counter,value:counter.value+counter.step}: counter
    }))
  }

  const decrement = (index) => {
    setCounters(prev=>prev.map((counter,i)=>{
      return i===index &&counter.value>0? {...counter,value:counter.value-counter.step}:counter
    }))
  }

  const resetAll = () => {
    setCounters(prev =>
    prev.map(counter => ({ ...counter, value: 0 ,step:1}))
  )
  }


  return (
    <>
      <div className={`min-h-screen w-full flex items-center justify-center overflow-hidden  ${theme === "light"? "bg-gradient-to-b from-gray-200 to-gray-400 text-white":"bg-gradient-to-b from-gray-900 to-gray-600 text-white" }`} >

        <div className="bg-white p-6 rounded-xl  overflow-hidden">
          <div className='flex justify-between'>
            <h1 className='text-2xl font-bold text-center mb-4 text-black'>Counter dashboard</h1>

            <button className='text-xl  bg-black rounded-2xl text-center p-2 ' onClick={() => setTheme(theme === "light" ? "dark" : "light")}>{theme === "light" ? "🌞 Light" : "🌙 Dark"}</button>
          </div>

          {counters.map((counter, index) => (
            <div key={index} className=" text-black flex justify-between ring-3 rounded-xl px-5 py-4 m-3 overflow-hidden">
              <h1 className='text-black font-extrabold'>{counter.value}</h1>

              <input
                type="number"
                value={counter.step}
                onChange={(e) => {setCounters(prev=>prev.map((c,i)=>i===index?{...c,step:Number(e.target.value)}:c))}}
                className=" m-2 border px-2 py-2  text-black rounded-xl"
              />

              <div className='flex gap-5'>
                <button className='bg-amber-500 px-4  rounded-xl font-bold' onClick={() => increment(index)}>+</button>
                <button className='bg-red-600  px-4  rounded-xl  font-bold' onClick={() => decrement(index)}>-</button>
              </div>
            </div>
          ))}

          <button
            onClick={resetAll}
            className="w-full bg-blue-600 text-white py-2 rounded-xl font-bold mb-4 hover:bg-blue-700"
          >
            Reset All
          </button>

        </div>
      </div>
    </>
  )
}

export default App



// import React, { useState } from 'react'

// function App() {
//   const [count, setCount] = useState([0,0])
  
//   const inc=(index)=>{
//     setCount(prev=>{
//       return prev.map((c,i)=>(
//         i===index? c+1:c
//       ))
//     })
//   }
//   const dec=(index)=>{
//     setCount(prev=>{
//       return prev.map((c,i)=>(
//         i===index? c-1:c
//       ))
//     })
//   }


//   return (
//     <>
//     <h1 className='font-bold text-4xl p-4'>{count[0]}, {count[1]}</h1>
//     <button className='p-2 m-3 bg-amber-200' onClick={()=>inc(0)}>increase1</button>
//     <button className='p-2 m-3 bg-amber-200' onClick={()=>dec(0)}>decrease1</button>

//         <button className='p-2 m-3 bg-amber-200'onClick={()=>inc(1)}>increase2</button>
//     <button className='p-2 m-3 bg-amber-200' onClick={()=>dec(1)}>decrease2</button>
//     </>
//   )
// }

// export default App