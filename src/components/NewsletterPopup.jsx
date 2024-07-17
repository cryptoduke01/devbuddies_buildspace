import React, { useState } from 'react';

const NewsletterPopup = ({ onClose }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log('Subscribed with email:', email);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-[#121212] p-8 rounded-lg max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold text-white mb-4">subscribe to our newsletter</h2>
        <p className="text-gray-400 mb-6">stay updated with our latest events, opportunities, and tech insights.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="enter your email"
            className="w-full px-4 py-2 rounded-md bg-[#2A2A2A] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F1AEDA]"
            required
          />
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-[#F1AEDA] text-black px-6 py-2 rounded-full hover:bg-[#d690bf] transition-colors"
            >
              subscribe
            </button>
            <button
              type="button"
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsletterPopup;