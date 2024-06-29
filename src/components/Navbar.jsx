import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="px-4 sm:px-6 lg:px-8 py-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-xl text-white font-semibold flex items-center">
            <span className="mr-2">◼</span>dev-buddies
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-white hover:text-gray-300">community</a>
            <a href="#" className="text-white hover:text-gray-300">events</a>
            <a href="#" className="text-white hover:text-gray-300">mentors</a>
            <a href="#" className="text-white hover:text-gray-300">stories</a>
          </div>
          <div className="hidden md:flex space-x-4">
            <button className="text-white px-4 py-2 rounded hover:text-gray-300">rsvp now</button>
            <button className="px-5 py-2 border border-white rounded-full hover:bg-white hover:text-black transition-colors text-white">membership</button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="py-4 space-y-2">
          <a href="#" className="block text-white hover:text-gray-300 py-2">community</a>
          <a href="#" className="block text-white hover:text-gray-300 py-2">events</a>
          <a href="#" className="block text-white hover:text-gray-300 py-2">mentors</a>
          <a href="#" className="block text-white hover:text-gray-300 py-2">stories</a>
          <button className="block w-full text-left text-white px-4 py-2 rounded hover:text-gray-300">rsvp now</button>
          <button className="block w-full text-center px-5 py-2 border border-white rounded-full hover:bg-white hover:text-black transition-colors text-white">membership</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar