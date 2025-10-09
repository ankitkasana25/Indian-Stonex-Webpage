import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import styles from '../../styles/TsaDesignhub/Hero.module.css';

const Hero = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
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

  // Prevent background scrolling when form is visible on mobile
  useEffect(() => {
    if (isFormVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isFormVisible]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFocus = (field) => setFocusedFields({ ...focusedFields, [field]: true });
  const handleBlur = (field) => {
    if (!formData[field]) setFocusedFields({ ...focusedFields, [field]: false });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className={`${styles.hero} relative overflow-hidden`}>
      <div className={styles.heroContent}>
        {/* Left Content */}
        <div className={styles.leftContent}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight animate-slide-up">
            Let's Get Started With<br />
            <span className="bg-gradient-to-r from-[#ff7e2e] via-[#ff9d5c] to-[#ffb380] bg-clip-text text-transparent">
              Your Dream Temple
            </span>
          </h1>

          <p className="mt-6 max-w-md text-gray-700 text-lg sm:text-xl animate-fade-in-up">
            We craft luxurious, bespoke pooja rooms and marble temples with precision and timeless artistry.
          </p>

          {/* Mobile-only button */}
          <button 
            className="mt-8 rounded-xl bg-[#ff7e2e] px-8 py-4 text-white font-semibold shadow-lg transition-all hover:scale-105 hover:shadow-xl animate-fade-in-up"
            onClick={() => setIsFormVisible(true)}
          >
            Talk to Our Expert
          </button>
        </div>

        {/* Right Content - Form */}
        <div className={`${styles.rightContent} ${isFormVisible ? styles.mobileFormVisible : ''} animate-slide-up`}>
          <div className={styles.contactForm}>
            {/* Close button for mobile */}
            <button 
              className={styles.closeButton}
              onClick={() => setIsFormVisible(false)}
            >
              <FaTimes />
            </button>
            
            <h2 className="text-2xl font-semibold mb-6 animate-fade-in-up text-center">
              Talk to Our Expert
            </h2>
             <div className="text-sm font-bold text-gray-800 hover:text-gray-900 text-center">
                Contact Us : <span >+91  7014116801</span>
              </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div className={styles.formGroup}>
                <div className={styles.inputContainer}>
                  <input 
                    type="text" 
                    id="fullName" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('fullName')}
                    onBlur={() => handleBlur('fullName')}
                    required 
                  />
                  <label 
                    htmlFor="fullName" 
                    className={formData.fullName || focusedFields.fullName ? styles.focusedLabel : ''}
                  >
                    Full Name *
                  </label>
                </div>
              </div>

              {/* Email */}
              <div className={styles.formGroup}>
                <div className={styles.inputContainer}>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={() => handleBlur('email')}
                    required 
                  />
                  <label 
                    htmlFor="email" 
                    className={formData.email || focusedFields.email ? styles.focusedLabel : ''}
                  >
                    Email Address *
                  </label>
                </div>
              </div>

              {/* Phone */}
              <div className={styles.formGroup}>
                <div className={styles.inputContainer}>
                  <div className={styles.phoneInputContainer}>
                    <div className={`${styles.phoneInput} ${focusedFields.phone ? styles.phoneInputFocused : ''}`}>
                      <span className={styles.countryCode}>+91</span>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        onFocus={() => handleFocus('phone')}
                        onBlur={() => handleBlur('phone')}
                        placeholder="Phone number"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* City */}
              <div className={styles.formGroup}>
                <div className={styles.inputContainer}>
                  <input 
                    type="text" 
                    id="city" 
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('city')}
                    onBlur={() => handleBlur('city')}
                    required 
                  />
                  <label 
                    htmlFor="city" 
                    className={formData.city || focusedFields.city ? styles.focusedLabel : ''}
                  >
                    City *
                  </label>
                </div>
              </div>

              {/* User Type */}
              <div className={styles.formGroup}>
                <label className={styles.radioLabel}>Tell us about yourself *</label>
                <div className={styles.radioGroup}>
                  <label className={styles.radioOption}>
                    <input 
                      type="radio" 
                      name="userType" 
                      value="homeowner"
                      checked={formData.userType === 'homeowner'}
                      onChange={handleInputChange}
                    />
                    I am a homeowner looking for a pooja unit or pooja room
                  </label>
                  <label className={styles.radioOption}>
                    <input 
                      type="radio" 
                      name="userType" 
                      value="designer"
                      checked={formData.userType === 'designer'}
                      onChange={handleInputChange}
                    />
                    I am an interior designer/consultant seeking solutions for my client
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button type="submit" className="w-full rounded-xl bg-[#ff7e2e] py-3 text-white font-semibold shadow-lg hover:scale-105 transition-all">
                Next
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
