import { useState } from "react"

function Navbar() {

  return (
    <nav className="bg-purple-600 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">MyLanding</h1>

      <div className="flex gap-6">
        <a href="#" className="hover:text-gray-200">Home</a>
        <a href="#" className="hover:text-gray-200">Features</a>
        <a href="#" className="hover:text-gray-200">Contact</a>
      </div>

    </nav>
  )
}

export default Navbar
