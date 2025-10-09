import React from 'react'
import TestimonialSection from '../components/TestimonialSection'

const Testimonials = () => {
  return (
    <div className='flex flex-col gap-5'>
      {/* banner */}
      <section className="p-5 w-full min-h-[60vh] md:h-[80vh] bg-[#fff7f2] overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full items-center gap-6">

          {/* Left image */}
          <div className="w-full md:h-full overflow-hidden flex justify-center">
            <img
              src="/rename.svg"
              alt="Banner"
              className="h-full w-full object-cover md:object-contain"
            />
          </div>

          {/* Right text */}
          <div className="px-4 md:px-8 text-center md:text-left mt-6 md:mt-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
              Celebrating Stories of Success
            </h2>
            <p className="mt-4 text-gray-600 text-base sm:text-lg">
              Hear directly from those who experienced our work.
            </p>
          </div>

        </div>
      </section>


      {/* testimonial section */}
      <section>
        <TestimonialSection />
      </section>
    </div>
  )
}

export default Testimonials
