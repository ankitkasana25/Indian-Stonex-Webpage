import React, { useState, useEffect } from 'react';
import { FaTimes, FaArrowRight } from 'react-icons/fa';

const WhyChooseUs = () => {
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

    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showForm]);

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
    // Handle form submission here
    console.log('Form submitted:', formData);
    setShowForm(false);
    // Reset form
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

  const features = [
    {
      id: 1,
      title: "Expert Craftsmanship",
      description: "Decades of experience in traditional and modern stone artistry with meticulous attention to detail",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Quality Materials",
      description: "Premium quality stones sourced from trusted quarries ensuring durability and elegance",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9a9 9 0 01-9-9m9 9c0 5-4 9-9 9s-9-4-9-9m9-9a9 9 0 00-9 9" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Timely Delivery",
      description: "Strict adherence to project timelines with efficient project management",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Custom Solutions",
      description: "Tailored designs to match your vision and architectural requirements",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17v4a2 2 0 002 2h4M15 5l2 2" />
        </svg>
      )
    }
  ];

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Why Choose <span className="font-semibold text-theme">Our Services</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-theme to-amber-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              We combine traditional craftsmanship with modern technology to deliver exceptional 
              stone work that stands the test of time and exceeds expectations.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:border-theme"
              >
                {/* Feature Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-theme text-white rounded-full flex items-center justify-center text-sm font-bold">
                  0{index + 1}
                </div>
                
                {/* Icon Container */}
                <div className="w-16 h-16 bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-theme">
                  {feature.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-theme transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Hover Border Effect */}
                <div className="absolute bottom-0 left-1 w-0 h-1 bg-gradient-to-r from-theme to-amber-600 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Get in touch with our experts for a free consultation and quote for your stone work requirements.
              </p>
              <button 
                onClick={handleButtonClick}
                className="bg-theme text-white px-8 py-3 rounded-lg font-semibold hover:bg-hover-theme transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 mx-auto hover:cursor-pointer"
              >
                Get Free Consultation
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-theme focus:border-transparent transition-all"
                  />
                  <label 
                    htmlFor="fullName"
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      formData.fullName || focusedFields.fullName
                        ? 'top-0 text-xs bg-white px-2 text-theme -translate-y-1/2'
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-theme focus:border-transparent transition-all"
                  />
                  <label 
                    htmlFor="email"
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      formData.email || focusedFields.email
                        ? 'top-0 text-xs bg-white px-2 text-theme -translate-y-1/2'
                        : 'top-3 text-gray-500'
                    }`}
                  >
                    Email Address *
                  </label>
                </div>

                {/* Phone */}
                <div className="relative">
                  <div className="flex border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-theme focus-within:border-transparent transition-all">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-theme focus:border-transparent transition-all"
                  />
                  <label 
                    htmlFor="city"
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      formData.city || focusedFields.city
                        ? 'top-0 text-xs bg-white px-2 text-theme -translate-y-1/2'
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
                      className="mt-1 text-theme focus:ring-theme"
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
                      className="mt-1 text-theme focus:ring-theme"
                    />
                    <span className="text-sm text-gray-700">
                      I am an interior designer/consultant seeking solutions for my client
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  className="w-full bg-theme text-white py-3 px-6 rounded-lg font-semibold hover:bg-hover-theme transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
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

export default WhyChooseUs;