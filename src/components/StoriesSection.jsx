import React from 'react';
import { motion } from 'framer-motion';

const StoriesSection = () => {
  const stories = [
    {
      title: "my journey into web3 with God",
      author: "ser binance",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis lectus sit amet est consectetur, at dictum metus efficitur.",
      image: "/images/vision.jpeg",
    },
    {
      title: "my success story with God and web3",
      author: "crypto duke",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas convallis tincidunt. Aliquam erat volutpat.",
      image: "/images/vision.jpeg",
    },
    {
      title: "my web3 journey with God",
      author: "ser binance",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget urna nunc. Nullam congue magna ac dignissim malesuada.",
      image: "/images/vision.jpeg",
    },
  ];

  return (
    <section id="stories-section" className="bg-gradient-to-b from-[#0E0E0E] to-[#121212] py-20 px-6 sm:px-10 lg:px-12 relative">
      {/* Section Header */}
      <div className="relative z-10 max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F0FFF0]">
          stories <span className="text-[#83B71B]">from the community</span>
        </h2>
      </div>

      {/* Stories Grid */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {stories.map((story, index) => (
          <motion.div
            key={index}
            className="relative bg-[#1A1A1A] rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.03 }}
          >
            {/* Image */}
            <div className="h-48 overflow-hidden">
              <img src={story.image} alt={story.title} className="w-full h-full object-cover" />
            </div>
            
            {/* Story Content */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[#F0FFF0] mb-2">{story.title.toLowerCase()}</h3>
              <p className="text-gray-400 text-sm mb-2">by {story.author.toLowerCase()}</p>
              <p className="text-gray-300 text-sm mb-4">{story.content}</p>

              {/* Read More Button */}
              <button className="text-[#83B71B] font-semibold text-sm hover:text-[#7DD87E] transition-colors">
                read more
              </button>
            </div>

            {/* Hover Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#83B71B] to-[#7DD87E] opacity-0 transition-opacity duration-500 hover:opacity-25 rounded-lg"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StoriesSection;
