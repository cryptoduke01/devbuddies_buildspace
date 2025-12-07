import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Resources() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-[#83B71B]/10 rounded-full filter blur-[120px]" />
        <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-[#D9DB2A]/10 rounded-full filter blur-[120px]" />
      </div>

      {/* Top header */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Community <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#83B71B] to-[#D9DB2A]">Web3</span> Resources
            </h1>
            <p className="mt-2 text-gray-400 text-sm sm:text-base">
              Everything you need to grow in faith and web3. All in one place.
            </p>
          </div>
          <Link 
            to="/" 
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-white text-sm hover:bg-white hover:text-black transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            back to home
          </Link>
        </div>
        <div className="mt-4 sm:hidden">
          <Link to="/" className="inline-flex w-full items-center justify-center gap-2 px-4 py-2 rounded-full border border-white/20 text-white text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            back to home
          </Link>
        </div>
      </div>

      {/* Class Recordings Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
          Class Recordings
        </h2>

        <a 
          href="https://t.me/Regeneratesresources" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative bg-[#121212]/80 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden cursor-pointer hover:border-[#83B71B]/40 transition-all duration-300 group"
          >
            <div className="flex flex-col md:flex-row">
              {/* Left - Interactive Thumbnail */}
              <div className="w-full md:w-2/5 relative overflow-hidden">
                <div className="aspect-video md:aspect-auto md:h-full bg-gradient-to-br from-[#83B71B]/30 via-[#1a1a1a] to-[#D9DB2A]/30 relative flex items-center justify-center min-h-[200px] md:min-h-[280px]">
                  
                  {/* Animated background circles */}
                  <motion.div 
                    className="absolute inset-0"
                    animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#83B71B]/20 rounded-full filter blur-2xl"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-[#D9DB2A]/20 rounded-full filter blur-2xl"></div>
                  </motion.div>

                  {/* Play button - highly interactive */}
                  <motion.div 
                    className="relative z-10"
                    animate={isHovered ? { scale: 1.15 } : { scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <motion.div 
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#83B71B] to-[#D9DB2A] flex items-center justify-center shadow-2xl"
                      animate={isHovered ? { 
                        boxShadow: "0 0 60px rgba(131, 183, 27, 0.6)" 
                      } : { 
                        boxShadow: "0 0 30px rgba(131, 183, 27, 0.3)" 
                      }}
                    >
                      <motion.svg 
                        className="w-10 h-10 sm:w-12 sm:h-12 text-black ml-1" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                        animate={isHovered ? { x: 2 } : { x: 0 }}
                      >
                        <path d="M8 5v14l11-7z"/>
                      </motion.svg>
                    </motion.div>
                    
                    {/* Ripple effect */}
                    <motion.div 
                      className="absolute inset-0 rounded-full border-2 border-[#83B71B]/50"
                      animate={isHovered ? { 
                        scale: [1, 1.5, 1.8], 
                        opacity: [0.5, 0.2, 0] 
                      } : {}}
                      transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
                    />
                  </motion.div>

                  {/* Badges */}
                  <motion.div 
                    className="absolute top-4 left-4 flex items-center gap-2 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full"
                    animate={isHovered ? { y: -2 } : { y: 0 }}
                  >
                    <motion.div 
                      className="w-2.5 h-2.5 rounded-full bg-[#83B71B]"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <span className="text-[#83B71B] text-xs font-semibold">15+ recordings</span>
                  </motion.div>

                  {/* Telegram badge */}
                  <motion.div 
                    className="absolute top-4 right-4 w-10 h-10 bg-[#0088cc] rounded-full flex items-center justify-center shadow-lg"
                    animate={isHovered ? { rotate: [0, -10, 10, 0], scale: 1.1 } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                  </motion.div>

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#121212]/90"></div>
                </div>
              </div>

              {/* Right - Content */}
              <div className="w-full md:w-3/5 p-5 sm:p-6 lg:p-8 flex flex-col justify-center">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-3 py-1 bg-[#83B71B]/20 text-[#83B71B] text-xs font-medium rounded-full border border-[#83B71B]/30">
                    Free Access
                  </span>
                  <span className="px-3 py-1 bg-[#0088cc]/20 text-[#0088cc] text-xs font-medium rounded-full border border-[#0088cc]/30">
                    Telegram
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-[#83B71B] transition-colors">
                  Community <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#83B71B] to-[#D9DB2A]">Web3</span> Resources
                </h3>

                <p className="text-gray-400 text-sm sm:text-base mb-5 leading-relaxed">
                  Dive into our collection of <span className="text-white font-medium">web3 tutorials</span>, 
                  morning devotions, and market insights. Learn blockchain, grow your faith, 
                  and connect with fellow believers. <span className="text-[#83B71B]">100% free.</span>
                </p>

                {/* Quick stats */}
                <div className="flex flex-wrap gap-6 mb-5">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#83B71B]">118+</p>
                    <p className="text-gray-500 text-xs">Recordings</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#D9DB2A]">Free</p>
                    <p className="text-gray-500 text-xs">Forever</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">Web3</p>
                    <p className="text-gray-500 text-xs">Education</p>
                  </div>
                </div>

                {/* CTA */}
                <motion.div
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#83B71B] to-[#D9DB2A] text-black text-sm font-bold rounded-full w-fit"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  Watch Now
                  <motion.svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={isHovered ? { x: [0, 4, 0] } : {}}
                    transition={{ duration: 0.6, repeat: isHovered ? Infinity : 0 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </a>
      </section>

      {/* Guides & Articles */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
          Guides & Articles
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Medium Card */}
          <motion.a
            href="https://medium.com/@regenerates"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -2 }}
            className="bg-[#121212]/80 backdrop-blur-md rounded-xl border border-white/10 p-5 flex items-center gap-4 group cursor-pointer hover:border-white/20 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center flex-shrink-0">
              <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-white font-semibold mb-1 group-hover:text-[#83B71B] transition-colors">Medium</h3>
              <p className="text-gray-500 text-xs">Long-form articles & Web3 insights</p>
            </div>
            <svg className="w-5 h-5 text-gray-500 group-hover:text-[#83B71B] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </motion.a>

          {/* Substack Card */}
          <motion.a
            href="https://regenerates.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.02, y: -2 }}
            className="bg-[#121212]/80 backdrop-blur-md rounded-xl border border-white/10 p-5 flex items-center gap-4 group cursor-pointer hover:border-white/20 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-[#FF6719] flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-white font-semibold mb-1 group-hover:text-[#FF6719] transition-colors">Substack</h3>
              <p className="text-gray-500 text-xs">Newsletter & community updates</p>
            </div>
            <svg className="w-5 h-5 text-gray-500 group-hover:text-[#FF6719] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </motion.a>
        </div>
      </section>
    </div>
  );
}
