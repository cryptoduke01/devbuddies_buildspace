import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  fetchCollectionStats, 
  fetchAllCollectionNFTs, 
  fetchCollectionInfo,
  isApiKeyConfigured,
  FALLBACK_DATA 
} from '../services/opensea';

const Regenverse = () => {
  const VISIBLE_COUNT = 20;
  const PREVIEW_COUNT = 8;

  const [allNfts, setAllNfts] = useState([]);
  const [displayedNfts, setDisplayedNfts] = useState([]);
  const [stats, setStats] = useState(FALLBACK_DATA.stats);
  const [collectionInfo, setCollectionInfo] = useState(FALLBACK_DATA.collection);
  const [loadingMore, setLoadingMore] = useState(false);
  const [selectedNft, setSelectedNft] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Fetch NFTs on mount
  useEffect(() => {
    const loadNfts = async () => {
      if (!isApiKeyConfigured()) {
        setIsLoading(false);
        return;
      }

      try {
        // Fetch stats and info
        fetchCollectionStats().then(data => {
          if (data?.total) setStats(data.total);
        }).catch(() => {});

        fetchCollectionInfo().then(data => {
          if (data) setCollectionInfo(data);
        }).catch(() => {});

        // Fetch ALL NFTs - uses pagination to get up to 100
        const data = await fetchAllCollectionNFTs(100);
        if (data?.nfts?.length) {
          // Sort by identifier number
          const sorted = data.nfts.sort((a, b) => 
            parseInt(a.identifier) - parseInt(b.identifier)
          );
          setAllNfts(sorted);
        }
      } catch (err) {
        console.error('Error fetching NFTs:', err);
      }
      setIsLoading(false);
    };

    loadNfts();
  }, []);

  // Filter and display NFTs
  useEffect(() => {
    let filtered = allNfts;
    
    // Apply search filter
    if (searchQuery.trim()) {
      filtered = allNfts.filter(nft => 
        nft.identifier.includes(searchQuery.trim()) ||
        nft.name?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply show all or limit
    if (!showAll && !searchQuery) {
      setDisplayedNfts(filtered.slice(0, VISIBLE_COUNT));
    } else {
      setDisplayedNfts(filtered);
    }
  }, [showAll, allNfts, searchQuery]);

  const handleLoadMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setShowAll(true);
      setLoadingMore(false);
    }, 1200);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.02 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.25 } }
  };

  return (
    <div className="min-h-screen bg-black pt-20 pb-16">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#83B71B]/10 rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#D9DB2A]/10 rounded-full filter blur-[120px]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-4 transition-colors text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-start gap-6">
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-[#83B71B]/20 text-[#83B71B] text-xs font-medium rounded-full border border-[#83B71B]/30">Membership NFT</span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full border border-blue-500/30">Base Chain</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#83B71B] to-[#D9DB2A]">Regenverse</span>
              </h1>

              <p className="text-gray-400 text-sm max-w-xl mb-2">
                The onchain collection for members of the <span className="text-[#83B71B]">regenerates</span> community. Created with 63 NFTs representing our community members.
              </p>
              <p className="text-gray-500 text-xs mb-4 italic">
                "In all things, Jesus be glorified" — Creating a culture of excellence for believers in web3.
              </p>

              <div className="flex flex-wrap gap-3">
                <a href="https://opensea.io/collection/theregenverse" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#83B71B] to-[#D9DB2A] text-black text-sm font-semibold rounded-full">
                  <svg className="w-4 h-4" viewBox="0 0 90 90" fill="currentColor"><path d="M45 0C20.151 0 0 20.151 0 45C0 69.849 20.151 90 45 90C69.849 90 90 69.849 90 45C90 20.151 69.858 0 45 0ZM22.203 46.512L22.392 46.206L34.101 27.891C34.272 27.63 34.677 27.657 34.803 27.945C36.756 32.328 38.448 37.782 37.656 41.175C37.323 42.57 36.396 44.46 35.352 46.206C35.217 46.458 35.073 46.701 34.911 46.935C34.839 47.043 34.713 47.106 34.578 47.106H22.545C22.221 47.106 22.032 46.773 22.203 46.512Z"/></svg>
                  OpenSea
                </a>
                <a href="https://x.com/regenverse" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 text-white text-sm rounded-full hover:border-white/40">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  @regenverse
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="lg:w-56 bg-[#121212]/80 backdrop-blur-md rounded-xl p-4 border border-white/10">
              <h3 className="text-white text-xs font-semibold mb-2">Stats</h3>
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between py-1 border-b border-white/10">
                  <span className="text-gray-400">Floor</span>
                  <span className="text-white font-medium">0.0045 ETH</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/10">
                  <span className="text-gray-400">Supply</span>
                  <span className="text-[#83B71B] font-medium">75</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/10">
                  <span className="text-gray-400">Owners</span>
                  <span className="text-[#D9DB2A] font-medium">{stats?.num_owners || 67}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-400">Unique</span>
                  <span className="text-white font-medium">89%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NFT Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Search and Title */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
          <h2 className="text-sm font-semibold text-white">
            Collection <span className="text-gray-500 font-normal">({displayedNfts.length} of {allNfts.length})</span>
          </h2>
          
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search by # (e.g. 29)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-48 px-4 py-2 pl-9 bg-white/5 border border-white/10 rounded-full text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#83B71B]/50 transition-colors"
            />
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex items-center justify-center py-20">
            <motion.div
              className="w-8 h-8 border-2 border-[#83B71B]/30 border-t-[#83B71B] rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </div>
        )}

        {/* No Results */}
        {!isLoading && displayedNfts.length === 0 && searchQuery && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-sm">No NFTs found for "{searchQuery}"</p>
            <button onClick={() => setSearchQuery('')} className="mt-2 text-[#83B71B] text-sm hover:underline">
              Clear search
            </button>
          </div>
        )}

        {/* Visible NFTs Grid */}
        {!isLoading && displayedNfts.length > 0 && (
        <motion.div variants={containerVariants} initial="hidden" animate="visible"
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {displayedNfts.map((nft, index) => (
                <motion.div
                  key={nft.identifier}
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, y: -3 }}
                  onClick={() => setSelectedNft(nft)}
                  className="group relative aspect-square rounded-xl overflow-hidden border border-white/10 cursor-pointer hover:border-[#83B71B]/50 transition-all duration-200"
                >
                  <div className={`w-full h-full bg-gradient-to-br ${
                    index % 5 === 0 ? 'from-purple-600/40 via-pink-500/30 to-orange-400/40' :
                    index % 5 === 1 ? 'from-cyan-500/40 via-blue-500/30 to-purple-500/40' :
                    index % 5 === 2 ? 'from-green-500/40 via-emerald-400/30 to-teal-500/40' :
                    index % 5 === 3 ? 'from-amber-500/40 via-orange-400/30 to-red-500/40' :
                    'from-indigo-500/40 via-violet-400/30 to-fuchsia-500/40'
                  } flex items-center justify-center`}>
                    {nft.image_url ? (
                      <img src={nft.image_url} alt={nft.name} className="w-full h-full object-cover" loading="lazy" />
                    ) : (
                      <span className="text-4xl font-bold text-white/20">R</span>
                    )}
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-2">
                      <p className="text-white text-xs font-medium truncate">{nft.name}</p>
                    </div>
                  </div>

                  <div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 bg-black/60 rounded text-[10px] text-white font-medium">#{nft.identifier}</div>
                  <div className="absolute top-1.5 right-1.5 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-[8px] font-bold">B</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
        )}

            {/* Blurred Section with Load More overlay */}
            {!isLoading && !searchQuery && !showAll && allNfts.length > VISIBLE_COUNT && (
              <div className="relative mt-3 rounded-2xl overflow-hidden border border-white/10">
                {/* Background NFTs (blurred) */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 p-3">
                  {allNfts.slice(VISIBLE_COUNT, VISIBLE_COUNT + PREVIEW_COUNT).map((nft, index) => (
                    <div
                      key={nft.identifier}
                      className="aspect-square rounded-xl overflow-hidden border border-white/5"
                    >
                      {nft.image_url ? (
                        <img src={nft.image_url} alt={nft.name} className="w-full h-full object-cover" loading="lazy" />
                      ) : (
                        <div className={`w-full h-full bg-gradient-to-br ${
                          (index + VISIBLE_COUNT) % 5 === 0 ? 'from-purple-600/40 via-pink-500/30 to-orange-400/40' :
                          (index + VISIBLE_COUNT) % 5 === 1 ? 'from-cyan-500/40 via-blue-500/30 to-purple-500/40' :
                          (index + VISIBLE_COUNT) % 5 === 2 ? 'from-green-500/40 via-emerald-400/30 to-teal-500/40' :
                          (index + VISIBLE_COUNT) % 5 === 3 ? 'from-amber-500/40 via-orange-400/30 to-red-500/40' :
                          'from-indigo-500/40 via-violet-400/30 to-fuchsia-500/40'
                        } flex items-center justify-center`}>
                          <span className="text-4xl font-bold text-white/20">R</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Blur Overlay with Button */}
                <div className="absolute inset-0 backdrop-blur-md bg-black/60 flex flex-col items-center justify-center gap-3">
                  <p className="text-white/60 text-sm">+{allNfts.length - VISIBLE_COUNT} more NFTs</p>
                  <motion.button
                    onClick={handleLoadMore}
                    disabled={loadingMore}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-gradient-to-r from-[#83B71B] to-[#D9DB2A] text-black font-semibold rounded-full flex items-center gap-2 disabled:opacity-70 shadow-lg shadow-[#83B71B]/20"
                  >
                    {loadingMore ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Loading...
                      </>
                    ) : (
                      <>
                        See All
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
            )}

        {(showAll || searchQuery) && displayedNfts.length > 0 && (
          <div className="text-center mt-6">
            <a href="https://opensea.io/collection/theregenverse" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 bg-white/5 text-white text-sm rounded-full hover:bg-white/10">
              View on OpenSea
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedNft && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedNft(null)}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0, transition: { type: "spring", damping: 25 } }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0d0d0d] rounded-2xl overflow-hidden max-w-sm w-full border-2 border-[#83B71B]/30 shadow-2xl"
            >
              <div className="bg-gradient-to-r from-[#83B71B] to-[#D9DB2A] px-4 py-2 flex items-center justify-between">
                <span className="text-black text-sm font-bold">The Regenverse</span>
                <button onClick={() => setSelectedNft(null)} className="w-6 h-6 bg-black/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="aspect-square bg-gradient-to-br from-purple-600/30 via-pink-500/20 to-orange-400/30 relative flex items-center justify-center">
                {selectedNft.image_url ? (
                  <img src={selectedNft.image_url} alt={selectedNft.name} className="w-full h-full object-cover" />
                ) : (
                  <motion.span className="text-7xl font-bold text-white/30" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }}>R</motion.span>
                )}
                <div className="absolute top-3 right-3 px-2 py-1 bg-blue-500 rounded-full">
                  <span className="text-white text-xs font-bold">Base</span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-xl font-bold text-white mb-1">{selectedNft.name}</h3>
                <p className="text-gray-400 text-xs mb-3">Token ID: {selectedNft.identifier}</p>
                
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="bg-white/5 rounded-lg p-2 text-center">
                    <p className="text-[#83B71B] font-bold text-sm">0.0045 ETH</p>
                    <p className="text-gray-500 text-[10px]">Floor</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-2 text-center">
                    <p className="text-[#D9DB2A] font-bold text-sm">Base</p>
                    <p className="text-gray-500 text-[10px]">Chain</p>
                  </div>
                </div>

                <a href={`https://opensea.io/assets/base/theregenverse/${selectedNft.identifier}`} target="_blank" rel="noopener noreferrer"
                  className="block w-full py-2.5 bg-gradient-to-r from-[#83B71B] to-[#D9DB2A] text-black text-sm font-semibold rounded-full text-center">
                  View on OpenSea
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Regenverse;
