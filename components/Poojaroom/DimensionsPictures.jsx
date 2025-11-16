import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import styles from '../../styles/DimensionsPictures.module.css';

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
    // Form submission handled via WhatsApp
    setShowForm(false);
  };

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.contentColumn}>
              <div className={styles.content}>
                <h2>All we Need is your Space Dimensions and Pictures</h2>
                <p>Before starting the session, we require you to have your site pictures and dimensions ready. This allows us to understand your space and craft a suitable solution, ensuring we make the most out of our concept discovery session.</p>
                <div className={styles.btnFree} onClick={handleButtonClick}>
                  Get Free Consultation
                </div>
              </div>
            </div>
            <div className={styles.imageColumn}>
              <div className={styles.serviceImg}>
                {/* Image will be set via CSS background */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form overlay */}
     {showForm && (
  <div className={styles.formOverlay}>
    <div className={styles.formContainer}>
      {/* Close Button */}
      <button className={styles.closeButton} onClick={handleCloseForm}>
        <FaTimes />
      </button>

      <div className={styles.contactForm}>
        <h2 className="text-center text-2xl font-semibold mb-2">Talk to Our Expert</h2>
        <div className="text-sm font-bold text-gray-800 hover:text-gray-900 text-center mb-4">
          Contact Us : <span>+91 7014116801</span>
        </div>
        <p className="text-gray-600 mb-6 text-center">
          Fill in your details and we'll get back to you shortly.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();

            if (!formData.fullName || !formData.phone) {
              alert("Please fill in your Name and Phone Number.");
              return;
            }

            const whatsappNumber = "917014116801";
            const text = `Hello 👋,%0A%0A` +
                         `Here are the details:%0A` +
                         `Name: ${formData.fullName}%0A` +
                         `Phone: ${formData.phone}%0A` +
                         `Email: ${formData.email || "N/A"}%0A` +
                         `City: ${formData.city || "N/A"}%0A` +
                         `User Type: ${formData.userType || "N/A"}%0A%0A` +
                         `Thank you!`;
            const url = `https://wa.me/${whatsappNumber}?text=${text}`;
            window.open(url, "_blank");

            setFormData({
              fullName: "",
              email: "",
              phone: "",
              city: "",
              userType: "",
            });
          }}
        >
          {/* Full Name */}
          <div className={styles.formGroup}>
            <div className={styles.inputContainer}>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                onFocus={() => handleFocus("fullName")}
                onBlur={() => handleBlur("fullName")}
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
                onFocus={() => handleFocus("email")}
                onBlur={() => handleBlur("email")}
              />
              <label
                htmlFor="email"
                className={formData.email || focusedFields.email ? styles.focusedLabel : ''}
              >
                Email Address
              </label>
            </div>
          </div>

          {/* Phone */}
          <div className={styles.formGroup}>
            <div className={styles.inputContainer}>
              <div className={`${styles.phoneInput} ${focusedFields.phone ? styles.phoneInputFocused : ''}`}>
                <span className={styles.countryCode}>+91</span>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus("phone")}
                  onBlur={() => handleBlur("phone")}
                  placeholder="Phone number"
                  required
                />
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
                onFocus={() => handleFocus("city")}
                onBlur={() => handleBlur("city")}
              />
              <label
                htmlFor="city"
                className={formData.city || focusedFields.city ? styles.focusedLabel : ''}
              >
                City
              </label>
            </div>
          </div>

          {/* User Type */}
          <div className={styles.formGroup}>
            <label className={styles.radioLabel}>Tell us about yourself</label>
            <div className={styles.radioGroup}>
              <label className={styles.radioOption}>
                <input
                  type="radio"
                  name="userType"
                  value="homeowner"
                  checked={formData.userType === "homeowner"}
                  onChange={handleInputChange}
                />
                I am a homeowner looking for a pooja unit or pooja room
              </label>

              <label className={styles.radioOption}>
                <input
                  type="radio"
                  name="userType"
                  value="designer"
                  checked={formData.userType === "designer"}
                  onChange={handleInputChange}
                />
                I am an interior designer/consultant seeking solutions for my client
              </label>
            </div>
          </div>

          {/* Submit */}
          <button type="submit" className={styles.nextButton}>
            Share via WhatsApp
          </button>
        </form>
      </div>
    </div>
  </div>
)}

    </>
  );
};

export default DimensionsPictures;