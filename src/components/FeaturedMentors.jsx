import { mentors } from "../constants";

const MentorCard = ({ name, expertise, image }) => (
  <div className="bg-[#121212] rounded-lg overflow-hidden p-6">
    <div className="flex items-center mb-4">
      <img src={image} alt={name} className="w-16 h-16 rounded-full mr-4" />
      <div>
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <p className="text-sm text-[#DFDFDF]">{expertise}</p>
      </div>
    </div>
    <p className="text-xs text-gray-400 mb-4">
      Passionate about helping others grow in their tech journey.
    </p>
    <div className="flex space-x-2">
      <button className="flex-1 px-4 py-2 bg-[#DFDFDF] text-black text-sm rounded-md font-normal hover:bg-[#d690bf] hover:text-white transition-colors">
        Connect
      </button>
      <button className="flex-1 px-4 py-2 bg-transparent border border-[#DFDFDF] text-[#DFDFDF] text-sm rounded-md font-normal hover:bg-[#DFDFDF] hover:text-black transition-colors">
        View Profile
      </button>
    </div>
  </div>
);

const FeaturedMentors = () => {
  return (
    <section className="min-h-screen px-4 sm:px-6 lg:px-8 py-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 text-white">
          featured <span className="text-[#44967E]">mentors</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((mentor, index) => (
            <MentorCard key={index} {...mentor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedMentors;
