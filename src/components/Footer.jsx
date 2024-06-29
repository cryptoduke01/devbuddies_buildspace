

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">dev<span className="text-[#F1AEDA]">buddies</span></h3>
            <p className="text-sm text-gray-400">empowering developers through community and mentorship.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">quick links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-[#F1AEDA]">home</a></li>
              <li><a href="#" className="text-sm hover:text-[#F1AEDA]">events</a></li>
              <li><a href="#" className="text-sm hover:text-[#F1AEDA]">mentors</a></li>
              <li><a href="#" className="text-sm hover:text-[#F1AEDA]">about</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-[#F1AEDA]">twitter</a></li>
              <li><a href="#" className="text-sm hover:text-[#F1AEDA]">linkedIn</a></li>
              <li><a href="#" className="text-sm hover:text-[#F1AEDA]">youtube</a></li>
              <li><a href="#" className="text-sm hover:text-[#F1AEDA]">discord</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">newsletter</h4>
            <p className="text-sm text-gray-400 mb-2">stay updated with our latest events and opportunities.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="enter your email" 
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#F1AEDA]"
              />
              <button 
                type="submit" 
                className="bg-[#F1AEDA] text-black px-4 py-2 rounded-r-md hover:bg-[#d690bf] transition-colors"
              >
                subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">&copy; 2024 devbuddies. all rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;