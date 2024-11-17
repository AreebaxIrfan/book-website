import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        
      <div className="bg-gray-800 flex justify-center items-center rounded-full text-teal-300 mt-6 ml-4 mr-4 p-3 lg:ml-80 lg:mr-80 ring-4 ring-teal-600 ring-opacity-50 shadow-md">
      <div className="space-x-4">
        <Link
          className="hover:underline hover:text-teal-400 transition-all duration-300"
          href="/"
        >
          Home
        </Link>
        <Link
          className="hover:underline hover:text-teal-400 transition-all duration-300"
          href="/create"
        >
          Add New Book
        </Link>

        <Link
          className="hover:underline hover:text-teal-400 transition-all duration-300"
          href="/about"
        >
          About
        </Link>
        <Link
          className="hover:underline hover:text-teal-400 transition-all duration-300"
          href="/contact"
        >
          Contact
        </Link>
      </div>
    </div>
    
       
    )
}

export default Navbar