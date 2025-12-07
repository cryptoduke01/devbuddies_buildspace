import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const LeadershipSection = () => {
  const sectionRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  // Modified scroll-based opacity transformation
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // More gradual opacity transformation
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7], [0, 1, 0.9]);

  // 10 Leaders with actual names and images
  const leaders = [
    { name: 'Bernard', image: '/images/bernard.jpg' },
    { name: 'Chizzy', image: '/images/chizzy.jpg' },
    { name: 'Feekaryo', image: '/images/feekaryo.jpg' },
    { name: 'Aduragbemi', image: '/images/aduragbemi.jpg' },
    { name: 'Bitbro', image: '/images/bitbro.jpg' },
    { name: 'Chinedu', image: '/images/chinedu.jpg' },
    { name: 'Favour', image: '/images/favour.jpg' },
    { name: 'Stephen', image: '/images/stephen.jpg' },
    { name: 'Vee', image: '/images/vee.jpg' },
    { name: 'Ser B', image: '/images/serb.jpg' },
  ];

  // Show 2 cards per slide (5 slides total for 10 leaders)
  const cardsPerSlide = 2;
  const totalSlides = Math.ceil(leaders.length / cardsPerSlide);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  // Touch/Swipe handlers for mobile
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left - go next
      nextSlide();
    }
    if (touchStart - touchEnd < -75) {
      // Swipe right - go prev
      prevSlide();
    }
  };

  // Get current visible leaders
  const getCurrentLeaders = () => {
    const start = currentSlide * cardsPerSlide;
    return leaders.slice(start, start + cardsPerSlide);
  };

  // Enhanced slide variants with direction-aware animations - optimized speed
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.92,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 400, damping: 35 },
        opacity: { duration: 0.25 },
        scale: { duration: 0.25 },
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.92,
      transition: {
        x: { type: "spring", stiffness: 400, damping: 35 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.2 },
      }
    })
  };

  // Staggered card animation - faster timing
  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.35,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  };

  return (
    <div ref={sectionRef} id='community-section' className="bg-black pt-16 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Gradient Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/5 rounded-full filter blur-2xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full filter blur-2xl"></div>

      <motion.div
        style={{ opacity }}
        className="relative z-10"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-[#EFFCF1] mb-8">
          community <span className="text-[#83B71B]">leadership</span>
        </h2>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Arrows */}
          <motion.button
            onClick={prevSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 md:-translate-x-12 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#83B71B]/30 hover:bg-[#83B71B]/60 active:bg-[#83B71B]/70 rounded-full flex items-center justify-center transition-all duration-200 border border-[#83B71B]/40 hover:border-[#83B71B] shadow-md hover:shadow-lg hover:shadow-[#83B71B]/30"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          <motion.button
            onClick={nextSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 md:translate-x-12 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#83B71B]/30 hover:bg-[#83B71B]/60 active:bg-[#83B71B]/70 rounded-full flex items-center justify-center transition-all duration-200 border border-[#83B71B]/40 hover:border-[#83B71B] shadow-md hover:shadow-lg hover:shadow-[#83B71B]/30"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>

          {/* Cards Container - with touch/swipe support */}
          <div 
            className="overflow-hidden px-4 sm:px-8 touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="grid grid-cols-2 gap-3 sm:gap-6 md:gap-8"
              >
                {getCurrentLeaders().map((leader, index) => (
                  <motion.div
                    key={`${currentSlide}-${index}`}
                    custom={index}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ 
                      scale: 1.05, 
                      y: -5,
                      transition: { 
                        type: "spring", 
                        stiffness: 400, 
                        damping: 20 
                      } 
                    }}
                    whileTap={{ scale: 0.97 }}
                    className="group relative cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-yellow-500/10 rounded-xl blur-sm transform group-hover:scale-[1.02] transition-transform duration-300"></div>
                    <div className="relative bg-[#121212]/80 backdrop-blur-md rounded-xl overflow-hidden p-4 sm:p-6 md:p-8 border border-white/10 shadow-xl hover:shadow-2xl hover:shadow-[#83B71B]/20 transition-all duration-300">
                      {/* Hover Gradient Border */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#83B71B]/0 via-[#D9DB2A]/0 to-[#83B71B]/0 group-hover:from-[#83B71B]/15 group-hover:via-[#D9DB2A]/15 group-hover:to-[#83B71B]/15 transition-all duration-300 rounded-xl"></div>
                      
                      {/* Content - Photo and Name only */}
                      <div className="relative z-10 flex flex-col items-center">
                        <motion.div 
                          className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mb-3 sm:mb-4 relative"
                          whileHover={{ rotate: [0, -3, 3, 0] }}
                          transition={{ duration: 0.4 }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-[#83B71B] to-[#D9DB2A] rounded-full animate-spin-slow opacity-50 blur"></div>
                          <img 
                            src={leader.image} 
                            alt={leader.name} 
                            className="relative w-full h-full rounded-full object-cover border-3 sm:border-4 border-[#83B71B] group-hover:border-[#D9DB2A] transition-colors duration-300"
                          />
                        </motion.div>
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#EFFCF1] text-center group-hover:text-[#83B71B] transition-colors duration-300">
                          {leader.name}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  width: currentSlide === index ? 32 : 10,
                  backgroundColor: currentSlide === index ? '#83B71B' : 'rgba(255,255,255,0.3)'
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="h-2.5 rounded-full hover:bg-white/50"
              />
            ))}
          </div>

          {/* Slide Counter */}
          <motion.p 
            key={currentSlide}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-gray-400 text-sm mt-4"
          >
            {currentSlide + 1} / {totalSlides}
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default LeadershipSection;