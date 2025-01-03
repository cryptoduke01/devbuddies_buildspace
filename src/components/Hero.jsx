import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Grid from './Grid';

const Hero = () => {
  const { scrollY } = useScroll();
  const leftBgY = useTransform(scrollY, [0, 1000], [0, -50]);
  const rightBgY = useTransform(scrollY, [0, 1000], [0, 50]);
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0.8]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.95]);

  const [isModalOpen, setModalOpen] = useState(false);
  const [isAgreed, setAgreed] = useState(false);

  const handleJoinClick = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  const handleAgreeAndJoin = () => {
    if (isAgreed) {
      window.open("https://forms.gle/TGyRHVCBYwovHvhd7", "_blank"); // Opens the Google Form in a new tab
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-12 bg-black relative overflow-hidden">
      <motion.div
        style={{ y: leftBgY }}
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-green-500/10 to-transparent rounded-full filter blur-3xl"
      />
      <motion.div
        style={{ y: rightBgY }}
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-yellow-500/10 to-transparent rounded-full filter blur-3xl"
      />

      <motion.div
        style={{ opacity: contentOpacity, scale }}
        className="flex flex-col lg:flex-row items-center justify-between max-w-7xl w-full relative z-10"
      >
        <motion.div
          className="w-full lg:w-5/12 mb-8 lg:mb-0 hover:scale-105 transition-transform duration-500"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Grid />
        </motion.div>

        <motion.div className="w-full lg:w-6/12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-[#83B71B]">
            Establishing God's Kingdom in Web3
          </h1>
          <p className="mb-12 text-base sm:text-lg text-white/90 leading-relaxed">
            regenerates is a community of believers with the mandate to establish God's Kingdom in the web3 space.
          </p>
          <div className="flex flex-wrap gap-6 items-center mt-6">
            <button
              className="px-6 py-3 bg-white/90 text-black rounded-full font-normal hover:scale-105 transition-transform w-full sm:w-auto"
              onClick={handleJoinClick}
            >
              join community
            </button>
            <a
              href="https://x.com/regener8s"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-white text-white rounded-full font-normal hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-x-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.864v4.272a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={2} />
              </svg>
              view resources
            </a>

          </div>
        </motion.div>
      </motion.div>

      {isModalOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative bg-gradient-to-br from-[#222222] to-[#333333] text-white rounded-lg p-6 w-11/12 max-w-md shadow-xl">
            {/* Close Icon */}
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-transform"
              onClick={handleCloseModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="text-xl font-bold text-[#83B71B] mb-4">Community Rules</h2>
            <div className="h-40 overflow-y-scroll mb-4 text-sm text-gray-300">
              <p><strong>1. Be Respectful</strong>: Treat others with kindness, empathy, and respect.</p>
              <p><strong>2. Mind your Language</strong>: The use of foul language, swear words, and all is highly prohibited.</p>
              <p><strong>3. Avoid Self-Promotion</strong>: Don’t self-promote without the permission of the admins.</p>
              <p><strong>4. No Irrelevant Content</strong>: Avoid posting content that is irrelevant to the community.</p>
              <p><strong>5. Stick to The Purpose of the Group</strong>: We have some subgroups in the community, make sure to maximize their individual purposes.</p>
              <p><strong>6. Be Authentic</strong>: Verify content before sending it to the community, to avoid scams.</p>
              <p><strong>7. Respect Moderators</strong>: Adhere to community moderators' decisions.</p>
              <p><strong>8. Report Misconduct</strong>: Inform moderators of any rule violations in the community and DMs.</p>

              <h3 className="mt-4 text-lg font-semibold">CONSEQUENCES OF MISCONDUCT</h3>
              <p><strong>1. Warning</strong>: First-time offenders receive a warning from moderators.</p>
              <p><strong>2. Temporary Removal</strong>: Repeat offenders face a temporary ban from the community.</p>
              <p><strong>3. Permanent Removal</strong>: Severe or repeated misconduct leads to a permanent ban.</p>

              <h3 className="mt-4 text-lg font-semibold">ADMINISTRATION</h3>
              <p><strong>1. Admins</strong>: Admins enforce community guidelines.</p>
              <p><strong>2. Report Misconduct</strong>: Members can report violations of rules to the Admins.</p>
              <p><strong>3. Appeal</strong>: Banned members can appeal to moderators for reconsideration.</p>
              <p className="mt-4 text-center text-xl font-semibold">Keep loving JESUS!!</p>
            </div>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="agree"
                className="mr-2"
                checked={isAgreed}
                onChange={() => setAgreed(!isAgreed)}
              />
              <label htmlFor="agree" className="text-sm text-gray-300">
                I agree to the community rules.
              </label>
            </div>
            <button
              className={`w-full px-6 py-3 rounded-full text-white ${isAgreed ? 'bg-[#83B71B] hover:scale-105 transition-transform' : 'bg-gray-400 cursor-not-allowed'
                }`}
              disabled={!isAgreed}
              onClick={handleAgreeAndJoin}
            >
              join community
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Hero;
