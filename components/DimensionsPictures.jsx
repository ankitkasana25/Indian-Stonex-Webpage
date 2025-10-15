import React, { useState, useEffect } from 'react';
import { FaTimes, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import styles from '../styles/DimensionsPictures.module.css';

const DimensionsPictures = () => {
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
    console.log(formData);
    setShowForm(false);
  };

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  // ✨ Motion variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.row}>

            {/* Content Column */}
            <motion.div
              className={styles.contentColumn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              <div className={styles.content}>
                <h2>Share Your Space Details - We'll Handle the Rest!</h2>
                <p>
                  To create your perfect pooja unit design, we just need some basic
                  information about your space. Have your room measurements and a
                  few photos ready, and we'll take care of the creative magic!
                </p>

                <div className={styles.featureList}>
                  <div className={styles.feature}>
                    <FaArrowRight className={styles.featureArrow} />
                    <span>Quick & easy space evaluation</span>
                  </div>
                  <div className={styles.feature}>
                    <FaArrowRight className={styles.featureArrow} />
                    <span>Personalized design just for you</span>
                  </div>
                  <div className={styles.feature}>
                    <FaArrowRight className={styles.featureArrow} />
                    <span>Complimentary design consultation</span>
                  </div>
                </div>

                <div className={styles.btnFree} onClick={handleButtonClick}>
                  <span>Start Your Design Journey</span>
                  <FaArrowRight className={styles.btnIcon} />
                </div>
              </div>
            </motion.div>

            {/* Image Column */}
            <motion.div
              className={styles.imageColumn}
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className={styles.imageWrapper}>
                <div className={styles.serviceImg}></div>
                <div className={styles.imageOverlay}></div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Form Overlay */}
     {showForm && (
  <motion.div
    className={styles.formOverlay}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <motion.div
      className={styles.formContainer}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <button className={styles.closeButton} onClick={handleCloseForm}>
        <FaTimes />
      </button>

      <div className={styles.contactForm}>
        <h2 className='text-center'>Talk to Our Expert</h2>
        <div className="text-sm font-bold text-gray-800 hover:text-gray-900 text-center">
          Contact Us : <span>+917014116801</span>
        </div>

        <form onSubmit={(e) => {
          e.preventDefault();

          if (!formData.fullName || !formData.phone) {
            alert("Please fill in your Name and Phone Number.");
            return;
          }

          const whatsappNumber = "917014116801";
          const text =
            `Hello 👋,%0A%0A` +
            `Here are the details:%0A` +
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
            fullName: "",
            email: "",
            phone: "",
            city: "",
            userType: "",
          });
        }}>
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

          {/* Email (optional) */}
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
              <label
                htmlFor="email"
                className={formData.email || focusedFields.email ? styles.focusedLabel : ''}
              >
                Email Address
              </label>
            </div>
          </div>

          {/* City (optional) */}
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
              <label
                htmlFor="city"
                className={formData.city || focusedFields.city ? styles.focusedLabel : ''}
              >
                City
              </label>
            </div>
          </div>

          {/* User Type (optional) */}
          <div className={styles.formGroup}>
            <label className={styles.radioLabel}>Tell us about yourself</label>
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

          <button type="submit" className={styles.nextButton}>
            Share via WhatsApp
          </button>
        </form>
      </div>
    </motion.div>
  </motion.div>
)}

    </>
  );
};

export default DimensionsPictures;
