import React, { useState } from 'react'

function App() {

  const [user, setUser] = useState({ email: '', password: '', firstname: '', lastname: '', confirmPass: '', contact: '' })
  const [users, setusers] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!user.firstname.trim()) {
      return alert("first name cannot be empty")
    }
    else if (!isValidEmail(user.email.trim())) {
      return alert("please enter valid email")
    }
    else if (!isStrongPassword(user.password.trim())) {
      return alert("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.")
    }
    else if (!isValidNo(user.contact.trim())) {
      return alert("Enter a valid 10 digit no")
    }
    else if (user.password.trim() !== user.confirmPass.trim()) {
      return alert("Password must be same")
    }

    setusers(prev => [...prev, user])
    setUser({ email: '', password: '', firstname: '', lastname: '', confirmPass: '', contact: '' })

  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function isStrongPassword(password) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(password);
  }

  function isValidNo(no) {
    return /^\d{10}$/.test(no);
  }

  const del=(idx)=>{
    setusers(prev=>prev.filter((el,i)=>i!==idx))
  }


  return (
    <>
      <div className='bg-gradient-to-r from-[#C05800] to-[#ae7e6a]  w-[90%] m-20 rounded-2xl flex overflow-hidden' >
        <div className=' w-1/2 bg-[#FDFBD4] m-5 rounded-2xl flex flex-col items-center justify-center gap-5'>

          <h1 className='text-center font-bold text-5xl font-style: italic text-[#C05800]'>Form</h1>

          <form className='flex flex-col gap-3 items-start p-4 m-3 bg-violet-400 w-[90%]  rounded-2xl overflow-hidden' onSubmit={handleSubmit}>


            <div className=' flex flex-col gap-2 m-2'>
              <label className='font-bold'>Name</label>
              <div className='flex gap-2'>
                <input className='bg-white px-3 py-1 rounded-2xl text-lg font-medium'
                  type='text'
                  required
                  minLength={3}
                  maxLength={20}
                  value={user.firstname}
                  placeholder='Enter First Name'
                  onChange={(e) => (setUser({ ...user, firstname: e.target.value }))}
                />
                <input className='bg-white px-3 py-1 rounded-2xl text-lg font-medium'
                  type='text'
                  value={user.lastname}
                  placeholder='Enter last Name'
                  onChange={(e) => (setUser({ ...user, lastname: e.target.value }))}
                />
              </div>
            </div>

            <div className=' flex flex-col gap-2 m-2'>
              <label className='font-bold'>Contact</label>
              <div className='flex gap-2'>
                <input className='bg-white px-3 py-1 rounded-2xl text-lg font-medium'
                  type='email'
                  required
                  value={user.email}
                  placeholder='Enter email'
                  onChange={(e) => (setUser({ ...user, email: e.target.value }))}
                />
                <input className='bg-white px-3 py-1 rounded-2xl text-lg font-medium'
                  type='text'
                  value={user.contact}
                  maxLength={10}
                  placeholder='Enter contact number'
                  onChange={(e) => (setUser({ ...user, contact: e.target.value }))}
                />
              </div>


              <div className=' flex flex-col gap-2 m-2'>
                <label className='font-bold'>Password</label>
                <div className='flex gap-2'>
                  <input className='bg-white px-3 py-1 rounded-2xl text-lg font-medium'
                    type='password'
                    value={user.password}
                    required
                    minLength={8}
                    maxLength={20}
                    placeholder='Enter password'
                    onChange={(e) => (setUser({ ...user, password: e.target.value }))}
                  />
                  <input className='bg-white px-3 py-1 rounded-2xl text-lg font-medium'
                    type='password'
                    value={user.confirmPass}
                    required
                    placeholder='confirm password'
                    onChange={(e) => (setUser({ ...user, confirmPass: e.target.value }))}
                  />
                </div>
              </div>
            </div>




            <button className='mt-5 w-full px-3 py-2 bg-[#C05800] text-lg text-white rounded-2xl hover:scale-103 duration-700 active:scale-95'>submit</button>

          </form>
        </div>


        <div className='h-140 w-1/2 bg-[#FDFBD4] m-5 rounded-2xl flex flex-wrap  overflow-auto justify-center'>

          {
            users.map((u, i) => {
              return (
                <div key={i} className='h-65 w-60  bg-[#713600] p-2 m-3 rounded-xl shrink-0 flex flex-col text-white gap-3  overflow-auto'>
                  <h1 className='font-bold text-xl '>username: <span className='text-lg font-medium text-[#FDFBD4]'>{u.firstname} {u.lastname}</span></h1>
                  <p className='text-xl font-bold'>Contact Details <br /> email: <span  className='text-lg font-medium text-[#FDFBD4]'>{u.email}</span>  <br /> phno: <span  className='text-lg font-medium text-[#FDFBD4]'>{u.contact}</span></p>
                  <p className='font-bold text-xl'>Password: <span className='text-lg font-medium text-[#FDFBD4]'> {u.password.slice(0,3)}******</span></p>
                  <button className='bg-red-700 rounded-2xl text-[#FDFBD4] duration-500 active:scale-95' onClick={()=>{del(i)}}>delete</button>
                </div>
              )
            })
          }


        </div>
      </div>
    </>
  )
}

export default App