import React from 'react';

const LeadershipSection = () => {
  const leaders = [
    {
      name: 'john doe',
      position: 'community leader',
      image: '/images/comm-manager.jpeg', // Replace with actual path
      bio: 'passionate leader committed to establishing GOD’s kingdom in web3.',
    },
    {
      name: 'jane smith',
      position: 'head of outreach',
      image: '/images/comm-manager.jpeg',
      bio: 'connecting believers and fostering growth in the community.',
    },
    {
      name: 'mike johnson',
      position: 'education coordinator',
      image: '/images/comm-manager.jpeg',
      bio: 'empowering members with knowledge to navigate the web3 space.',
    },
  ];

  return (
    <div className="bg-black py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-[#EFFCF1] mb-12">
        community <span className="text-[#83B71B]">leadership</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {leaders.map((leader, index) => (
          <div key={index} className="bg-[#121212] rounded-lg overflow-hidden shadow-lg p-6 hover:bg-[#1a1a1a] transition-colors">
            <img src={leader.image} alt={leader.name} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-[#83B71B]" />
            <h3 className="text-xl font-semibold text-[#EFFCF1] text-center">{leader.name}</h3>
            <p className="text-[#D9DB2A] text-center mb-2">{leader.position}</p>
            <p className="text-gray-400 text-center">{leader.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadershipSection;
