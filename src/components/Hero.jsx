import Grid from './Grid'

const Hero = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-16">
      <div className="flex items-center justify-between max-w-6xl w-full">
        <Grid className="w-5/12" />
        <div className="w-6/12">
          <h1 className="text-6xl font-bold mb-6 leading-tight text-white">
           <span className='text-[#F1AEDA]'>community based </span>
           coding mentorship for<span className="text-[#44967E]"> friends and locals</span>
          </h1>
          <p className="mb-10 text-lg text-white">
            dev-buddies lets you have casual coding sessions with friends to learn and solve problems together. share knowledge and support each other's journey in a relaxed social setting.
          </p>
          <div className="flex space-x-6">
            <button className="px-8 py-3 bg-white text-black rounded-full font-normal hover:bg-gray-200 transition-colors">rsvp now</button>
            <button className="px-6 py-3 text-white rounded-full flex items-center hover:bg-gray-800 transition-colors">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              watch highlights
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero