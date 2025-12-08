import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageLoader from '../components/PageLoader';

const testimonies = [
  {
    name: "Chineye G.",
    image: "/images/chinenye.jpg",
    testimony: "She battled a serious illness for a while. During our Wednesday prayers, she requested the community to pray with her, and by the next day, God healed her."
  },
  {
    name: "Jesutekevwe",
    image: null,
    testimony: "He had a Twitter account for a long time but didn't understand its value until the Regenerates 1 Month Challenge. Connecting with great minds transformed his mindset and pushed him to take it seriously. Today, his account has grown significantly."
  },
  {
    name: "Stephen Zion",
    image: "/images/stephen.jpg",
    testimony: "He had not been in a community like Regenerates for a long time. The love, care and support he received here deeply impacted him."
  },
  {
    name: "Dami Who?",
    image: "/images/damiwho.jpg",
    testimony: "She loves the Regenerates community and is grateful she joined because it has drawn her closer to God."
  },
  {
    name: "The Lord's",
    image: "/images/thelords.jpg",
    testimony: "His major Web3 breakthrough came from a project introduced in the Regenerates community. He maximized the opportunity and it paid off."
  },
  {
    name: "Vivian",
    image: "/images/vee.jpg",
    testimony: "She had always wanted to learn trading but lacked direction. The Regenerates 1 Month Challenge gave her the push she needed and now she trades confidently."
  },
  {
    name: "Safe Sunday",
    image: "/images/safesunday.jpg",
    testimony: "She came to Wednesday prayers depressed and in tears, asking for the community to pray with her. From the next day, God began to turn things around and she returned the following Wednesday with joy."
  },
  {
    name: "Dinma",
    image: "/images/dimma.jpg",
    testimony: "She got her first Web3 win through the help and guidance provided by the Regenerates community."
  },
  {
    name: "Feekaryo",
    image: "/images/feekaryo.jpg",
    testimony: "With the help of the Regenerates, my younger sister started her web3 video creation journey. She was unsure of what to do, but someone on the team inspired her, and now she's doing amazing!"
  }
];

export default function Testimonies() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.08 } 
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, ease: "easeOut" } 
    }
  };

  return (
    <PageLoader duration={2000}>
    <div className="min-h-screen bg-black text-white pt-24 pb-16">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#83B71B]/8 rounded-full filter blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#D9DB2A]/8 rounded-full filter blur-[150px]" />
      </div>

      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
              Testimonies from the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#83B71B] to-[#D9DB2A]">Community</span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base max-w-xl">
              Real testimonies from regenerates members. Faith, growth, and transformation in the web3 space.
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

      {/* Testimonies Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {testimonies.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative bg-gradient-to-br from-[#151515] to-[#0d0d0d] rounded-2xl p-5 border border-white/5 hover:border-[#83B71B]/30 transition-all duration-300 overflow-hidden"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg className="w-10 h-10 text-[#83B71B]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  {item.image ? (
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#83B71B]/50"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div 
                    className={`w-12 h-12 rounded-full bg-gradient-to-br from-[#83B71B] to-[#D9DB2A] flex items-center justify-center text-black font-bold text-lg ${item.image ? 'hidden' : ''}`}
                  >
                    {item.name.charAt(0)}
                  </div>
                  {/* Online indicator */}
                  <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-[#83B71B] rounded-full border-2 border-[#151515]"></div>
                </div>
                <div>
                  <h3 className="text-white font-semibold group-hover:text-[#83B71B] transition-colors">{item.name}</h3>
                  <p className="text-gray-500 text-xs">regenerate</p>
                </div>
              </div>

              {/* Testimony */}
              <p className="text-gray-300 text-sm leading-relaxed italic">
                "{item.testimony}"
              </p>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#83B71B]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center">
        <p className="text-gray-500 text-sm mb-4">Want to share your story?</p>
        <a 
          href="mailto:regeneratesdao@gmail.com?subject=My Testimony"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#83B71B] to-[#D9DB2A] text-black text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-[#83B71B]/30 transition-all"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Share Your Testimony
        </a>
      </div>
    </div>
    </PageLoader>
  );
}

