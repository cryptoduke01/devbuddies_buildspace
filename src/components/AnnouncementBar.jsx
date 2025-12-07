import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative bg-gradient-to-r from-[#83B71B] via-[#9BC832] to-[#D9DB2A] text-black py-2.5 px-4 z-[60]"
      >
        {/* Animated shine effect */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
            animate={{ x: ['-200%', '200%'] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
          />
        </div>

        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-4 relative">
          {/* Sparkle icon */}
          <motion.span
            animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-lg sm:text-xl"
          >
            ✨
          </motion.span>

          <p className="text-xs sm:text-sm font-semibold text-center">
            <span className="hidden sm:inline">🎉 </span>
            <span className="font-bold">NEW!</span> Regenerates NFT Collection is LIVE!
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 underline underline-offset-2 hover:text-white transition-colors font-bold"
            >
              Mint Now →
            </a>
          </p>

          {/* Sparkle icon */}
          <motion.span
            animate={{ rotate: [0, -15, 15, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="text-lg sm:text-xl hidden sm:inline"
          >
            ✨
          </motion.span>

          {/* Close button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-black/10 rounded-full transition-colors"
            aria-label="Close announcement"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AnnouncementBar;

