"use client";
import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import styles from '../../styles/TempleDesign/Hero.module.css';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isFormClosed, setIsFormClosed] = useState(false);
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
    document.body.style.overflow = isFormVisible ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isFormVisible]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFocus = (field) => setFocusedFields({ ...focusedFields, [field]: true });
  const handleBlur = (field) => {
    if (!formData[field]) setFocusedFields({ ...focusedFields, [field]: false });
  };

  // WhatsApp submission
  const handleWhatsAppShare = (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.phone) {
      alert("Please fill in your Name and Phone Number.");
      return;
    }

    const whatsappNumber = "917014116801"; // WhatsApp number without '+'
    const text =
      `Hello 👋,%0A%0A` +
      `I would like to contact you with the following details:%0A` +
      `Name: ${formData.fullName}%0A` +
      `Phone: ${formData.phone}%0A` +
      `Email: ${formData.email || "N/A"}%0A` +
      `City: ${formData.city || "N/A"}%0A` +
      `User Type: ${formData.userType || "N/A"}%0A%0A` +
      `Thank you!`;

    const url = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(url, "_blank");

    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      city: '',
      userType: ''
    });
  };

  const handleCloseForm = () => setIsFormClosed(true);

  // Framer Motion variants
  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={`${styles.leftContent} ${isFormClosed ? styles.centeredContent : ''}`}>
          <motion.h1 initial="hidden" animate="visible" variants={textVariants}>
            A Reflection of Faith and Purity.<br />
          </motion.h1>
          <button className={styles.mobileExpertButton} onClick={() => setIsFormVisible(true)}>
            Talk to Our Expert
          </button>
        </div>

        <div className={`${styles.rightContent} ${isFormVisible ? styles.mobileFormVisible : ''} ${isFormClosed ? styles.hiddenForm : ''}`}>
          <div className={styles.contactForm}>
            <button className={styles.closeButton} onClick={() => setIsFormVisible(false)}>
              <FaTimes />
            </button>

            <button className={styles.desktopCloseButton} onClick={handleCloseForm}>
              <FaTimes />
            </button>

            <h2>Talk to Our Expert</h2>
            <div className="text-sm font-bold text-gray-800 hover:text-gray-900 text-center">
              Contact Us : <span>+91 7014116801</span>
            </div>

            <form onSubmit={handleWhatsAppShare}>
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
                  <label htmlFor="fullName" className={formData.fullName || focusedFields.fullName ? styles.focusedLabel : ''}>
                    Full Name *
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
                        required
                      />
                    </div>
                  </div>
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
                  />
                  <label htmlFor="email" className={formData.email || focusedFields.email ? styles.focusedLabel : ''}>
                    Email Address
                  </label>
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
                  />
                  <label htmlFor="city" className={formData.city || focusedFields.city ? styles.focusedLabel : ''}>
                    City
                  </label>
                </div>
              </div>

              {/* User Type */}
              <div className={styles.formGroup}>
                <label className={styles.radioLabel}>Tell us about yourself</label>
                <div className={styles.radioGroup}>
                  <label className={styles.radioOption}>
                    <input type="radio" name="userType" value="homeowner" checked={formData.userType === 'homeowner'} onChange={handleInputChange} />
                    I am a homeowner looking for a pooja unit or pooja room
                  </label>
                  <label className={styles.radioOption}>
                    <input type="radio" name="userType" value="designer" checked={formData.userType === 'designer'} onChange={handleInputChange} />
                    I am an interior designer/consultant seeking solutions for my client
                  </label>
                </div>
              </div>

              {/* WhatsApp Button */}
              <button type="submit" className={`${styles.nextButton} bg-black text-white`}>
                Share via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
