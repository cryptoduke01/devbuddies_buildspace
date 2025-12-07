import React from 'react';
import { motion } from 'framer-motion';

const EventsSection = () => {
  const events = [
    {
      title: "GM With Jesus",
      date: "Daily",
      time: "08:00",
      location: "Twitter Spaces",
      description: "start your day with faith-driven prayers and conversations with insights into the web3 space",
      image: "/images/gmwithJesus.png",
      calendarUrl: "https://twitter.com/regener8s",
    },
    {
      title: "Alpha Calls",
      date: "Fridays",
      time: "19:00",
      location: "Whatsapp Group",
      description: "exclusive discussions on the latest alpha in web3, empowering community members.",
      image: "/images/alphacalls.png",
      recurrence: "FREQ=WEEKLY;BYDAY=FR",
    },
    {
      title: "Prayer Meetings",
      date: "Wednesdays",
      time: "20:00",
      location: "Whatsapp Group",
      description: "join us in heartfelt prayers, strengthening our faith and unity in the Web3 journey.",
      image: "/images/prayermeets.png",
      recurrence: "FREQ=WEEKLY;BYDAY=WE",
    },
  ];

  // Generate Google Calendar URL
  const generateCalendarUrl = (event) => {
    const title = encodeURIComponent(event.title + " - Regenerates");
    const details = encodeURIComponent(event.description);
    const location = encodeURIComponent(event.location);
    
    // For recurring events, we'll just open a simple reminder
    const baseUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE";
    return `${baseUrl}&text=${title}&details=${details}&location=${location}`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="events-section" className="bg-[#121212] pt-16 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Gradient Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#83B71B] to-[#D9DB2A] rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-[#83B71B] to-[#D9DB2A] rounded-full filter blur-3xl opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#EFFCF1] mb-8">
          regular <span className="text-[#83B71B]">events</span>
        </h2>
        
        {/* Events Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-white/10 backdrop-blur-lg bg-[#121212]/60 shadow-lg transition-shadow duration-300 hover:shadow-xl"
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
            >
              {/* Event Image */}
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              
              {/* Event Content */}
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-[#EFFCF1] mb-2">{event.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{event.description}</p>
                
                {/* Event Details */}
                <div className="text-sm text-gray-300 flex justify-between items-center mb-4">
                  <span>
                    <span className="font-semibold text-[#83B71B]">Date:</span> {event.date}
                  </span>
                  <span>
                    <span className="font-semibold text-[#83B71B]">Location:</span> {event.location}
                  </span>
                </div>

                {/* Add to Calendar Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(generateCalendarUrl(event), '_blank');
                  }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-[#83B71B]/20 border border-white/10 hover:border-[#83B71B]/50 rounded-full text-xs text-gray-300 hover:text-[#83B71B] transition-all relative z-10"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Add to Calendar
                </button>
              </div>

              {/* Gradient Border on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#83B71B]/0 via-[#D9DB2A]/0 to-[#83B71B]/0 group-hover:from-[#83B71B]/20 group-hover:via-[#D9DB2A]/20 group-hover:to-[#83B71B]/20 rounded-lg transition-all duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
