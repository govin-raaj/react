import React, { useState } from 'react'

function App() {

  const [user, setUser] = useState({ email: '', password: '' })
  const [users, setusers] = useState([])


  const submit = (e) => {
    e.preventDefault()

    if (!user.email.trim()) {
      return alert("email cannot be empty")
    } else if (user.password.trim().length < 8) {
      return alert("password should be atleast 8 char")
    }

    console.log("user:", user)
    let temp = [...users]
    console.log("users array:", temp)
    temp.push(user)
    setusers(temp)
    setUser({ email: '', password: '' })
  }


  return (
    <>
      <div className='h-screen w-full flex flex-col items-center justify-center '>
        <div className='w-100 h-120 bg-gray-300 p-3 m-4  flex flex-col gap-8 overflow-hidden items-center justify-start rounded-xl'>
          <form onSubmit={(e) => submit(e)}>
            <input type='email'
              value={user.email}
              placeholder='Enter email'
              className='p-2 m-2 bg-white rounded-2xl text-black font-bold'
              onChange={(e) => {
                console.log("email ", e.target.value)
                setUser({ ...user, email: e.target.value })
              }}

            />
            <input type='password'
              value={user.password}
              placeholder='Enter password'
              className='p-2 m-2 bg-white rounded-2xl text-black font-bold'
              onChange={(e) => {
                console.log("password ", e.target.value)
                setUser({ ...user, password: e.target.value })
              }}

            />
            <button type='submit' className='p-2 px-3 m-2 bg-[rgb(196,160,160)]  rounded-2xl'>submit</button>
          </form>

          <ul>
            {users.map((el, i) => (
              <li className='text-lg font-bold bg-gray-400 p-1 m-2 rounded-xl'  key={i}> email: {el.email} || pass: {el.password} </li>
            ))}
          </ul>

        </div>

      </div>
    </>
  )
}

export default App