import React from 'react';

const CustomJainDesigns = () => {
  const specializations = [
    {
      id: 1,
      title: "Sacred Symbolism",
      description: "Integrate Astha Mangal and spiritual symbols that embody Jain principles of peace and enlightenment in your sacred space",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Enlightenment Panels",
      description: "Beautifully crafted Sammed Shikhar panels depicting the journey to spiritual awakening and liberation",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Divine Placement",
      description: "Expert guidance on sacred geometry and Vastu-compliant placement of deities for optimal spiritual energy flow",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Artisan Carvings",
      description: "Exquisite hand-carved details featuring traditional Jain motifs, Tirthankara depictions, and sacred geometry",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Sacred Storage",
      description: "Elegantly designed storage solutions for religious texts, ceremonial items, and spiritual accessories",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Sacred <span className="font-semibold text-amber-600">Jain Design</span> Excellence
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Transform your spiritual vision into reality with our bespoke Jain temple designs that blend 
            ancient traditions with contemporary craftsmanship for a truly divine experience.
          </p>
        </div>

        {/* Features Grid - Desktop */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {specializations.map((item, index) => (
            <div 
              key={item.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:border-amber-200 text-center"
            >
              {/* Feature Number */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>
              
              {/* Icon Container */}
              <div className="w-16 h-16 bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 text-amber-600">
                {item.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-semibold text-gray-800 mb-4 group-hover:text-amber-700 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
              
              {/* Hover Border Effect */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Features Grid - Tablet */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-6">
          {specializations.map((item, index) => (
            <div 
              key={item.id}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 p-6 border border-gray-100 hover:border-amber-200"
            >
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 text-amber-600 flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-xs font-bold mb-2">
                    {index + 1}
                  </div>
                  <h3 className="text-base font-semibold text-gray-800 mb-2 group-hover:text-amber-700 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden overflow-x-auto py-4">
          <div className="inline-flex space-x-6 px-4">
            {specializations.map((item, index) => (
              <div 
                key={item.id}
                className="inline-flex flex-col bg-white rounded-xl shadow-lg p-6 min-w-[280px] border border-gray-100 text-center"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl flex items-center justify-center text-amber-600 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-base font-semibold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default CustomJainDesigns;