import Grid from './Grid'

const Hero = () => {
    return (
        <div className="flex p-8">
            <Grid />
            <div className="ml-8 flex flex-col justify-center">
                <h1 className="text-5xl font-bold mb-4 text-white">
                    Find a <span className='text-[#F1AEDA]'>skilled</span> <span className="text-[#44967E]">individual</span> to do the job.
                </h1>
                <p className="mb-6 text-white">
                    Green-cube lets you find the right individual for any challenge from development to a marketing promotion.
                </p>
                <div className="space-x-4">
                    <button className="px-6 py-3 bg-black text-white rounded-full">Get started</button>
                    <button className="px-6 py-3 border border-white rounded-full flex items-center text-white">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                        Watch video
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero