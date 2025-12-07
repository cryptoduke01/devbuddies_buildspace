import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageLoader = ({ children, duration = 2000 }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-[60] bg-black flex flex-col items-center justify-center"
          >
            {/* Background gradient effects */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div 
                className="absolute top-1/3 left-1/4 w-[200px] h-[200px] bg-[#83B71B]/10 rounded-full filter blur-[80px]"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute bottom-1/3 right-1/4 w-[200px] h-[200px] bg-[#D9DB2A]/10 rounded-full filter blur-[80px]"
                animate={{ 
                  scale: [1.2, 1, 1.2],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center">
              {/* Spinner */}
              <motion.div
                className="relative w-10 h-10 mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border-2 border-[#83B71B]/20" />
                {/* Spinning gradient ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#83B71B] border-r-[#D9DB2A]"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>

              {/* Brand name */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-white text-sm font-medium"
              >
                regenerates
              </motion.p>

              {/* Slogan */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 0.4 }}
                className="text-gray-500 text-xs mt-2 italic"
              >
                in web3 for HIS glory
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page content - shows immediately but behind loader */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageLoader;

