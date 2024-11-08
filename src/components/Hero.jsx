import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Grid from './Grid';

const Hero = () => {
  const { scrollY } = useScroll();
  
  // Parallax effects for background elements
  const leftBgY = useTransform(scrollY, [0, 500], [0, -150]);
  const rightBgY = useTransform(scrollY, [0, 500], [0, 150]);
  const contentOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.9]);

  const openZohoForm = (url) => {
    window.open(url, '_blank');
  };

  const fadeInUp = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Hover animation for the glass container
  const glassContainerVariants = {
    hover: {
      backgroundColor: "rgba(255, 255, 255, 0.08)",
      transition: { duration: 0.3 }
    }
  };

  // Text hover effects
  const wordHoverVariants = {
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-12 bg-black relative overflow-hidden">
      {/* Animated background effects */}
      <motion.div 
        style={{ y: leftBgY }}
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-green-500/10 to-transparent rounded-full filter blur-3xl"
      />
      <motion.div 
        style={{ y: rightBgY }}
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-yellow-500/10 to-transparent rounded-full filter blur-3xl"
      />

      {/* Animated content wrapper */}
      <motion.div 
        style={{ opacity: contentOpacity, scale }}
        className="flex flex-col lg:flex-row items-center justify-between max-w-7xl w-full relative z-10"
      >
        {/* Grid Section with hover effect */}
        <motion.div 
          className="w-full lg:w-5/12 mb-8 lg:mb-0 hover:scale-105 transition-transform duration-500"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Grid />
        </motion.div>

        {/* Content Section */}
        <motion.div 
          className="w-full lg:w-6/12"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.div 
            className="relative group"
            variants={glassContainerVariants}
            whileHover="hover"
          >
            {/* Enhanced glass container */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-2xl group-hover:bg-white/10 transition-colors duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-yellow-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            <div className="relative p-8">
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                <motion.span 
                  className="text-[#83B71B] inline-block cursor-default"
                  variants={wordHoverVariants}
                  whileHover="hover"
                >
                  establishing God's kingdom{" "}
                </motion.span>
                <span className="text-[#EFFCF1]">in the </span>
                <motion.span 
                  className="text-[#D9DB2A] inline-block cursor-default"
                  variants={wordHoverVariants}
                  whileHover="hover"
                >
                  web3 community
                </motion.span>
              </motion.h1>

              <motion.p 
                variants={fadeInUp}
                className="mb-10 text-base sm:text-lg text-white/90 hover:text-white transition-colors duration-300"
              >
                regenerates is a community of believers with the mandate to establish the kingdom of GOD in the web3 space
              </motion.p>

              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
              >
                <motion.button 
                  className="px-8 py-3 bg-white/90 text-black rounded-full font-normal relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openZohoForm('https://forms.zohopublic.eu/devbuddies/form/RSVPForm/formperma/wJMuaDTdp5_ThVPBmMQmmrssyU3wXnXGCxs8y2lO7Ok')}
                >
                  <span className="relative z-10">join community</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#83B71B]/20 to-[#D9DB2A]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>

                <motion.button 
                  className="px-6 py-3 text-white border border-white/20 rounded-full flex items-center justify-center relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center">
                    <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                    resources
                  </span>
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;