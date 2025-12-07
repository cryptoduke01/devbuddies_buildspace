import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Minimum display time for the loading screen
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(onComplete, 700); // Wait for exit animation
    }, 5000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
        >
          {/* Background gradient effects */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div 
              className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-[#83B71B]/10 rounded-full filter blur-[100px]"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-[#D9DB2A]/10 rounded-full filter blur-[100px]"
              animate={{ 
                scale: [1.2, 1, 1.2],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <div className="relative">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#83B71B] to-[#D9DB2A] rounded-full blur-md"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                
              </div>
            </motion.div>

            {/* Spinner */}
            <motion.div
              className="relative w-12 h-12 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {/* Outer ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-[#83B71B]/20"
              />
              {/* Spinning gradient ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#83B71B] border-r-[#D9DB2A]"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              {/* Inner dot */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <div className="w-2 h-2 bg-gradient-to-r from-[#83B71B] to-[#D9DB2A] rounded-full" />
              </motion.div>
            </motion.div>

            {/* Brand name */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl font-bold text-white mb-2"
            >
              regenerates
            </motion.h1>


            {/* Slogan */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-gray-400 text-xs italic text-center max-w-xs"
            >
              "In all things, <span className="text-[#83B71B]">Jesus</span> be glorified"
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.9 }}
              className="text-gray-600 text-[10px] mt-3 tracking-wider uppercase"
            >
              in web3 for HIS glory
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;

