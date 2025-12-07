import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NewsletterPopup = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Open Substack in new tab with email pre-filled
    // This is the most reliable way since Substack doesn't have a public API
    const substackUrl = `https://substack.com/@regenerates?email=${encodeURIComponent(email)}`;
    window.open(substackUrl, '_blank');
    
    setStatus('success');
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25 }}
          className="bg-[#121212] p-6 sm:p-8 rounded-2xl max-w-md w-full border border-white/10 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Icon */}
          <div className="w-14 h-14 bg-gradient-to-br from-[#83B71B]/20 to-[#D9DB2A]/20 rounded-full flex items-center justify-center mb-4 mx-auto">
            <svg className="w-7 h-7 text-[#83B71B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 text-center">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-400 text-sm mb-6 text-center">
            Stay updated with our latest events, alpha calls, and community updates.
          </p>

          {status === 'success' ? (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-4"
            >
              <div className="w-12 h-12 bg-[#83B71B]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-[#83B71B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-[#83B71B] font-semibold">Redirecting to Substack...</p>
              <p className="text-gray-500 text-xs mt-1">Complete your subscription there</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#83B71B]/50 transition-colors"
                  required
                  disabled={status === 'loading'}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-3 bg-gradient-to-r from-[#83B71B] to-[#D9DB2A] text-black font-semibold rounded-xl hover:shadow-lg hover:shadow-[#83B71B]/30 transition-all disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Redirecting...
                  </>
                ) : (
                  <>
                    Subscribe on Substack
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>

              <p className="text-gray-500 text-xs text-center">
                You'll be redirected to our Substack to complete subscription
              </p>
            </form>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default NewsletterPopup;