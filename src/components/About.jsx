import React from 'react';

const AboutSection = () => {
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-6 py-8 bg-black">
      {/* Text Section */}
      <div className="lg:w-2/3 mx-auto bg-[#121212] p-6 text-gray-400 flex flex-col justify-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#EFFCF1] mb-6">
          about <span className="text-[#83B71B]"> the regenerates</span>
        </h1>
        <p className="mb-4">
          the regenerates are a budding community of believers with a mandate to establish the kingdom of GOD in the web3 space.
        </p>
        <p className="mb-4">
          the vision of the <span className='text-[#D9DB2A]'>regenerates</span> as given by GOD is to provide a conclave for believers in the web3 space, like a goshen in Egypt, a safe space for believers who are already in the space to learn and continue to grow with other like-minded christians.
        </p>
        <p className="mb-4">
          we, the regenerates, believe that <span className='text-[#D9DB2A]'>financial security</span> allows us to better serve GOD, and our primary mission is to empower christians in this space to fulfill this mission:
        </p>
        <ul className="list-decimal list-inside pl-4 mb-4">
          <li>to bring as many believers into wealth in the web3 space.</li>
          <li>to provide a <span className='text-[#D9DB2A]'>safe space </span> for believers to learn and grow.</li>
          <li>to equip newbies in the space with the requisite knowledge to navigate the web3 space.</li>
        </ul>
        <p className="font-semibold text-[#83B71B]">
          we are the regenerates, in web3 for HIS glory!
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
