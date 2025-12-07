import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fetchCollectionInfo, isApiKeyConfigured, FALLBACK_DATA } from '../services/opensea';

const NFTSection = () => {
  const [collectionImage, setCollectionImage] = useState('/images/regen.jpg');

  useEffect(() => {
    const loadCollectionImage = async () => {
      if (isApiKeyConfigured()) {
        try {
          const info = await fetchCollectionInfo();
          if (info?.image_url) {
            setCollectionImage(info.image_url);
          }
        } catch (err) {
          console.log('Using fallback image');
        }
      }
    };
    loadCollectionImage();
  }, []);

  return (
    <section id="nft-section" className="relative bg-gradient-to-b from-black to-[#0a0a0a] py-10 sm:py-14 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#83B71B]/5 rounded-full filter blur-[100px]"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#D9DB2A]/5 rounded-full filter blur-[100px]"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-[#121212]/80 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden"
        >
          <div className="flex flex-col md:flex-row">
            {/* Left - Collection Image */}
            <div className="w-full md:w-2/5 relative">
              <div className="aspect-square md:aspect-auto md:h-full bg-[#0a0a0a] relative overflow-hidden">
                <img 
                  src={collectionImage} 
                  alt="The Regenverse Collection"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = '/images/regen.jpg'; }}
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#121212]/80"></div>

                {/* Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#83B71B] text-black text-xs font-bold rounded-full flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-black rounded-full animate-pulse"></span>
                  LIVE
                </div>

                {/* Chain */}
                <div className="absolute top-3 right-3 w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-xs font-bold">B</span>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="w-full md:w-3/5 p-5 sm:p-6 lg:p-8 flex flex-col justify-center">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#83B71B] to-[#D9DB2A]">Regenverse</span>
              </h2>

              <p className="text-gray-400 text-xs sm:text-sm mb-4 leading-relaxed">
                The onchain collection for <span className="text-[#83B71B]">@regener8s</span> members. 
                <span className="text-[#D9DB2A]"> 75 unique NFTs</span> on Base — your identity in the community.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-4 sm:gap-5 mb-5">
                <div>
                  <p className="text-lg sm:text-xl font-bold text-[#83B71B]">75</p>
                  <p className="text-gray-500 text-[10px]">Items</p>
                </div>
                <div>
                  <p className="text-lg sm:text-xl font-bold text-[#D9DB2A]">67</p>
                  <p className="text-gray-500 text-[10px]">Owners</p>
                </div>
                <div>
                  <p className="text-lg sm:text-xl font-bold text-white">89%</p>
                  <p className="text-gray-500 text-[10px]">Unique</p>
                </div>
                <div>
                  <p className="text-lg sm:text-xl font-bold text-blue-400">Base</p>
                  <p className="text-gray-500 text-[10px]">Chain</p>
                </div>
              </div>

              {/* CTA */}
              <Link to="/regenverse">
                <motion.div
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#83B71B] to-[#D9DB2A] text-black text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-[#83B71B]/30 transition-all cursor-pointer"
                >
                  View More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.div>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NFTSection;
