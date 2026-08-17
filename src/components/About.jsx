import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutSection = () => {
  const sectionRef = useRef(null);
  
  // Modified scroll-based opacity transformation with more gradual effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"] // Changed offset to make the effect start earlier
  });

  // More gradual opacity transformation
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7], [0, 1, 0.9]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1, // Increased duration for smoother animation
        ease: "easeInOut" // Changed to easeInOut for smoother transition
      }
    }
  };

  const textVariants = {
    hidden: { y: 10, opacity: 0 }, // Reduced y offset from 20 to 10
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7, // Increased duration
        ease: "easeOut"
      }
    }
  };

  return (
    <div ref={sectionRef} id='about-section' className="bg-black pt-4 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Gradient Effects with reduced blur */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-green-500/5 rounded-md filter blur-lg"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-md filter blur-lg"></div>

      {/* Main Content Container */}
      <motion.div 
        style={{ opacity }}
        className="max-w-5xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }} // Reduced amount for earlier trigger
      >
        {/* Glass Container */}
        <div className="relative group">
          {/* Hover Gradient Background with reduced intensity */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-yellow-500/10 rounded-lg blur-sm transform group-hover:scale-[1.02] transition-transform duration-500"></div>
          
          {/* Glass Content Container */}
          <div className="relative bg-[#121212]/80 backdrop-blur-md rounded-2xl overflow-hidden p-5 sm:p-6 lg:p-8 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500">
            {/* Hover Gradient Border with reduced intensity */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#83B71B]/0 via-[#D9DB2A]/0 to-[#83B71B]/0 group-hover:from-[#83B71B]/10 group-hover:via-[#D9DB2A]/10 group-hover:to-[#83B71B]/10 transition-all duration-700"></div>

            {/* Content */}
            <div className="relative z-10">
              <motion.h1
                variants={textVariants}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#EFFCF1] mb-6 text-center"
              >
                About <span className="text-[#83B71B]">The Regenerates</span>
              </motion.h1>

              <motion.div
                variants={textVariants}
                className="space-y-4 text-gray-400 text-sm sm:text-base leading-relaxed"
              >
                <p className="transform hover:translate-x-1 transition-transform duration-500">
                  The Regenerates is a digital Christian community focused on wealth creation without spiritual compromise.
                </p>

                <p className="transform hover:translate-x-1 transition-transform duration-500">
                  Our slogan captures it clearly: <span className="text-[#D9DB2A] font-medium">Wealth Manifold in God's Fold.</span>
                </p>

                <p className="font-semibold text-[#EFFCF1] pt-2">
                  What's Our Mission?
                </p>
                <p className="transform hover:translate-x-1 transition-transform duration-500">
                  The Regenerates exists to:
                </p>

                <ul className="list-decimal list-inside pl-2 sm:pl-4 space-y-2 marker:text-[#83B71B] marker:font-semibold">
                  <li className="transform hover:translate-x-1 transition-transform duration-500">
                    Create a community where believers pursue <span className="text-[#D9DB2A] font-medium">wealth manifold</span> while remaining spiritually grounded.
                  </li>
                  <li className="transform hover:translate-x-1 transition-transform duration-500">
                    Provide a <span className="text-[#D9DB2A] font-medium">safe space</span> to learn, grow and be empowered in Web3 and the digital economy without compromise.
                  </li>
                  <li className="transform hover:translate-x-1 transition-transform duration-500">
                    Serve as an entry point for newcomers entering Web3, equipping them with relevant knowledge and guidance.
                  </li>
                  <li className="transform hover:translate-x-1 transition-transform duration-500">
                    Build accountability among believers so no one navigates the space alone.
                  </li>
                </ul>

                <p className="font-semibold text-[#83B71B] text-center mt-6 transform hover:scale-[1.02] transition-transform duration-500">
                  Wealth Manifold in God's Fold.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutSection;