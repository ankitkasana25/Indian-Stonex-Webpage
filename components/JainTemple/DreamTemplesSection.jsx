import React from 'react';

const DreamTemplesSection = () => {
  const baseUrl = "https://www.indianstonex.com";
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* First Row - Text and Image */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mb-12">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Dream Temples Built Upon Faith, Crafted with Devotion
            </h2>
            <p className="text-gray-600 leading-relaxed">
              For over 25 years, Indian Stonex Stone Arts India has been dedicated to crafting exquisite Communal temples, Pooja Rooms, and Home temples that embody faith and devotion across the globe. Our legacy is built on principles of trust and artistry, with skilled artisans meticulously creating each piece to reflect our rich cultural heritage. Using high-quality Vietnam marble, we ensure that every temple is a unique masterpiece, seamlessly blending traditional craftsmanship with contemporary aesthetics. Our commitment to excellence and our clients' trust have been the cornerstones of our success, allowing us to create sacred spaces that inspire and nurture devotion.
            </p>
          </div>
          
          {/* Image */}
          <div className="lg:w-1/2 flex justify-center">
            <img 
              alt="25 Years Experience" 
              width={164} 
              height={164}
              src={`${baseUrl}/_next/static/media/years101.fcbd7c5e.png`}
              srcSet={`${baseUrl}/_next/static/media/years101.fcbd7c5e.png?w=256&q=75 1x, ${baseUrl}/_next/static/media/years101.fcbd7c5e.png?w=384&q=75 2x`}
              className="w-40 h-40 md:w-48 md:h-48"
            />
          </div>
        </div>

        {/* Second Row - GIF and Features List */}
        <div className="flex flex-col lg:flex-row gap-8 mt-12">
          {/* GIF Section */}
          <div className="lg:w-1/2">
            <div className="relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${baseUrl}/_next/static/media/international.9208efa5.gif)` }}
              ></div>
            </div>
          </div>
          
          {/* Features List */}
          <div className="lg:w-1/2">
            <div className="page_listweb__MXW81">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
                What sets Indian StonexInternational Apart
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">Advanced Connector Mechanism: Nut and bolt system ensures effective execution and durability for installations outside India.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">Premium Marble Selection: We use the finest Vietnam marble for its durability, shine, and divine radiation.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">Artistic Enhancements: Our temples feature exquisite techniques like painting, inlay, overlay, and embossing to amplify beauty and detail.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">Stylish Storage Units: Bottom storage units to accommodate essential pooja items and complete the look.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">Push to Open Drawers: Smooth, knob-less design for a seamless and elegant look.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">Integrated Lighting Solutions: Ambient lighting integrated within our designs to create a serene and divine atmosphere.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DreamTemplesSection;