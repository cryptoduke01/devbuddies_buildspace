import { useState } from "react";
import { faqs } from "../constants";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#DFDFDF] py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-white">{question}</h3>
        <span className="text-[#DFDFDF] text-2xl">{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <p className="mt-2 text-sm text-[#DFDFDF]">{answer}</p>}
    </div>
  );
};

const FAQ = () => {
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
