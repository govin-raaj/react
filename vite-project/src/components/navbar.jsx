
function Navbar() {

  return (
    <nav className="flex  bg-purple-600 text-white justify-between px-2 md:px-4 py-2 md:py-4 rounded-2xl mx-2 my-2 items-center">
      <h1 className="text-xl font-bold">My Portfolio</h1>

      <div className="md:flex md:gap-5 font-medium hidden">
        <a href="#" className="hover:scale-105">Home</a>
        <a href="#" className="hover:scale-105">Features</a>
        <a href="#" className="hover:scale-105">Contact</a>
      </div>
      <button className="md:hidden text-2xl">☰</button>

    </nav>
  )
}

export default Navbar
