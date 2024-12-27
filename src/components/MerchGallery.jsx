import React from 'react';
import Slider from 'react-slick';  // Import react-slick
import 'slick-carousel/slick/slick.css';  // Import slick carousel CSS
import 'slick-carousel/slick/slick-theme.css';  // Import slick theme CSS

const MerchGallery = () => {
  const items = [
    {
      type: 'logo',
      images: ['/api/placeholder/400/400', '/api/placeholder/400/400'],
      description: 'Brand Logos',
      className: 'col-span-2'
    },
    {
      type: 'merch',
      images: ['/api/placeholder/400/400', '/api/placeholder/400/400'],
      description: 'Premium Sweatshirts',
      className: 'col-span-2'
    },
    {
      type: 'accessories',
      images: ['/api/placeholder/400/400'],
      description: 'Wristbands Collection',
      className: 'col-span-1'
    },
    {
      type: 'social',
      images: ['/api/placeholder/400/400'],
      description: 'Social Media',
      className: 'col-span-1'
    },
    {
      type: 'shirts',
      images: ['/api/placeholder/400/400', '/api/placeholder/400/400'],
      description: 'T-Shirt Collection',
      className: 'col-span-2'
    }
  ];

  // Slick settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust to your preference
  };

  return (
    <section className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Slider {...settings}> {/* Wrap your items with Slider component */}
          {items.map((item, index) => (
            <div key={index} className={`${item.className}`}>
              <div className="group relative bg-black border border-[#83B71B] hover:border-2 rounded-lg overflow-hidden">
                <div className={`grid ${
                  item.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'
                } gap-1 p-1`}>
                  {item.images.map((image, imgIndex) => (
                    <div key={imgIndex} className="relative aspect-square overflow-hidden bg-[#0E0E0E]">
                      <img
                        src={image}
                        alt={`${item.description} ${imgIndex + 1}`}
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black via-black/90 to-transparent">
                  <p className="text-[#83B71B] font-medium text-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default MerchGallery;