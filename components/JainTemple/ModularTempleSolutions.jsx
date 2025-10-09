import React from 'react';

const ModularTempleSolutions = () => {
  const baseUrl = "https://www.indianStonex.com";
  
  const solutions = [
    {
      id: 1,
      title: "Design",
      image: "/_next/static/media/design.fbb2892b.png"
    },
    {
      id: 2,
      title: "Production",
      image: "/_next/static/media/producation_img.1c599135.png"
    },
    {
      id: 3,
      title: "Shipping",
      image: "/_next/static/media/shipping.3ff7f99e.png"
    },
    {
      id: 4,
      title: "DIY Assembly",
      image: "/_next/static/media/design.fbb2892b.png" // Using same image as design for now
    }
  ];

  return (
    <section className="py-16" style={{ backgroundColor: '#fffbf0' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl text-gray-800">
            India's only Modular Temple brand providing End to End Solutions
          </h2>
        </div>
        
        <div className="flex justify-center">
          <div className="w-full max-w-5xl">
            {/* Desktop Grid (4 columns) */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {solutions.map((solution) => (
                <div key={solution.id} className="flex flex-col items-center text-center">
                  <div className="w-32 h-32  flex items-center justify-center p-5 ">
                    <div 
                      className="w-full h-full bg-contain bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${baseUrl}${solution.image})` }}
                    ></div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{solution.title}</h3>
                </div>
              ))}
            </div>
            
            {/* Mobile Grid (2 columns) */}
            <div className="md:hidden grid grid-cols-2 gap-4">
              {solutions.map((solution) => (
                <div key={solution.id} className="flex flex-col items-center text-center">
                  <div className="w-24 h-24  flex items-center justify-center p-4">
                    <div 
                      className="w-full h-full bg-contain bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${baseUrl}${solution.image})` }}
                    ></div>
                  </div>
                  <h3 className="text-base font-semibold text-gray-800">{solution.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModularTempleSolutions;