const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-6">
      <div className="text-xl text-white font-semibold flex items-center">
        <span className="mr-2">◼</span>dev-buddies
      </div>
      <div className="space-x-8">
        <a href="#" className="text-white hover:text-gray-300">community</a>
        <a href="#" className="text-white hover:text-gray-300">events</a>
        <a href="#" className="text-white hover:text-gray-300">mentors</a>
        <a href="#" className="text-white hover:text-gray-300">stories</a>
      </div>
      <div className="space-x-4">
        <button className="text-white px-4 py-2 rounded hover:text-gray-300">rsvp now</button>
        <button className="px-5 py-2 border border-white rounded-full hover:bg-white hover:text-black transition-colors text-white">membership</button>
      </div>
    </nav>
  )
}

export default Navbar