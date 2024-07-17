import React from 'react';

const TestimonialCard = ({ name, role, image, quote }) => (
  <div className="bg-[#121212] rounded-lg overflow-hidden p-6">
    <p className="text-sm text-[#DFDFDF] mb-4 italic">"{quote}"</p>
    <div className="flex items-center">
      <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4" />
      <div>
        <h3 className="text-lg font-bold text-white">{name}</h3>
        <p className="text-xs text-[#DFDFDF]">{role}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "Frontend Developer",
      image: "/src/assets/presh.jpg",
      quote: "This platform has been instrumental in my growth as a developer. The mentors are top-notch!"
    },
    {
      name: "Jane Smith",
      role: "UX Designer",
      image: "/src/assets/presh.jpg",
      quote: "I've learned so much from the events and workshops. It's an amazing community for tech enthusiasts."
    },
    {
      name: "Mike Johnson",
      role: "Data Scientist",
      image: "/src/assets/presh.jpg",
      quote: "The mentorship program here is unparalleled. It has accelerated my career growth significantly."
    },
  ];

  return (
    <section className="min-h-screen px-4 sm:px-6 lg:px-8 py-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 text-white">
          what our <span className="text-[#F1AEDA]">members say</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;