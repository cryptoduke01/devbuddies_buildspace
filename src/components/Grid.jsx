import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Grid = () => {
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, amount: 0.5 });

  const gridItemVariants = {
    hidden: { scale: 0.8, opacity: 0, rotate: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: isInView ? [0, 360] : 0, // Spin on view
      transition: { duration: 0.8 }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 0.5,
      transition: { 
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div ref={gridRef} className="relative w-full max-w-[28rem] mx-auto pt-4">
      {/* Animated connecting lines behind the grid */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.svg 
          className="w-full h-full"
          initial="hidden"
          animate="visible"
        >
          {/* Horizontal connecting lines */}
          <motion.line x1="15%" y1="16.7%" x2="85%" y2="16.7%" className="stroke-[#83B71B] stroke-2" variants={lineVariants} />
          <motion.line x1="15%" y1="50%" x2="85%" y2="50%" className="stroke-[#83B71B] stroke-2" variants={lineVariants} />
          <motion.line x1="15%" y1="83.3%" x2="85%" y2="83.3%" className="stroke-[#83B71B] stroke-2" variants={lineVariants} />
          {/* Vertical connecting lines */}
          <motion.line x1="16.7%" y1="15%" x2="16.7%" y2="85%" className="stroke-[#83B71B] stroke-2" variants={lineVariants} />
          <motion.line x1="50%" y1="15%" x2="50%" y2="85%" className="stroke-[#83B71B] stroke-2" variants={lineVariants} />
          <motion.line x1="83.3%" y1="15%" x2="83.3%" y2="85%" className="stroke-[#83B71B] stroke-2" variants={lineVariants} />
        </motion.svg>
      </div>

      {/* Animated Grid */}
      <motion.div 
        className="grid grid-cols-3 gap-4 aspect-square relative z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} // Trigger only when in view
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {/* Grid Items */}
        {[
          { bg: "bg-[#83B71B]", img: "/images/cross.jpg", alt: "Blockchain Icon" },
          { bg: "bg-[#EFFCF1]", img: "/images/crypto.jpg", alt: "Crypto Symbol" },
          { bg: "bg-[#D9DB2A]", img: "/images/community.jpg", alt: "Community Icon" },
          { bg: "bg-[#EFFCF1]", img: "/images/prayer.jpg", alt: "Regeneration Icon" },
          { bg: "bg-[#83B71B]", img: "/images/regen.jpg", alt: "Faith Icon" },
          { bg: "bg-[#EFFCF1]", img: "/images/dollars.jpg", alt: "Connection Icon" },
          { bg: "bg-[#83B71B]", img: "/images/bible.jpg", alt: "Transformation Icon" },
          { bg: "bg-[#EFFCF1]", img: "/images/love.jpg", alt: "Abstract Icon" },
          { bg: "bg-[#D9DB2A]", img: "/images/blockchain.jpg", alt: "Symbolic Icon" }
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={gridItemVariants}
            whileHover="hover"
            className={`${item.bg} rounded-full relative group cursor-pointer overflow-hidden`}
          >
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-white/5 rounded-full filter blur-md transform scale-90 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            
            {/* Image container */}
            <div className="relative flex items-center justify-center w-full h-full">
              <img 
                src={item.img} 
                alt={item.alt} 
                className="w-2/3 h-2/3 rounded-full transform transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Subtle animated glow behind center item */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#83B71B]/20 rounded-full filter blur-xl animate-pulse"></div>
      </div>
    </div>
  );
};

export default Grid;
