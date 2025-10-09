import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const CitySection = () => {
  const [showAll, setShowAll] = useState(false);
  
  const cities = [
    {
      name: "Delhi",
      image: "/Delhi.png",
      link: "/locations/delhi"
    },
    {
      name: "Mumbai",
      image: "/Mumbai2.png",
      link: "/locations/mumbai"
    },
    {
      name: "Ahmedabad",
      image: "/Ahemdabad.png",
      link: "/locations/ahmedabad"
    },
    {
      name: "Chennai",
      image: "/Chennia.png",
      link: "/locations/chennai"
    },
    {
      name: "Surat",
      image: "/Surat2.png",
      link: "/locations/surat"
    },
    {
      name: "Kota",
      image: "/Kota2.png",
      link: "/locations/kota"
    },
    {
      name: "Jaipur",
      image: "/Jaipur2.png",
      link: "/locations/jaipur"
    },
     {
      name: "Hyderabad",
      image: "/Hyderabad2.png",
      link: "/locations/jaipur"
    },
     {
      name: "Bengaluru",
      image: "/Benglore.png",
      link: "/locations/jaipur"
    },
    {
      name: "Raipur",
      image: "/Raipur.png",
      link: "/locations/jaipur"
    },
    {
      name: "Vishakapatnam",
      image: "/Vishakapatnam.png",
      link: "/locations/jaipur"
    },
    {
      name: "Jabalpur",
      image: "/Jabalpur.png",
      link: "/locations/jaipur"
    },
    {
      name: "Bhopal",
      image: "/BHOPAL.png",
      link: "/locations/jaipur"
    },
    {
      name: "Gurugram",
      image: "/Gurugram.png",
      link: "/locations/jaipur"
    },
    {
      name: "Jodhpur",
      image: "/Jodhpur.png",
      link: "/locations/jaipur"
    },
    {
      name: "Jaisalmer",
      image: "/Jaisalmer.png",
      link: "/locations/jaipur"
    },
    {
      name: "Udaipur",
      image: "/Udaipur.png",
      link: "/locations/jaipur"
    },
    {
      name: "Bikaner",
      image: "/Bikaner.png",
      link: "/locations/jaipur"
    },
    {
      name: "Punjab",
      image: "/Punjab.png",
      link: "/locations/jaipur"
    },
  ];

  const displayedCities = showAll ? cities : cities.slice(0, 6);

  return (
    <div className="bg-[#fffbf0] py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="row">
          <div className="col-12 mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800">
              Installing Dream Temple Across World
            </h2>
          </div>
          
          <div className="col-12">
            <div className="city-list">
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-10">
                {displayedCities.map((city, index) => (
                  <li key={index} className="group flex flex-col items-center">
                    <a 
                      href={city.link} 
                      className="flex flex-col items-center transition-transform duration-300 hover:scale-105"
                    >
                      <div 
                        className="w-[100px] h-[100px]  rounded-3xl relative cursor-pointer overflow-hidden bg-contain bg-center bg-no-repeat"
                        style={{ 
                          backgroundImage: `url(${city.image})`,
                          backgroundSize: '70%'
                        }}
                      >
                        {/* Removed the dark overlay */}
                      </div>
                      <p className="text-center mt-5 font-medium text-gray-700 text-lg">
                        {city.name}
                      </p>
                    </a>
                  </li>
                ))}
              </ul>
              
              {cities.length > 6 && (
                <div className="text-center mt-12">
                  <button 
                    onClick={() => setShowAll(!showAll)}
                    className="inline-flex items-center text-gray-700 hover:text-amber-600 transition-colors duration-300 font-medium text-lg"
                  >
                    {showAll ? 'View Less' : 'View All'}
                    {showAll ? (
                      <FaChevronUp className="ml-3 transition-transform duration-300" />
                    ) : (
                      <FaChevronDown className="ml-3 transition-transform duration-300" />
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitySection;