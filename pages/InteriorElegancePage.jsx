import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteriorElegancePage = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    interiorStyle: '',
    spaceSize: ''
  });

  // SVG Icons
  const ModernIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  );

  const TraditionalIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  );

  const LuxuryIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
    </svg>
  );

  const MinimalistIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
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

  // Design Categories
  const designCategories = [
    {
      icon: <ModernIcon />,
      title: "Contemporary Modern",
      description: "Sleek marble temples with clean lines and minimalist aesthetics",
      features: ["Geometric patterns", "LED integration", "Space-efficient designs"]
    },
    {
      icon: <TraditionalIcon />,
      title: "Classic Traditional",
      description: "Timeless designs with intricate carvings and traditional motifs",
      features: ["Hand-carved details", "Traditional patterns", "Gold leaf accents"]
    },
    {
      icon: <LuxuryIcon />,
      title: "Luxury Grand",
      description: "Opulent marble temples for spacious interiors and luxury homes",
      features: ["Premium marble", "Custom lighting", "Enhanced detailing"]
    },
    {
      icon: <MinimalistIcon />,
      title: "Minimalist Fusion",
      description: "Blending traditional spirituality with contemporary simplicity",
      features: ["Clean aesthetics", "Multi-functional", "Modern materials"]
    }
  ];

  // Interior Styles Gallery
  const interiorStyles = [
    {
      name: "Modern Minimalist",
      description: "Clean lines with white marble and subtle gold accents",
      price: "",
      image: "/modern-style.jpg"
    },
    {
      name: "Traditional Opulence",
      description: "Rich carvings with heritage patterns and warm lighting",
      price: "",
      image: "/traditional-style.jpg"
    },
    {
      name: "Fusion Elegance",
      description: "Blending contemporary design with traditional elements",
      price: "",
      image: "/fusion-style.jpg"
    },
    {
      name: "Luxury Statement",
      description: "Grand marble temples with premium finishes and lighting",
      price: "",
      image: "/luxury-style.jpg"
    }
  ];

  // Design Process
  const designProcess = [
    {
      step: "01",
      title: "Space Analysis",
      description: "Understanding your interior space and spiritual needs"
    },
    {
      step: "02",
      title: "Style Selection",
      description: "Choosing the perfect design that complements your decor"
    },
    {
      step: "03",
      title: "3D Visualization",
      description: "Seeing your temple in your space before creation"
    },
    {
      step: "04",
      title: "Perfect Integration",
      description: "Seamless installation that enhances your interior"
    }
  ];

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
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      city: '',
      interiorStyle: '',
      spaceSize: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center pt-16"
        style={{ 
          backgroundImage: "url('/home-decor.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-serif font-light text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Interior Elegance<br />
              <span className="text-amber-400">Spiritual Harmony</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-white mb-8 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transform your living space with marble temples that seamlessly blend 
              spiritual sanctity with interior design excellence
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button 
                onClick={() => setIsFormVisible(true)}
                className="bg-amber-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 flex items-center"
              >
                Design Consultation
                <ArrowIcon />
              </button>
              
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Design Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-light text-gray-800 mb-4">
              Where Spirituality Meets Design
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Every marble temple is crafted to become the centerpiece of your interior, 
              enhancing both spiritual ambiance and aesthetic appeal
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-serif text-gray-800 mb-4">Design Integration</h3>
              <p className="text-gray-600 leading-relaxed">
                Our temples are designed to complement your existing interior decor, 
                whether you prefer modern minimalism, traditional opulence, or contemporary fusion.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                  Custom color matching with your interior palette
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                  Space-optimized designs for any room layout
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                  Integrated lighting solutions for ambiance
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-serif text-gray-800 mb-4">Material Excellence</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use only premium marble varieties that not only ensure durability 
                but also enhance the visual appeal of your space.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-amber-600 font-semibold">Makrana</div>
                  <div className="text-gray-600 text-sm">Pure White</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-amber-600 font-semibold">Italian</div>
                  <div className="text-gray-600 text-sm">Carrara</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-amber-600 font-semibold">Indian Green</div>
                  <div className="text-gray-600 text-sm">Forest Green</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-amber-600 font-semibold">Kishangarh</div>
                  <div className="text-gray-600 text-sm">Off-White</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-light text-gray-800 mb-4">
              Design Styles for Every Interior
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choose from our curated design categories that blend seamlessly with your home's aesthetic
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {designCategories.map((category, index) => (
              <motion.div
                key={index}
                className={`bg-white rounded-xl p-6 cursor-pointer transition-all duration-300 border-2 ${
                  activeCategory === index 
                    ? 'border-amber-500 shadow-xl' 
                    : 'border-transparent shadow-lg hover:shadow-xl'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActiveCategory(index)}
                whileHover={{ y: -5 }}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  activeCategory === index ? 'bg-amber-500 text-white' : 'bg-amber-100 text-amber-600'
                }`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{category.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{category.description}</p>
                <ul className="space-y-2">
                  {category.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600 text-sm">
                      <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interior Styles Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-light text-gray-800 mb-4">
              Interior Style Gallery
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover how our marble temples enhance different interior design styles
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {interiorStyles.map((style, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-80 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden mb-4">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <span className="text-lg font-serif text-amber-600 font-semibold">{style.price}</span>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{style.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{style.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-light text-gray-800 mb-4">
              Our Design Process
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A seamless journey from concept to perfectly integrated temple in your space
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {designProcess.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg relative">
                  <span className="text-2xl font-serif text-amber-600 font-semibold">{step.step}</span>
                  {index < designProcess.length - 1 && (
                    <div className="hidden lg:block absolute -right-10 top-1/2 w-20 h-0.5 bg-amber-200"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-6">
              Ready to Elevate Your Interior?
            </h2>
            <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
              Let us create a marble temple that becomes the soul of your home's design
            </p>
            <button 
              onClick={() => setIsFormVisible(true)}
              className="bg-amber-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto"
            >
              Start Your Design Journey
              <ArrowIcon />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Design Consultation Form Modal */}
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
                    Design Consultation
                  </h3>
                  <button 
                    onClick={() => setIsFormVisible(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <CloseIcon />
                  </button>
                </div>
                <p className="text-gray-600 mt-2 text-sm">
                  Share your interior details for a personalized temple design
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
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
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
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium text-sm">Phone Number *</label>
                  <div className="flex border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-amber-500 focus-within:border-transparent">
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
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium text-sm">Preferred Interior Style *</label>
                  <select
                    name="interiorStyle"
                    value={formData.interiorStyle}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
                    required
                  >
                    <option value="">Select style</option>
                    <option value="modern">Modern Minimalist</option>
                    <option value="traditional">Classic Traditional</option>
                    <option value="luxury">Luxury Grand</option>
                    <option value="fusion">Minimalist Fusion</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium text-sm">Available Space Size</label>
                  <select
                    name="spaceSize"
                    value={formData.spaceSize}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
                  >
                    <option value="">Select size</option>
                    <option value="small">Small (2-3 ft)</option>
                    <option value="medium">Medium (3-4 ft)</option>
                    <option value="large">Large (4-5 ft)</option>
                    <option value="xlarge">Extra Large (5+ ft)</option>
                  </select>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-colors font-semibold text-sm mt-2"
                >
                  Get Design Proposal
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InteriorElegancePage;