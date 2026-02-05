import React from 'react'

function Loader() {
  return (
    <div className="flex h-screen items-center justify-center  ">
      <div className="h-10 w-10 animate-spin rounded-full border-5 border-gray-300 border-t-blue-600" />
    </div>
  )
}

export default Loader

