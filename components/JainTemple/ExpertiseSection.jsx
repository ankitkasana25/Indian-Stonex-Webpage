import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

const ExpertiseSection = () => {
  const images = [
    { id: 1, src: "/img1.jpg" },
    { id: 2, src: "/img2.jpg" },
    { id: 3, src: "/img3.jpg" },
    { id: 4, src: "/img4.png" },
    { id: 5, src: "/img5.png" },
    { id: 6, src: "/img6.png" },
    { id: 7, src: "/img7.png" },
    { id: 8, src: "/img10.jpg" },
    { id: 9, src: "/img9.jpg" },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    userType: ''
  });

  const [focusedFields, setFocusedFields] = useState({
    fullName: false,
    email: false,
    phone: false,
    city: false
  });

  // Prevent background scrolling when form is visible
  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showForm]);

  // Auto-change images every 3 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length, isAutoPlaying]);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFocus = (field) => {
    setFocusedFields({
      ...focusedFields,
      [field]: true
    });
  };

  const handleBlur = (field) => {
    if (!formData[field]) {
      setFocusedFields({
        ...focusedFields,
        [field]: false
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowForm(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      city: '',
      userType: ''
    });
  };

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Spiritual <span className="font-semibold text-amber-600">Craftsmanship</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6"></div>
          </div>

          {/* Quote Section */}
          <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-8 md:p-12 mb-16 border border-amber-200 shadow-lg">
            <div className="text-center max-w-4xl mx-auto">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light italic">
                At Indian Stonex, we believe that a marble temple is more than just a structure—it is a serene sanctuary that reflects devotion, tradition, and artistry. Our designs are inspired by India’s rich cultural heritage, creating sacred spaces that bring harmony, elegance, and spiritual tranquility to your home
              </p>
            </div>
          </div>

          {/* Expertise Section */}
          <div className="max-w-7xl mx-auto">
            {/* Desktop Layout */}
            <div className="hidden lg:flex flex-row gap-12 items-start">
              {/* Left Column - Image Gallery */}
              <div className="w-1/2">
                <div className="relative group">
                  {/* Main Image */}
                  <div className="h-[600px] bg-gray-100 rounded-2xl overflow-hidden shadow-2xl relative">
                    <img
                      src={images[currentImageIndex].src}
                      alt={`Jain Temple Craftsmanship ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Navigation Arrows */}
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
                    >
                      <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
                    >
                      <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    {/* Play/Pause Button */}
                    <button
                      onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                      className="absolute bottom-4 right-4 w-10 h-10 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-black transition-all duration-300"
                    >
                      {isAutoPlaying ? (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      )}
                    </button>
                  </div>

                  {/* Image Counter */}
                  <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {images.length}
                  </div>
                </div>

                {/* Thumbnail Strip */}
                <div className="grid grid-cols-9 gap-2 mt-4">
                  {images.map((image, index) => (
                    <button
                      key={image.id}
                      onClick={() => handleThumbnailClick(index)}
                      className={`h-16 rounded-lg overflow-hidden transition-all duration-300 ${index === currentImageIndex
                          ? 'ring-2 ring-amber-500 ring-offset-2 transform scale-105'
                          : 'opacity-70 hover:opacity-100 hover:scale-105'
                        }`}
                    >
                      <img
                        src={image.src}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="w-1/2">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-3xl font-bold text-gray-800 mb-6">
                    Expertise in Jain Traditions
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">Sacred Iconography</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Our artisans are masters of Jain iconography, creating intricate carvings of Tirthankaras and symbolic representations of Astha Mangal with spiritual precision and authenticity.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">Ethical Craftsmanship</h4>
                        <p className="text-gray-600 leading-relaxed">
                          We adhere strictly to Jain principles of non-violence and purity, using materials and methods that respect these sacred values in every aspect of our work.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9a9 9 0 01-9-9m9 9c0 5-4 9-9 9s-9-4-9-9m9-9a9 9 0 00-9 9" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">Spiritual Resonance</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Each temple space is designed to create an environment of peace and enlightenment, honoring the Jain way of life through thoughtful design and spiritual understanding.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <button
                      onClick={handleButtonClick}
                      className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                    >
                      Consult Our Experts
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden">
              {/* Main Image with Navigation */}
              <div className="relative mb-6">
                <div className="h-80 bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={images[currentImageIndex].src}
                    alt={`Jain Temple Craftsmanship ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center space-x-2 mt-4">
                  {images.slice(0, 5).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleThumbnailClick(index)}
                      className={`w-3 h-3 rounded-full transition-all ${index === currentImageIndex
                          ? 'bg-amber-500 scale-125'
                          : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                    />
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                  Expertise in Jain Traditions
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6 text-center">
                  Our artisans are well-versed in the rich iconography specific to Jainism. From the intricate carvings of the Tirthankaras to the symbolic representations of the Astha Mangal, we ensure that every element of your pooja room is authentic and spiritually resonant.
                </p>

                <button
                  onClick={handleButtonClick}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg"
                >
                  Consult Our Experts
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Overlay */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={handleCloseForm}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors z-10"
            >
              <FaTimes size={24} />
            </button>

            {/* Form Content */}
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-center">
                Talk to Our Expert
              </h2>
              <div className="text-sm font-bold text-gray-800 hover:text-gray-900 text-center">
                Contact Us : <span >+91  7014116801</span>
              </div>
              <p className="text-gray-600 mb-6">
                Fill in your details and we'll get back to you shortly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div className="relative">
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('fullName')}
                    onBlur={() => handleBlur('fullName')}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  />
                  <label
                    htmlFor="fullName"
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${formData.fullName || focusedFields.fullName
                        ? 'top-0 text-xs bg-white px-2 text-amber-600 -translate-y-1/2'
                        : 'top-3 text-gray-500'
                      }`}
                  >
                    Full Name *
                  </label>
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={() => handleBlur('email')}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  />
                  <label
                    htmlFor="email"
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${formData.email || focusedFields.email
                        ? 'top-0 text-xs bg-white px-2 text-amber-600 -translate-y-1/2'
                        : 'top-3 text-gray-500'
                      }`}
                  >
                    Email Address *
                  </label>
                </div>

                {/* Phone */}
                <div className="relative">
                  <div className="flex border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-amber-500 focus-within:border-transparent transition-all">
                    <span className="px-4 py-3 bg-gray-50 border-r border-gray-300 text-gray-700">
                      +91
                    </span>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus('phone')}
                      onBlur={() => handleBlur('phone')}
                      placeholder="Phone number"
                      className="w-full px-4 py-3 focus:outline-none rounded-r-lg"
                    />
                  </div>
                </div>

                {/* City */}
                <div className="relative">
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('city')}
                    onBlur={() => handleBlur('city')}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  />
                  <label
                    htmlFor="city"
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${formData.city || focusedFields.city
                        ? 'top-0 text-xs bg-white px-2 text-amber-600 -translate-y-1/2'
                        : 'top-3 text-gray-500'
                      }`}
                  >
                    City *
                  </label>
                </div>

                {/* User Type */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Tell us about yourself *
                  </label>

                  <label className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                    <input
                      type="radio"
                      name="userType"
                      value="homeowner"
                      checked={formData.userType === 'homeowner'}
                      onChange={handleInputChange}
                      className="mt-1 text-amber-500 focus:ring-amber-500"
                    />
                    <span className="text-sm text-gray-700">
                      I am a homeowner looking for stone work solutions
                    </span>
                  </label>

                  <label className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                    <input
                      type="radio"
                      name="userType"
                      value="designer"
                      checked={formData.userType === 'designer'}
                      onChange={handleInputChange}
                      className="mt-1 text-amber-500 focus:ring-amber-500"
                    />
                    <span className="text-sm text-gray-700">
                      I am an interior designer/consultant seeking solutions for my client
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                >
                  Get Free Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ExpertiseSection;