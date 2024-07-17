import React, { useState } from 'react';

const ImageModal = ({ src, alt, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={onClose}>
    <div className="max-w-4xl w-full p-4">
      <img src={src} alt={alt} className="w-full h-auto max-h-[80vh] object-contain" />
      <button 
        className="mt-4 px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-colors"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  </div>
);

const GalleryImage = ({ src, alt, onClick }) => (
  <div 
    className="relative overflow-hidden rounded-lg cursor-pointer group"
    onClick={onClick}
  >
    <img 
      src={src} 
      alt={alt} 
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
      <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        View Image
      </p>
    </div>
  </div>
);

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: "/src/assets/comm-manager.jpeg", alt: "Tech Conference 2023" },
    { src: "/src/assets/comm-manager.jpeg", alt: "Web Development Workshop" },
    { src: "/src/assets/comm-manager.jpeg", alt: "Community Meetup" },
    { src: "/src/assets/comm-manager.jpeg", alt: "Annual Hackathon" },
    { src: "/src/assets/comm-manager.jpeg", alt: "AI and ML Seminar" },
    { src: "/src/assets/comm-manager.jpeg", alt: "Networking Event" },
    { src: "/src/assets/comm-manager.jpeg", alt: "UX Design Workshop" },
    { src: "/src/assets/comm-manager.jpeg", alt:"Women in Tech Summit" },
    { src: "/src/assets/comm-manager.jpeg", alt: "Code and Coffee Meetup" },
  ];
  
  return (
    <div className="min-h-screen bg-black px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 text-white">
          our <span className="text-[#44967E]">gallery</span>
        </h1>
        <p className="text-[#DFDFDF] mb-8 max-w-2xl">
          Explore snapshots from our vibrant community events, workshops, and meetups. 
          These moments capture the essence of learning, collaboration, and growth within our tech ecosystem.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <GalleryImage 
              key={index} 
              src={image.src} 
              alt={image.alt} 
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>
      </div>
      {selectedImage && (
        <ImageModal 
          src={selectedImage.src} 
          alt={selectedImage.alt} 
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
};
export default GallerySection;