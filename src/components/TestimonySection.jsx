import React from 'react';
import { motion } from 'framer-motion';

const TestimonySection = () => {
  const testimonies = [
    {
      title: "a leap into web3 creativity",
      author: "Feekaryo",
      content:
        "“with the help of the <span className='text-[#83B71B]'>regenerates</span>, my younger sister started her web3 video creation journey. she was unsure of what to do, but someone on the team inspired her, and now she's doing amazing!”",
    },
    {
      title: "a spiritual journey into web3",
      author: "Gifted",
      content:
        "“The Lord led me to this space amidst confusion and uncertainty. I now realize how much I can achieve through Christ and the strength he provides.”",
    },
    {
      title: "a journey of inspiration",
      author: "Duke Of Web3",
      content:
        "“as soon as i joined the <span className='text-[#83B71B]'>regenerates</span>, i was so happy to find a <span className='text-[#83B71B]'>community</span> that had the same interests as me, and since then it's been a fun ride driving towards one purpose while trying to achieve our singular dreams.”",
    },
  ];

  return (
    <>
      <section
        id="testimonies-section"
        className="bg-gradient-to-b from-[#0E0E0E] to-[#121212] py-20 px-6 sm:px-10 lg:px-12"
      >
        {/* Section Header */}
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F0FFF0]">
            stories <span className="text-[#83B71B]">from the community</span>
          </h2>
        </div>

        {/* Testimonies Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonies.map((testimony, index) => (
            <motion.div
              key={index}
              className="relative bg-[#1A1A1A] rounded-lg shadow-lg overflow-hidden p-6 hover:shadow-xl transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.03 }}
            >
              {/* Author Section */}
              <div className="flex items-center mb-3">
                <div className="h-10 w-10 bg-[#83B71B] rounded-full flex items-center justify-center font-bold text-white uppercase">
                  {testimony.author.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="text-[#F0FFF0] font-medium">{testimony.author}</p>
                  <p className="text-gray-400 text-xs">member</p>
                </div>
              </div>

              {/* Testimony Content */}
              <div className="ml-13">
                <h3 className="text-lg font-semibold text-[#F0FFF0] mb-1">
                  {testimony.title}
                </h3>
                <p
                  className="text-gray-300 text-sm"
                  dangerouslySetInnerHTML={{ __html: testimony.content }}
                ></p>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#83B71B] to-[#7DD87E] opacity-0 transition-opacity duration-500 hover:opacity-25 rounded-lg"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Banner Section */}
      <section className="relative">
        <img
          src={'./images/belowbanner.png'}
          alt="We are the regenerates banner"
          className="w-full object-cover"
        />
      </section>
    </>
  );
};

export default TestimonySection;
