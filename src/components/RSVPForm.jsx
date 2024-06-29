import { useState } from 'react';

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    event: '',
    experience: '',
    expectations: '',
    dietary: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold text-white mb-8">RSVP for an Event</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-800 text-white"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-800 text-white"
            required
          />
          <select
            name="event"
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-800 text-white"
            required
          >
            <option value="">Select an Event</option>
            <option value="react">React Basics Workshop</option>
            <option value="python">Python for Data Science</option>
            <option value="javascript">JavaScript Coding Challenge</option>
          </select>
          <textarea
            name="experience"
            placeholder="Brief description of your coding experience"
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-800 text-white"
            rows="3"
          ></textarea>
          <textarea
            name="expectations"
            placeholder="What do you hope to learn from this event?"
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-800 text-white"
            rows="3"
          ></textarea>
          <input
            type="text"
            name="dietary"
            placeholder="Any dietary restrictions? (if applicable)"
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-800 text-white"
          />
          <button type="submit" className="w-full py-2 px-4 bg-[#44967E] text-white rounded hover:bg-[#357a66]">
            Submit RSVP
          </button>
        </form>
      </div>
    </section>
  );
};

export default RSVPForm;