import React, { useState } from 'react'

function App() {

  const [user, setUser] = useState({name:'',email:''})
  const [users, setusers] = useState([])


   const submit = (e) => {
    e.preventDefault()

    if(!user.name.trim() || !user.email.trim()){
      return alert("field cannot be empty")
    }

    console.log("user:", user)
    let temp=[...users]
    console.log("users array:", temp)
    temp.push(user)
    setusers(temp)
    setUser({ name: '', email: '' })
  }


  return (
    <>
    <div className='h-screen w-full flex items-center justify-center '>
        <form className='w-100 h-120 bg-gray-300 p-3 m-4  flex flex-col overflow-hidden items-center justify-start rounded-xl' onSubmit={(e)=>submit(e)}>
        <input type='text'
          value={user.name}
          placeholder='Enter name'
          className='p-2 m-2 bg-white rounded-2xl text-black font-bold'
          onChange={(e)=>{
            console.log("name ",e.target.value)
            setUser({ ...user, name: e.target.value })
          }}
        
        />
        <input type='email'
          value={user.email}
          placeholder='Enter email'
          className='p-2 m-2 bg-white rounded-2xl text-black font-bold'
            onChange={(e)=>{
            console.log("email ",e.target.value)
            setUser({ ...user, email: e.target.value })
          }}
          
        />
        <button type='submit' className='p-2 px-3 m-2 bg-[rgb(196,160,160)]  rounded-2xl'>submit</button>
      </form>
    </div>
    </>
  )
}

export default App