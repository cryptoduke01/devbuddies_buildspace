import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const LeadershipSection = () => {
  const sectionRef = useRef(null);
  
  // Set up scroll-based opacity transformation
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Transform scroll progress to opacity value
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const leaders = [
    {
      name: 'john doe',
      position: 'community leader',
      image: '/images/comm-manager.jpeg',
      bio: 'passionate leader committed to establishing the kingdom in web3',
    },
    {
      name: 'jane smith',
      position: 'head of outreach',
      image: '/images/comm-manager.jpeg',
      bio: 'connecting believers and fostering growth in the community.',
    },
    {
      name: 'mike johnson',
      position: 'education coordinator',
      image: '/images/comm-manager.jpeg',
      bio: 'empowering members with knowledge to navigate the web3 space.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div ref={sectionRef} className="bg-black pt-16 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Gradient Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full filter blur-3xl"></div>

      <motion.div
        style={{ opacity }} // Apply scroll-based opacity
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
          viewport={{ once: true, amount: 0.2 }}
        >
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-yellow-500/20 rounded-lg blur-sm transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-[#121212]/80 backdrop-blur-md rounded-lg overflow-hidden p-6 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300">
                {/* Hover Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#83B71B]/0 via-[#D9DB2A]/0 to-[#83B71B]/0 group-hover:from-[#83B71B]/20 group-hover:via-[#D9DB2A]/20 group-hover:to-[#83B71B]/20 transition-all duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="w-32 h-32 mx-auto mb-4 relative group-hover:scale-105 transition-transform duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#83B71B] to-[#D9DB2A] rounded-full animate-spin-slow opacity-75 blur"></div>
                    <img 
                      src={leader.image} 
                      alt={leader.name} 
                      className="relative w-full h-full rounded-full object-cover border-4 border-[#83B71B]"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-[#EFFCF1] text-center mb-1 group-hover:text-[#83B71B] transition-colors duration-300">
                    {leader.name}
                  </h3>
                  <p className="text-[#D9DB2A] text-center mb-3 opacity-90 group-hover:opacity-100">
                    {leader.position}
                  </p>
                  <p className="text-gray-400 text-center group-hover:text-gray-300 transition-colors duration-300">
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