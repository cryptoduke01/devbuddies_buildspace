import React from 'react';

const Grid = () => {
  return (
    <div className="relative w-full max-w-[28rem] mx-auto pt-8">
      {/* Connecting lines behind the grid */}
      <div className="absolute inset-0 pointer-events-none z-0"> {/* Set z-index to 0 */}
        <svg className="w-full h-full">
          {/* Horizontal connecting lines, centered on the grid */}
          <line x1="15%" y1="16.7%" x2="85%" y2="16.7%" className="stroke-[#83B71B] stroke-2"/>
          <line x1="15%" y1="50%" x2="85%" y2="50%" className="stroke-[#83B71B] stroke-2"/>
          <line x1="15%" y1="83.3%" x2="85%" y2="83.3%" className="stroke-[#83B71B] stroke-2"/>
          
          {/* Vertical connecting lines, centered on the grid */}
          <line x1="16.7%" y1="15%" x2="16.7%" y2="85%" className="stroke-[#83B71B] stroke-2"/>
          <line x1="50%" y1="15%" x2="50%" y2="85%" className="stroke-[#83B71B] stroke-2"/>
          <line x1="83.3%" y1="15%" x2="83.3%" y2="85%" className="stroke-[#83B71B] stroke-2"/>
        </svg>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-4 aspect-square relative z-10">
        {/* First row */}
        <div className="bg-[#83B71B] rounded-full hover:opacity-80 transition-opacity cursor-pointer flex items-center justify-center">
          <img src="/images/cross.jpg" alt="Blockchain Icon" className="w-2/3 h-2/3 rounded-full" />
        </div>
        <div className="bg-[#EFFCF1] rounded-full flex items-center justify-center">
          <img src="/images/crypto.jpg" alt="Crypto Symbol" className="w-2/3 h-2/3 rounded-full" />
        </div>
        <div className="bg-[#D9DB2A] rounded-full hover:opacity-80 transition-opacity cursor-pointer flex items-center justify-center">
          <img src="/images/community.jpg" alt="Community Icon" className="w-2/3 h-2/3 rounded-full" />
        </div>
        
        {/* Middle row */}
        <div className="bg-[#EFFCF1] rounded-full flex items-center justify-center">
          <img src="/images/prayer.jpg" alt="Regeneration Icon" className="w-2/3 h-2/3 rounded-full" />
        </div>
        <div className="bg-[#83B71B] rounded-full relative flex items-center justify-center">
          <img src="/images/regen.jpg" alt="Faith Icon" className="w-2/3 h-2/3 rounded-full" /> {/* Center box */}
        </div>
        <div className="bg-[#EFFCF1] rounded-full flex items-center justify-center">
          <img src="/images/dollars.jpg" alt="Connection Icon" className="w-2/3 h-2/3 rounded-full" />
        </div>
        
        {/* Bottom row */}
        <div className="bg-[#83B71B] rounded-full hover:opacity-80 transition-opacity cursor-pointer flex items-center justify-center">
          <img src="/images/bible.jpg" alt="Transformation Icon" className="w-2/3 h-2/3 rounded-full" />
        </div>
        <div className="bg-[#EFFCF1] rounded-full flex items-center justify-center">
          <img src="/images/love.jpg" alt="Abstract Icon" className="w-2/3 h-2/3 rounded-full" />
        </div>
        <div className="bg-[#D9DB2A] rounded-full hover:opacity-80 transition-opacity cursor-pointer flex items-center justify-center">
          <img src="/images/blockchain.jpg" alt="Symbolic Icon" className="w-2/3 h-2/3 rounded-full"/>
        </div>
      </div>
    </div>
  );
};

export default Grid;
