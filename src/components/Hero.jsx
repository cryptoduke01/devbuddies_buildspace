import React from 'react';
import Grid from './Grid';

const Hero = () => {
  const openZohoForm = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-12 bg-black">
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl w-full">
        <div className="w-full lg:w-5/12 mb-8 lg:mb-0">
          <Grid />
        </div>
        <div className="w-full lg:w-6/12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
            <span className='text-[#83B71B]'>establishing God's kingdom </span>
            <span className='text-[#EFFCF1]'>in the </span><span className="text-[#D9DB2A]"> web3 community</span>
          </h1>
          <p className="mb-10 text-base sm:text-lg text-white">
            regenerates is a community of believers with the mandate to establish the kingdom of GOD in the web3 space
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              className="px-8 py-3 bg-white text-black rounded-full font-normal hover:bg-gray-200 transition-colors"
              onClick={() => openZohoForm('https://forms.zohopublic.eu/devbuddies/form/RSVPForm/formperma/wJMuaDTdp5_ThVPBmMQmmrssyU3wXnXGCxs8y2lO7Ok')}
            >
              rsvp now
            </button>
            <button className="px-6 py-3 text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              watch highlights
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
