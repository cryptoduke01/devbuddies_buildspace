const MentorCard = ({ name, expertise, image }) => (
    <div className="bg-gray-800 p-4 rounded-lg text-center">
      <img src={image} alt={name} className="w-32 h-32 rounded-full mx-auto mb-4" />
      <h3 className="text-xl text-white font-bold">{name}</h3>
      <p className="text-[#44967E]">{expertise}</p>
    </div>
  );
  
  const FeaturedMentors = () => {
    const mentors = [
      { name: "Alice Johnson", expertise: "React & Node.js", image: "/alice.jpg" },
      { name: "Bob Smith", expertise: "Python & Machine Learning", image: "/bob.jpg" },
      { name: "Carol Davis", expertise: "UX Design & Frontend", image: "/carol.jpg" },
    ];
  
    return (
      <section className="py-12 bg-black">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Featured Mentors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mentors.map((mentor, index) => (
              <MentorCard key={index} {...mentor} />
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default FeaturedMentors;