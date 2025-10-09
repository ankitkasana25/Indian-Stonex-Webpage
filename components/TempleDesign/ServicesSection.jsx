import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Strategic Planning",
      description: "Comprehensive project planning with detailed scope analysis and resource allocation for seamless execution",
      image: "/_next/static/media/icon1.53e2c26d.png"
    },
    {
      id: 2,
      title: "Detailed Drawings",
      description: "Precision technical drawings and 3D visualizations that bring your vision to life with exact specifications",
      image: "/_next/static/media/icon6.b8508dfc.png"
    },
    {
      id: 3,
      title: "On-Site Supervision",
      description: "Expert supervision ensuring quality control and adherence to design specifications throughout the project",
      image: "/_next/static/media/icon3.7b73a018.png"
    },
    {
      id: 4,
      title: "Professional Management",
      description: "End-to-end project management coordinating all aspects from material sourcing to final installation",
      image: "/_next/static/media/icon2.70a949d6.png"
    },
    {
      id: 5,
      title: "Progress Tracking",
      description: "Real-time project monitoring with regular updates and transparent communication at every stage",
      image: "/_next/static/media/icon4.c225f555.png"
    },
    {
      id: 6,
      title: "Timely Delivery",
      description: "Guaranteed project completion within agreed timelines without compromising on quality standards",
      image: "/_next/static/media/icon5.207ee35b.png"
    }
  ];

  const baseUrl = "https://www.indianstonex.com";

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Our <span className="font-semibold text-theme">Comprehensive</span> Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-theme to-amber-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            From initial concept to final installation, we provide end-to-end solutions 
            that ensure exceptional quality and complete satisfaction.
          </p>
        </div>

        {/* Services Grid - Desktop */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:border-amber-200"
            >
              {/* Service Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-theme text-white rounded-full flex items-center justify-center text-sm font-bold">
                0{index + 1}
              </div>
              
              {/* Icon Container */}
              <div className="w-20 h-20 bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto">
                <img
                  src={`${baseUrl}${service.image}`}
                  alt={service.title}
                  className="w-12 h-12 object-contain"
                />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center group-hover:text-hover-theme transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                {service.description}
              </p>
              
              {/* Hover Border Effect */}
              <div className="absolute bottom-0 left-1 w-0 h-1 bg-gradient-to-r from-theme to-amber-600 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Services Grid - Tablet */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 p-6 border border-gray-100 hover:border-theme"
            >
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <img
                    src={`${baseUrl}${service.image}`}
                    alt={service.title}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="w-6 h-6 bg-theme text-white rounded-full flex items-center justify-center text-xs font-bold mb-2">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-theme transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden overflow-x-auto py-4">
          <div className="inline-flex space-x-6 px-4">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="inline-flex flex-col bg-white rounded-xl shadow-lg p-6 min-w-[280px] border border-gray-100"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <img
                      src={`${baseUrl}${service.image}`}
                      alt={service.title}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="w-6 h-6 bg-theme text-white rounded-full flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
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