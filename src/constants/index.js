import assets from "../assets";

const mentors = [
  {
    name: "akachukwu egboluche",
    expertise: "React & Node.js",
    image: assets.manager,
  },
  {
    name: "precious kayili",
    expertise: "Python & Machine Learning",
    image: assets.presh,
  },
  {
    name: "chris iloka",
    expertise: "UX Design & Frontend",
    image: assets.manager,
  },
  { name: "salem kinrin", expertise: "DevOps & Cloud", image: assets.presh },
  {
    name: "kim tsok",
    expertise: "Mobile Development",
    image: assets.manager,
  },
  {
    name: "james okoroafor",
    expertise: "Mobile Development",
    image: assets.presh,
  },
];

const events = [
  {
    title: "dribblers meetup",
    date: "tue, 2nd july",
    time: "2pm",
    venue: "bay arena",
    icon: assets.favicon,
    speakers: [
      {
        name: "akachukwu egboluche",
        role: "Community  Manager",
        image: assets.manager,
      },
      {
        name: "precious kayili",
        role: "CEO Learnspaces",
        image: assets.presh,
      },
    ],
  },
  {
    title: "backend workshop",
    date: "tue, 2nd july",
    time: "10am",
    venue: "tech hub",
    icon: assets.favicon,
    speakers: [
      {
        name: "precious kayili",
        role: "CEO Learnspaces",
        image: assets.presh,
      },
      {
        name: "chris iloka",
        role: "Senior UX Researcher",
        image: assets.manager,
      },
    ],
  },
  {
    title: "web dev symposium",
    date: "tue, 2nd july",
    time: "1pm",
    venue: "ode center",
    icon: assets.favicon,
    speakers: [
      {
        name: "akachukwu egboluche",
        role: "Frontend Lead at DevBuddies",
        image: assets.manager,
      },
      {
        name: "chris iloka",
        role: "Senior UX Researcher",
        image: assets.presh,
      },
    ],
  },
];

const testimonials = [
  {
    name: "John Doe",
    role: "Frontend Developer",
    image: assets.presh,
    quote:
      "This platform has been instrumental in my growth as a developer. The mentors are top-notch!",
  },
  {
    name: "Jane Smith",
    role: "UX Designer",
    image: assets.presh,
    quote:
      "I've learned so much from the events and workshops. It's an amazing community for tech enthusiasts.",
  },
  {
    name: "Mike Johnson",
    role: "Data Scientist",
    image: assets.presh,
    quote:
      "The mentorship program here is unparalleled. It has accelerated my career growth significantly.",
  },
];

const faqs = [
  {
    question: "How do I join the mentorship program?",
    answer:
      "To join our mentorship program, simply sign up on our platform and complete your profile. You'll then be able to browse available mentors and request connections.",
  },
  {
    question: "Are the events free to attend?",
    answer:
      "Most of our events are free for members. Some special workshops or conferences may have a nominal fee, which will be clearly indicated in the event details.",
  },
  {
    question: "Can I become a mentor?",
    answer:
      "Absolutely! If you have expertise in a tech-related field and want to give back to the community, you can apply to become a mentor through your dashboard.",
  },
  {
    question: "How often are new events added?",
    answer:
      "We add new events on a weekly basis. Make sure to check the 'Upcoming Events' section regularly or enable notifications to stay updated.",
  },
];

const partners = [
  {
    name: "Learnspaces",
    logo: assets.learnspaces,
    description: "study, share, collaborate and focus with your squad.",
  },
  {
    name: "Alpha Blue Foundation",
    logo: assets.alphablue,
    description:
      "Nonprofit organization equpping individuals with digital skills for tech growth.",
  },
  {
    name: "Blue Algorithm Technologies",
    logo: assets.alphablue,
    description:
      "Leading AI and machine learning solutions provider for businesses.",
  },
];

const images = [
  { src: assets.manager, alt: "Tech Conference 2023" },
  { src: assets.manager, alt: "Web Development Workshop" },
  { src: assets.manager, alt: "Community Meetup" },
  { src: assets.manager, alt: "Annual Hackathon" },
  { src: assets.manager, alt: "AI and ML Seminar" },
  { src: assets.manager, alt: "Networking Event" },
  { src: assets.manager, alt: "UX Design Workshop" },
  { src: assets.manager, alt: "Women in Tech Summit" },
  { src: assets.manager, alt: "Code and Coffee Meetup" },
];

export { mentors, events, testimonials, faqs, partners, images };
