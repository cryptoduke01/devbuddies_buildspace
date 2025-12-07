import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

  const handleEmailClick = () => {
    window.open("mailto:regeneratesdao@gmail.com", "_blank", "noopener noreferrer");
  };

  // Handle navigation to section (works from any page)
  const handleSectionClick = (sectionId) => {
    if (location.pathname !== '/') {
      // Navigate to home first, then scroll to section
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already on home, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };


  return (
    <>
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#121212]/80 backdrop-blur-md' : 'bg-black/60 backdrop-blur-sm'
          }`}
      >
        <div className="relative z-10 border-b border-white/10">
          <div className="px-4 sm:px-6 lg:px-8 py-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-between items-center">
                {/* Logo */}
                <Link to="/">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-lg sm:text-xl text-white font-semibold flex items-center shrink-0 cursor-pointer"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#83B71B] to-[#D9DB2A] rounded-full animate-spin-slow opacity-75 blur"></div>
                      <img
                        src="/images/regen.jpg"
                        alt="Regenerates Logo"
                        className="relative w-7 h-7 sm:w-8 sm:h-8 mr-2 rounded-full border-2 border-[#83B71B]"
                      />
                    </div>
                    <span className="hidden sm:inline">regenerates</span>
                  </motion.div>
                </Link>

                {/* Desktop Nav Links - Only show on lg and above */}
                <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                  {['about', 'community'].map((item) => (
                    <motion.button
                      key={item}
                      onClick={() => handleSectionClick(`${item}-section`)}
                      className="text-sm xl:text-base transition-colors relative group whitespace-nowrap text-white hover:text-[#83B71B] cursor-pointer"
                    >
                      {item}
                      <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#83B71B] to-[#D9DB2A] transition-all duration-300 w-0 group-hover:w-full"></div>
                    </motion.button>
                  ))}
                  <Link
                    to="/resources"
                    className="text-sm xl:text-base transition-colors relative group whitespace-nowrap text-white hover:text-[#83B71B]"
                  >
                    resources
                    <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#83B71B] to-[#D9DB2A] transition-all duration-300 w-0 group-hover:w-full"></div>
                  </Link>
                  <Link
                    to="/testimonies"
                    className="text-sm xl:text-base transition-colors relative group whitespace-nowrap text-white hover:text-[#83B71B]"
                  >
                    testimonies
                    <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#83B71B] to-[#D9DB2A] transition-all duration-300 w-0 group-hover:w-full"></div>
                  </Link>
                </div>

                {/* Desktop Action Buttons */}
                <div className="hidden lg:flex items-center space-x-2 xl:space-x-3">
                  {/* Regenverse Button */}
                  <Link to="/regenverse">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#83B71B] to-[#D9DB2A] text-black text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-[#83B71B]/30 transition-all duration-300"
                    >
                      <span className="w-2 h-2 bg-black rounded-full animate-pulse"></span>
                      regenverse
                    </motion.div>
                  </Link>
                  
                  <motion.button
                    onClick={handleEmailClick}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 text-sm text-white border border-white/30 rounded-full hover:border-[#83B71B] hover:text-[#83B71B] transition-all duration-300"
                  >
                    email us
                  </motion.button>
                </div>

                {/* Mobile Menu Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="lg:hidden text-white p-2"
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
                  className="lg:hidden"
                >
                  <div className="py-4 space-y-2">
                    {['about', 'community'].map((item) => (
                      <motion.button
                        key={item}
                        onClick={() => {
                          handleSectionClick(`${item}-section`);
                          setIsMenuOpen(false);
                        }}
                        whileHover={{ x: 10 }}
                        className="block py-2 transition-colors text-white hover:text-[#83B71B] text-left w-full"
                      >
                        {item}
                      </motion.button>
                    ))}
                    <Link
                      to="/resources"
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-2 transition-colors text-white hover:text-[#83B71B]"
                    >
                      resources
                    </Link>
                    <Link
                      to="/testimonies"
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-2 transition-colors text-white hover:text-[#83B71B]"
                    >
                      testimonies
                    </Link>
                    
                    {/* Regenverse Button */}
                    <Link
                      to="/regenverse"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-center gap-2 w-full py-3 mt-4 bg-gradient-to-r from-[#83B71B] to-[#D9DB2A] text-black font-semibold rounded-full"
                    >
                      <span className="w-2 h-2 bg-black rounded-full animate-pulse"></span>
                      regenverse
                    </Link>

                    <motion.button
                      onClick={() => {
                        handleEmailClick();
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-center py-3 text-white border border-white/30 rounded-full hover:border-[#83B71B] transition-colors"
                    >
                      email us
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
