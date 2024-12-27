import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isAgreed, setAgreed] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  const handleAgreeAndJoin = () => {
    if (isAgreed) {
      window.location.href = "/membership"; // Replace with your target URL
    }
  };

  return (
    <>
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#121212]/80 backdrop-blur-md' : 'bg-black/60 backdrop-blur-sm'
        }`}
      >
        <div className="relative z-10 border-b border-white/10">
          <div className="px-4 sm:px-6 lg:px-8 py-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-between items-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-xl text-white font-semibold flex items-center"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#83B71B] to-[#D9DB2A] rounded-full animate-spin-slow opacity-75 blur"></div>
                    <img
                      src="/images/regen.jpg"
                      alt="Regenerates Logo"
                      className="relative w-8 h-8 mr-2 rounded-full border-2 border-[#83B71B]"
                    />
                  </div>
                  regenerates
                </motion.div>

                <div className="hidden md:flex space-x-8">
                  {['about', 'community', 'events', 'stories'].map((item) => (
                    <motion.a
                      key={item}
                      href={`#${item}-section`}
                      className="text-white hover:text-[#83B71B] transition-colors relative group"
                    >
                      {item}
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#83B71B] to-[#D9DB2A] group-hover:w-full transition-all duration-300"></div>
                    </motion.a>
                  ))}
                </div>

                <div className="hidden md:flex space-x-4">
                  <motion.button
                    onClick={handleOpenModal}
                    className="px-5 py-2 relative group overflow-hidden rounded-full"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#83B71B] to-[#D9DB2A] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative text-white group-hover:text-black border border-white rounded-full px-5 py-2 transition-colors">
                      membership
                    </span>
                  </motion.button>
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden text-white"
                >
                  {isMenuOpen ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </motion.button>
              </div>
            </div>

            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="md:hidden"
                >
                  <div className="py-4 space-y-2">
                    {['about', 'community', 'events', 'stories'].map((item) => (
                      <motion.a
                        key={item}
                        href="#"
                        whileHover={{ x: 10, color: '#83B71B' }}
                        className="block text-white hover:text-[#83B71B] py-2 transition-colors"
                      >
                        {item}
                      </motion.a>
                    ))}
                    <motion.button
                      onClick={handleOpenModal}
                      className="block w-full text-center px-5 py-2 relative group overflow-hidden rounded-full"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#83B71B] to-[#D9DB2A] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative text-white group-hover:text-black border border-white rounded-full px-5 py-2 transition-colors">
                        membership
                      </span>
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.nav>

      {/* Modal Popup */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative bg-gradient-to-br from-[#222222] to-[#333333] text-white rounded-lg p-6 w-11/12 max-w-md shadow-xl">
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-transform"
              onClick={handleCloseModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-xl font-bold text-[#83B71B] mb-4">Membership Rules</h2>
            <div className="h-40 overflow-y-scroll mb-4 text-sm text-gray-300">
              <p>1. Respect all members.</p>
              <p>2. No spamming or advertisements.</p>
              <p>3. Maintain positivity and community standards.</p>
              <p>4. Follow Web3 best practices and ethical guidelines.</p>
            </div>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="agree"
                className="mr-2"
                checked={isAgreed}
                onChange={() => setAgreed(!isAgreed)}
              />
              <label htmlFor="agree" className="text-sm text-gray-300">
                I agree to the rules.
              </label>
            </div>
            <button
              className={`w-full px-6 py-3 rounded-full text-white ${
                isAgreed ? 'bg-[#83B71B] hover:scale-105' : 'bg-gray-400 cursor-not-allowed'
              }`}
              disabled={!isAgreed}
              onClick={handleAgreeAndJoin}
            >
              Join Membership
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
