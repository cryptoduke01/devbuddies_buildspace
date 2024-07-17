const EventCard = ({ title, date, time, venue, icon, speakers }) => (
  <div className="bg-[#121212] rounded-lg overflow-hidden p-6">
    <div className="flex justify-between items-center mb-2">
      <h2 className="text-xl font-bold text-white">{title}</h2>
      <img src={icon} alt={title} className="w-6 h-6" />
    </div>
    <p className="text-xs text-gray-400 mb-4">  {`${date} • ${time} • @${venue}`}</p>

    <div className="mb-4">
      <h3 className="text-1xl font-bold text-gray-400 mb-3">speakers</h3>
      <div className="space-y-3">
        {speakers.map((speaker, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={speaker.image} alt={speaker.name} className="w-16 h-16 rounded-full mr-4" />
              <div>
                <p className="text-sm font-semibold text-white">{speaker.name}</p>
                <p className="text-xs text-gray-400">{speaker.role}</p>
              </div>
            </div>
            <button className="text-[10px] bg-transparent border border-white text-white px-2 py-1 rounded-full hover:bg-white hover:text-black transition-colors">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>

    <div className="flex space-x-2">
      <button className="flex-1 px-4 py-2 bg-[#44967E] text-white text-sm rounded-full font-normal hover:bg-[#DFDFDF] hover:text-black transition-colors">
        Attend
      </button>
      <button className="flex-1 px-4 py-2 bg-transparent border border-white text-white text-sm rounded-full font-normal hover:bg-white hover:text-black transition-colors">
        Share
      </button>
    </div>
  </div>
);


const UpcomingEvents = () => {
  const events = [
    {
      title: "dribblers meetup",
      date: "tue, 2nd july",
      time: "2pm",
      venue: "bay arena",
      icon: "/src/assets/favicon.png",
      speakers: [
        { name: "akachukwu egboluche", role: "Community  Manager", image: "/src/assets/comm-manager.jpeg" },
        { name: "precious kayili", role: "CEO Learnspaces", image: "/src/assets/presh.jpg" }
      ]
    },
    {
      title: "backend workshop",
      date: "tue, 2nd july",
      time: "10am",
      venue: "tech hub",
      icon: "/src/assets/favicon.png",
      speakers: [
        { name: "precious kayili", role: "CEO Learnspaces", image: "/src/assets/presh.jpg" },
        { name: "chris iloka", role: "Senior UX Researcher", image: "/src/assets/comm-manager.jpeg" }
      ]
    },
    {
      title: "web dev symposium",
      date: "tue, 2nd july",
      time: "1pm",
      venue: "ode center",
      icon: "/src/assets/favicon.png",
      speakers: [
        { name: "akachukwu egboluche", role: "Frontend Lead at DevBuddies", image: "/src/assets/comm-manager.jpeg" },
        { name: "chris iloka", role: "Senior UX Researcher", image: "/src/assets/presh.jpg" }
      ]
    }
  ];

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 text-white">
          upcoming <span className="text-[#F1AEDA]">events</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;