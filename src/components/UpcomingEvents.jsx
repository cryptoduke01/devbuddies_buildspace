const EventCard = ({ date, title, time, location }) => (
  <div className="bg-gray-800 p-4 rounded-lg mb-4">
    <div className="text-white font-bold">{date}</div>
    <h3 className="text-xl text-[#F1AEDA] mt-2">{title}</h3>
    <p className="text-gray-300">{time}</p>
    <p className="text-gray-300">{location}</p>
  </div>
);

const UpcomingEvents = () => {
  const events = [
    { date: "June 15", title: "React Basics Workshop", time: "7:00 PM - 9:00 PM", location: "Online" },
    { date: "June 20", title: "Python for Data Science", time: "6:30 PM - 8:30 PM", location: "Tech Hub, Downtown" },
    { date: "June 25", title: "JavaScript Coding Challenge", time: "2:00 PM - 5:00 PM", location: "Online" },
  ];

  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;