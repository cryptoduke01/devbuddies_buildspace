import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutSection = () => {
  const sectionRef = useRef(null);
  
  // Set up scroll-based opacity transformation
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Transform scroll progress to opacity value
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div ref={sectionRef} className="bg-black pt-4 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Gradient Effects - Similar to Leadership Section */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-green-500/10 rounded-md filter blur-1xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-md filter blur-1xl"></div>

      {/* Main Content Container */}
      <motion.div 
        style={{ opacity }} // Apply scroll-based opacity
        className="lg:w-2/3 mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Glass Container */}
        <div className="relative group">
          {/* Hover Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-yellow-500/20 rounded-lg blur-sm transform group-hover:scale-105 transition-transform duration-300"></div>
          
          {/* Glass Content Container */}
          <div className="relative bg-[#121212]/80 backdrop-blur-md rounded-lg overflow-hidden p-8 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300">
            {/* Hover Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#83B71B]/0 via-[#D9DB2A]/0 to-[#83B71B]/0 group-hover:from-[#83B71B]/20 group-hover:via-[#D9DB2A]/20 group-hover:to-[#83B71B]/20 transition-all duration-500"></div>

            {/* Content */}
            <div className="relative z-10">
              <motion.h1 
                variants={textVariants}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#EFFCF1] mb-6 text-center"
              >
                about <span className="text-[#83B71B]"> the regenerates</span>
              </motion.h1>

              <motion.div 
                variants={textVariants}
                className="space-y-4 text-gray-400"
              >
                <p className="transform hover:translate-x-2 transition-transform duration-300">
                  the regenerates are a budding community of believers with a mandate to establish the kingdom of GOD in the web3 space.
                </p>

                <p className="transform hover:translate-x-2 transition-transform duration-300">
                  the vision of the <span className="text-[#D9DB2A] font-medium">regenerates</span> as given by GOD is to provide a conclave for believers in the web3 space, like a goshen in Egypt, a safe space for believers who are already in the space to learn and continue to grow with other like-minded christians.
                </p>

                <p className="transform hover:translate-x-2 transition-transform duration-300">
                  we, the regenerates, believe that <span className="text-[#D9DB2A] font-medium">financial security</span> allows us to better serve GOD, and our primary mission is to empower christians in this space to fulfill this mission:
                </p>

                <ul className="list-decimal list-inside pl-4 space-y-2">
                  <li className="transform hover:translate-x-2 transition-transform duration-300">
                    to bring as many believers into wealth in the web3 space.
                  </li>
                  <li className="transform hover:translate-x-2 transition-transform duration-300">
                    to provide a <span className="text-[#D9DB2A] font-medium">safe space</span> for believers to learn and grow.
                  </li>
                  <li className="transform hover:translate-x-2 transition-transform duration-300">
                    to equip newbies in the space with the requisite knowledge to navigate the web3 space.
                  </li>
                </ul>

                <p className="font-semibold text-[#83B71B] text-center mt-6 transform hover:scale-105 transition-transform duration-300">
                  we are the regenerates, in web3 for HIS glory!
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