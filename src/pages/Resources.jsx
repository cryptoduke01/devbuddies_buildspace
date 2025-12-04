import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const sectionTitle = (title, subtitle) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F0FFF0] mb-2">
      {title}
    </h2>
    {subtitle && (
      <p className="text-[#B0B0B0] text-sm sm:text-base">
        {subtitle}
      </p>
    )}
  </div>
);

const cardBase = "relative bg-[#121212] border border-white/10 rounded-2xl p-6 shadow-lg transition-transform duration-300 hover:scale-[1.02]";
const buttonBase = "inline-flex items-center justify-center px-4 py-2 rounded-full text-black bg-gradient-to-r from-[#83B71B] to-[#D9DB2A] hover:from-[#6b9e16] hover:to-[#b8b92e] transition-all duration-300 text-sm";

export default function Resources() {
  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white pt-24 pb-16">
      {/* Top header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#83B71B]">Resources for Growth</h1>
            <p className="mt-2 text-[#B0B0B0]">Explore teachings, testimonies, and faith-driven guides to build your journey in Web3.</p>
          </div>
          <Link to="/" className="hidden sm:inline-flex px-4 py-2 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300">
            back to home
          </Link>
        </div>
        <div className="mt-6 sm:hidden">
          <Link to="/" className="inline-flex w-full items-center justify-center px-4 py-2 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300">
            back to home
          </Link>
        </div>
      </div>

      {/* subtle background gradients */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-gradient-to-br from-[#83B71B]/20 to-[#D9DB2A]/10 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-br from-[#83B71B]/15 to-[#D9DB2A]/10 rounded-full blur-3xl opacity-20" />
      </div>

      {/* 1) Class Recordings / Teachings */}
      <section className="relative py-8">
        {sectionTitle("Class Recordings / Teachings")}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["GM With Jesus", "Alpha Calls", "Prayer Meetings"].map((title, idx) => (
              <motion.div key={idx} className={cardBase} whileHover={{ scale: 1.02 }}>
                <div className="w-full h-40 mb-4 rounded-xl bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-[#B0B0B0]">
                  thumbnail
                </div>
                <h3 className="text-xl font-semibold text-[#F0FFF0] mb-2">{title}</h3>
                <p className="text-[#B0B0B0] text-sm mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non justo sit amet quam luctus dapibus.
                </p>
                <button className={buttonBase}>read more</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2) Testimonies Snippet */}
      <section className="relative py-8">
        {sectionTitle("Testimonies Snippet")}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["A Journey of Faith", "Finding Purpose", "Grace in the Wilderness"].map((title, idx) => (
              <motion.div key={idx} className={cardBase} whileHover={{ scale: 1.02 }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#83B71B] to-[#D9DB2A] opacity-80" />
                  <div>
                    <p className="text-[#F0FFF0] font-medium">john doe</p>
                    <p className="text-[#B0B0B0] text-xs">{title}</p>
                  </div>
                </div>
                <p className="text-[#B0B0B0] text-sm mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia, velit a posuere placerat.
                </p>
                <button className={buttonBase}>read more</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3) Guides & Articles */}
      <section className="relative py-8">
        {sectionTitle("Guides & Articles")}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Faith in the Digital Age", "Stewardship & Crypto", "Community in Web3"]
              .map((title, idx) => (
                <motion.div key={idx} className={cardBase} whileHover={{ scale: 1.02 }}>
                  <div className="h-12 w-12 rounded-xl mb-3 bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-[#B0B0B0]">
                    icon
                  </div>
                  <h3 className="text-xl font-semibold text-[#F0FFF0] mb-2">{title}</h3>
                  <p className="text-[#B0B0B0] text-sm mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec lorem nisl. Vestibulum ante ipsum primis in faucibus.
                  </p>
                  <button className={buttonBase}>read more</button>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}


