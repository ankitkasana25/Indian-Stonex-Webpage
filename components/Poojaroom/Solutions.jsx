import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import styles from '../../styles/DimensionsPictures.module.css';

const Solutions = () => {
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
    console.log(formData);
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
                <h2>Customised Solutions</h2>
                <p>Let us bring your vision to life with a custom-designed space that reflects your unique taste and lifestyle. Whether it’s a traditional pooja room or a modern sanctuary, we’ll work with you to create the perfect fit. Ready to make your dream a reality?</p>
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
            <button className={styles.closeButton} onClick={handleCloseForm}>
              <FaTimes />
            </button>
            
            <div className={styles.contactForm}>
              <h2 className='text-center'>Talk to Our Expert</h2>
               <div className="text-sm font-bold text-gray-800 hover:text-gray-900 text-center">
                Contact Us : <span >+91  7014116801</span>
              </div>
              
              <form onSubmit={handleSubmit}>
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
                
                <button type="submit" className={styles.nextButton}>Next</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Solutions;