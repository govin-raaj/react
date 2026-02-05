import React, { useEffect, useRef, useState } from 'react'

const App = () => {
  // const [count,setCount]=useState(0)
  // const  value= useRef(0)
  const [timer, setTimer] = useState(0)
  const timerref=useRef(null)

  // const btnref=useRef()
  // let v=1

  // function handleClick(){
  //   v=v+1
  //   setCount(p=>p+1)
  //   value.current+=1
  //   console.log("value of v is: ",v)
  //   console.log("value: ",value.current);
    
  // }

  useEffect(() => {
    console.log("render")
  })

  // function changeColor(){
  //   btnref.current.style.backgroundColor='green';
  // }

  function start(){
    timerref.current=setInterval(()=>{
      setTimer(time=>time+1)
    },1000)
  }

  function stop(){
    clearInterval(timerref.current)
    timerref.current=null
  }

  function reset(){
    stop()
    setTimer(0)
  }



  return (
    <div className='h-screen w-full bg-slate-900 flex flex-col items-center justify-center text-white'>
      {/* <h1 >count: {count}</h1><br /> */}
      <h1 >timer: {timer}</h1>
      <br />
      {/* <button
      ref={btnref}
       onClick={handleClick} className='p-2 w-20 rounded-xl bg-red-500'>increase</button><br />
      <button 
      className='p-2 w-30 rounded-xl bg-violet-400'
      onClick={changeColor}>change color</button>

      <br /> */}
      <button 
      className='p-2 w-30 rounded-xl bg-violet-400'
      onClick={start}>start</button>
      <br />
      <button 
      className='p-2 w-30 rounded-xl bg-violet-400'
      onClick={stop}>stop</button>
      <br />
      <button 
      className='p-2 w-30 rounded-xl bg-violet-400'
      onClick={reset}>reset</button>
    </div>
  )
}

export default App