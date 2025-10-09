import React from 'react'

const services = [
  {
    name: 'Marble Temple Design',
    src: 'https://images.unsplash.com/photo-1609250291996-7a1a2a08d425?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Home Mandir Installation',
    src: 'https://images.unsplash.com/photo-1629456229192-5e39d4c62d89?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: '3D Visualization & Planning',
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Customized Carving Work',
    src: 'https://images.unsplash.com/photo-1606813909021-bb62a5c7c1e1?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Vastu-Aligned Layouts',
    src: 'https://images.unsplash.com/photo-1590595906938-53b7c00361a3?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'On-Site Project Support',
    src: 'https://images.unsplash.com/photo-1581091870622-3ca5d5f99c3c?auto=format&fit=crop&w=800&q=80',
  },
]

const OurServices = () => {
  return (
    <div className="py-16 px-6 flex flex-col gap-12 justify-center items-center bg-white">
      
      {/* Title Section */}
      <div className="text-center max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-wide text-[#ff7e2e]">
          Our Specialized Marble Services
        </h2>
        <div className="mt-3 w-20 h-1 bg-[#ff7e2e] mx-auto rounded-full"></div>
        <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
          From elegant marble temples to custom carvings, we bring divine artistry 
          to life — combining modern design tools with traditional craftsmanship.
        </p>
      </div>

      {/* Services Grid */}
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((val) => (
            <div
              key={val.name}
              className="border border-[#ff7e2e]/40 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:border-[#ff7e2e] hover:scale-105 bg-white"
            >
              <img
                className="h-48 w-full object-cover"
                src={val.src}
                alt={val.name}
              />
              <div className="p-6 text-center">
                <div className="text-lg font-medium text-gray-800 hover:text-[#ff7e2e] transition-colors">
                  {val.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurServices
