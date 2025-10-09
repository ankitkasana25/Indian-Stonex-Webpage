import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MarbleTemple = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    userType: '',
    templeSize: ''
  });

  // SVG Icons
  const DesignIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );

  const CraftIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
    </svg>
  );

  const QualityIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );

  const ConsultationIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-1m8-9h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-1" />
    </svg>
  );

  const ArrowIcon = () => (
    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );

  const CloseIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  // Features data
  const features = [
    {
      icon: <DesignIcon />,
      title: "Custom Design",
      description: "Bespoke temple designs tailored to your space and spiritual needs"
    },
    {
      icon: <CraftIcon />,
      title: "Expert Craftsmanship",
      description: "Master artisans with generations of experience in marble work"
    },
    {
      icon: <QualityIcon />,
      title: "Premium Materials",
      description: "Only the finest marble and materials for lasting beauty"
    },
    {
      icon: <ConsultationIcon />,
      title: "Free Consultation",
      description: "Personalized guidance from our temple design experts"
    }
  ];

  // Temple options
  const templeOptions = [
    {
      size: "2-3 ft",
      price: "₹3.85 Lakhs",
      description: "Compact elegance for modern apartments",
      image: "/project1.jpg",
      features: ["Perfect for apartments", "Space-saving design", "Basic carving work"]
    },
    {
      size: "3-4 ft",
      price: "₹5.95 Lakhs",
      description: "Ideal for medium-sized homes",
      image: "/project2.jpg",
      features: ["Medium complexity", "Enhanced detailing", "LED lighting"]
    },
    {
      size: "4-5 ft",
      price: "₹6.95 Lakhs",
      description: "Spiritual centerpiece for your home",
      image: "/project3.jpg",
      features: ["Intricate carvings", "Premium marble", "Custom lighting"]
    },
    {
      size: "5+ ft",
      price: "₹8.95 Lakhs",
      description: "Grand temple for spacious residences",
      image: "/project4.jpg",
      features: ["Master craftsmanship", "Full customization", "Luxury finishes"]
    }
  ];

  // Process steps
  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description: "Share your space details and spiritual requirements"
    },
    {
      step: "02",
      title: "Design",
      description: "Receive 3D designs tailored to your space"
    },
    {
      step: "03",
      title: "Crafting",
      description: "Master artisans bring your temple to life"
    },
    {
      step: "04",
      title: "Installation",
      description: "Professional installation with sacred rituals"
    }
  ];

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setIsFormVisible(false);
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      city: '',
      userType: '',
      templeSize: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center pt-16"
        style={{
          backgroundImage: "url('/HDimg4.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 bg-opacity-50"></div>

        <div className="container mx-auto px-6 relative z-10" >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-serif font- text-white mb-6 leading-tight bg-cover bg-center p-6 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Sacred Spaces,<br />
              <span className="text-theme">Timeless Craft</span>
            </motion.h1>


            <motion.p
              className="text-xl text-white mb-8 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Crafting exquisite marble temples that blend spiritual tradition with modern elegance.
              Each piece is a masterpiece, built to inspire generations.
            </motion.p>


            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button
                onClick={() => setIsFormVisible(true)}
                className="bg-theme text-white px-8 py-4 rounded-full font-semibold hover:bg-hover-theme transition-all duration-300 transform hover:scale-105 flex items-center"
              >
                Begin Your Spiritual Journey
                <ArrowIcon />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-light text-gray-800 mb-4">
              Why Choose MarbleMandir
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We combine traditional craftsmanship with modern design to create temples that become family heirlooms
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`p-8 rounded-2xl transition-all duration-500 ${activeFeature === index
                  ? 'bg-amber-50 border-2 border-theme shadow-lg'
                  : 'bg-gray-50 border-2 border-transparent'
                  }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors ${activeFeature === index ? 'bg-theme text-white' : 'bg-amber-100 text-theme'
                  }`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Temple Designs Section */}
      <section id="designs" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-light text-gray-800 mb-4">
              Temple Designs for Every Space
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From compact apartment units to grand family temples, find the perfect fit for your home
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto" >
            {templeOptions.map((temple, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}

              >
                <div className="relative h-48 bg-gradient-to-br from-amber-100 to-amber-50 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-gray-800">{temple.size}</span>
                  </div>
                  {/* <div className="absolute bottom-3 left-3 bg-amber-600 text-white px-3 py-1 rounded-lg">
                    <span className="text-sm font-bold">{temple.price}</span>
                  </div> */}
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 leading-tight">{temple.description}</h3>
                  <ul className="space-y-2 mb-4">
                    {temple.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600 text-sm">
                        <div className="w-1.5 h-1.5 bg-theme rounded-full mr-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setIsFormVisible(true)}
                    className="w-full bg-gray-800 text-white py-2.5 rounded-lg hover:bg-theme transition-colors font-semibold text-sm"
                  >
                    Get Custom Quote
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-light text-gray-800 mb-4">
              Our Craftsmanship Process
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From concept to completion, we guide you through every step of creating your sacred space
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                  <span className="text-2xl font-serif text-theme font-semibold">{step.step}</span>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-10 top-1/2 w-20 h-0.5 bg-theme"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-theme">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-6">
              Ready to Create Your Sacred Space?
            </h2>
            <p className="text-amber-100 text-xl mb-8 max-w-2xl mx-auto">
              Begin your journey to a beautifully crafted marble temple that will inspire devotion for generations
            </p>
            <button
              onClick={() => setIsFormVisible(true)}
              className="bg-white text-theme px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto"
            >
              Start with Free Consultation
              <ArrowIcon />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Consultation Form Modal */}
      <AnimatePresence>
        {isFormVisible && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl w-full max-w-lg max-h-[85vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-serif font-light text-gray-800">
                    Begin Your Journey
                  </h3>
                  
                  <button
                    onClick={() => setIsFormVisible(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <CloseIcon />
                  </button>
                </div>
                <div className="text-sm font-bold text-gray-800 hover:text-gray-900 ">
              Contact Us : <span >+91  7014116801</span>
            </div>
                <p className="text-gray-600 mt-2 text-sm">
                  Share your details and we'll contact you within 24 hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium text-sm">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-theme focus:border-transparent text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium text-sm">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-theme focus:border-transparent text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium text-sm">Phone Number *</label>
                  <div className="flex border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-theme focus-within:border-transparent">
                    <span className="px-3 py-2.5 bg-gray-100 border-r border-gray-300 flex items-center text-sm">+91</span>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your number"
                      className="w-full px-3 py-2.5 focus:outline-none text-sm"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium text-sm">City *</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-theme focus:border-transparent text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium text-sm">I am a *</label>
                  <div className="space-y-2">
                    <label className="flex items-center text-sm">
                      <input
                        type="radio"
                        name="userType"
                        value="homeowner"
                        checked={formData.userType === 'homeowner'}
                        onChange={handleInputChange}
                        className="mr-2 text-theme focus:ring-hover-theme"
                        required
                      />
                      Homeowner looking for a pooja unit
                    </label>
                    <label className="flex items-center text-sm">
                      <input
                        type="radio"
                        name="userType"
                        value="designer"
                        checked={formData.userType === 'designer'}
                        onChange={handleInputChange}
                        className="mr-2 text-theme focus:ring-hover-theme"
                      />
                      Interior designer/consultant
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium text-sm">Preferred Temple Size</label>
                  <select
                    name="templeSize"
                    value={formData.templeSize}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-theme focus:border-transparent text-sm"
                  >
                    <option value="">Select size</option>
                    <option value="2-3 ft">2-3 ft (Compact)</option>
                    <option value="3-4 ft">3-4 ft (Medium)</option>
                    <option value="4-5 ft">4-5 ft (Large)</option>
                    <option value="5+ ft">5+ ft (Grand)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-theme text-white py-3 rounded-lg hover:bg-hover-theme transition-colors font-semibold text-sm mt-2"
                >
                  Schedule Free Consultation
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MarbleTemple;