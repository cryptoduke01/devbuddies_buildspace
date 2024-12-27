import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const LeadershipSection = () => {
  const sectionRef = useRef(null);
  
  // Modified scroll-based opacity transformation
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"] // Changed offset for smoother transition
  });

  // More gradual opacity transformation
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7], [0, 1, 0.9]);

  const leaders = [
    {
      name: 'Bernard',
      position: 'Head Of Community',
      image: '/images/headofcomm.jpeg',
      bio: 'passionate leader committed to establishing the kingdom in web3',
    },
    {
      name: 'Chizzy',
      position: 'Assistant Community Manager',
      image: '/images/asscommger.jpeg',
      bio: 'connecting believers and fostering growth in the community.',
    },
    {
      name: 'Feerkayo',
      position: 'Head Of Content',
      image: '/images/headofcontent.jpeg',
      bio: 'empowering members with knowledge to navigate the web3 space.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Reduced stagger time
        duration: 0.8, // Increased duration
        ease: "easeInOut"
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 }, // Reduced initial y offset from 50 to 20
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8, // Increased duration
        ease: "easeOut"
      }
    }
  };

  return (
    <div ref={sectionRef} id='community-section' className="bg-black pt-16 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Gradient Effects with reduced intensity */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/5 rounded-full filter blur-2xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full filter blur-2xl"></div>

      <motion.div
        style={{ opacity }}
        className="relative z-10"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-[#EFFCF1] mb-8">
          community <span className="text-[#83B71B]">leadership</span>
        </h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Reduced threshold for earlier trigger
        >
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }} // Reduced hover scale
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-yellow-500/10 rounded-lg blur-sm transform group-hover:scale-[1.02] transition-transform duration-500"></div>
              <div className="relative bg-[#121212]/80 backdrop-blur-md rounded-lg overflow-hidden p-6 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500">
                {/* Hover Gradient Border with reduced intensity */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#83B71B]/0 via-[#D9DB2A]/0 to-[#83B71B]/0 group-hover:from-[#83B71B]/10 group-hover:via-[#D9DB2A]/10 group-hover:to-[#83B71B]/10 transition-all duration-700"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="w-32 h-32 mx-auto mb-4 relative group-hover:scale-[1.02] transition-transform duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#83B71B] to-[#D9DB2A] rounded-full animate-spin-slow opacity-50 blur"></div>
                    <img 
                      src={leader.image} 
                      alt={leader.name} 
                      className="relative w-full h-full rounded-full object-cover border-4 border-[#83B71B]"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-[#EFFCF1] text-center mb-1 group-hover:text-[#83B71B] transition-colors duration-500">
                    {leader.name}
                  </h3>
                  <p className="text-[#D9DB2A] text-center mb-3 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                    {leader.position}
                  </p>
                  <p className="text-gray-400 text-center group-hover:text-gray-300 transition-colors duration-500">
                    {leader.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LeadershipSection;