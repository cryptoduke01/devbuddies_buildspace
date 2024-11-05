import React from 'react';

const AboutSection = () => {
  return (
    <div className="min-h-screen p-6 bg-black">
      {/* Text Section */}
      <div className="lg:w-2/3 bg-[#121212] p-6 text-gray-400 flex flex-col justify-center h-full">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#EFFCF1] mb-6">
          about <span className="text-[#83B71B]">regenerates</span>
        </h1>
        <p className="mb-4">
          The Regenerates are a budding community of Believers with a mandate to establish the kingdom of GOD in the Web3 space.
        </p>
        <p className="mb-4">
          The vision of The Regenerates as given by GOD is to provide a conclave for Believers in the Web3 space, like a Goshen in Egypt, a safe space for Believers who are already in the space to learn and continue to grow with other like-minded Christians. It’s also to serve as a gate for Believers to come into wealth locked in the Web3 world and feed off this wealth like the Israelites in Goshen fed off the land of Egypt and grew in number, strength, and substance.
        </p>
        <p className="mb-4">
          We, The Regenerates, believe that financial security allows us to better serve GOD, and our primary mission is to empower Christians in this space to fulfill this mission:
        </p>
        <ul className="list-decimal list-inside pl-4 mb-4">
          <li>To bring as many believers into wealth in the Web3 space.</li>
          <li>To provide a safe space for Believers to learn and grow.</li>
          <li>To equip newbies in the space with the requisite knowledge to navigate the Web3 space.</li>
        </ul>
        <p className="font-semibold text-[#83B71B]">
          We are The Regenerates, in Web3 for HIS glory!
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
