import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#DFDFDF] py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-white">{question}</h3>
        <span className="text-[#DFDFDF] text-2xl">{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <p className="mt-2 text-sm text-[#DFDFDF]">{answer}</p>}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "How do I join the mentorship program?",
      answer: "To join our mentorship program, simply sign up on our platform and complete your profile. You'll then be able to browse available mentors and request connections."
    },
    {
      question: "Are the events free to attend?",
      answer: "Most of our events are free for members. Some special workshops or conferences may have a nominal fee, which will be clearly indicated in the event details."
    },
    {
      question: "Can I become a mentor?",
      answer: "Absolutely! If you have expertise in a tech-related field and want to give back to the community, you can apply to become a mentor through your dashboard."
    },
    {
      question: "How often are new events added?",
      answer: "We add new events on a weekly basis. Make sure to check the 'Upcoming Events' section regularly or enable notifications to stay updated."
    },
  ];

  return (
    <section className="min-h-screen px-4 sm:px-6 lg:px-8 py-12 bg-black">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 text-white">
          frequently asked <span className="text-[#44967E]">questions</span>
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;