import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Marble Temple Design",
      image: "/_next/static/media/icon1.53e2c26d.png"
    },
    {
      id: 2,
      title: "Custom Carving & Engraving",
      image: "/_next/static/media/icon2.70a949d6.png"
    },
    {
      id: 3,
      title: "3D Visualization & Planning",
      image: "/_next/static/media/icon4.c225f555.png"
    },
    {
      id: 4,
      title: "Home Mandir Installation",
      image: "/_next/static/media/icon6.b8508dfc.png"
    },
    {
      id: 5,
      title: "Vastu-Aligned Layouts",
      image: "/_next/static/media/icon3.7b73a018.png"
    },
    {
      id: 6,
      title: "Project Tracking & Support",
      image: "/_next/static/media/icon5.207ee35b.png"
    }
  ];

  const baseUrl = "https://www.indianstonx.com";

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#ff7e2e] mb-3">
            Our Specialized Marble Services
          </h2>
          <div className="w-20 h-1 bg-[#ff7e2e] mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Experience craftsmanship that blends tradition with innovation — from bespoke temple designs 
            to modern 3D visualization and expert project assistance.
          </p>
        </div>
        
        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-center p-10 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#ff7e2e]/30 hover:border-[#ff7e2e] hover:scale-105 bg-white"
            >
              <div
                className="w-24 h-24 bg-contain bg-center bg-no-repeat mb-6"
                style={{ backgroundImage: `url(${baseUrl}${service.image})` }}
              ></div>
              <p className="text-xl font-semibold text-gray-800 text-center mb-2">
                {service.title}
              </p>
              <div className="w-12 h-[2px] bg-[#ff7e2e] mb-3"></div>
              <p className="text-gray-500 text-center text-sm">
                Exceptional artistry and quality in every project, 
                ensuring timeless elegance for your sacred and living spaces.
              </p>
            </div>
          ))}
        </div>
        
        {/* Mobile Scroll */}
        <div className="md:hidden mt-10 overflow-x-auto whitespace-nowrap py-4 px-2">
          <div className="inline-flex space-x-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="inline-flex flex-col items-center p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-[#ff7e2e]/30 hover:border-[#ff7e2e] bg-white min-w-[220px]"
              >
                <div
                  className="w-20 h-20 bg-contain bg-center bg-no-repeat mb-4"
                  style={{ backgroundImage: `url(${baseUrl}${service.image})` }}
                ></div>
                <p className="text-lg font-semibold text-gray-800 text-center mb-2">
                  {service.title}
                </p>
                <div className="w-10 h-[2px] bg-[#ff7e2e] mb-2"></div>
                <p className="text-gray-500 text-center text-xs">
                  Designed to reflect divine craftsmanship and timeless beauty.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
