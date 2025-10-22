import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import styles from "../../styles/TsaDesignhub/Hero.module.css";

const Hero = ({
  title = "Let's Get Started With",
  highlight = "Your Dream Temple",
  subtitle = "We craft luxurious, bespoke pooja rooms and marble temples with precision and timeless artistry.",
  buttonText = "Talk to Our Expert",
  phoneNumber = "+91 7014116801",
  showForm = true,
  onSubmit,
}) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    userType: "",
  });

  const [focusedFields, setFocusedFields] = useState({
    fullName: false,
    email: false,
    phone: false,
    city: false,
  });

  // Disable background scroll when form visible
  useEffect(() => {
    document.body.style.overflow = isFormVisible ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [isFormVisible]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFocus = (field) =>
    setFocusedFields({ ...focusedFields, [field]: true });

  const handleBlur = (field) => {
    if (!formData[field])
      setFocusedFields({ ...focusedFields, [field]: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(formData);
    else console.log("Form submitted:", formData);
  };

  return (
    <section className={`${styles.hero} relative overflow-hidden`}>
      <div className={styles.heroContent}>
        {/* LEFT CONTENT */}
        <div className={styles.leftContent}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight animate-slide-up">
            {title} <br />
            <span className="bg-gradient-to-r from-[#ff7e2e] via-[#ff9d5c] to-[#ffb380] bg-clip-text text-transparent">
              {highlight}
            </span>
          </h1>

          {subtitle && (
            <p className="mt-6 max-w-md text-gray-700 text-lg sm:text-xl animate-fade-in-up">
              {subtitle}
            </p>
          )}

          {showForm && (
            <button
              className="mt-8 rounded-xl bg-[#ff7e2e] px-8 py-4 text-white font-semibold shadow-lg transition-all hover:scale-105 hover:shadow-xl animate-fade-in-up"
              onClick={() => setIsFormVisible(true)}
            >
              {buttonText}
            </button>
          )}
        </div>

        {/* RIGHT CONTENT - FORM */}
        {showForm && (
          <div
            className={`${styles.rightContent} ${
              isFormVisible ? styles.mobileFormVisible : ""
            } animate-slide-up`}
          >
            <div className={styles.contactForm}>
              <button
                className={styles.closeButton}
                onClick={() => setIsFormVisible(false)}
              >
                <FaTimes />
              </button>

              <h2 className="text-2xl font-semibold mb-6 animate-fade-in-up text-center">
                {buttonText}
              </h2>

              <div className="text-sm font-bold text-gray-800 text-center mb-4">
                Contact Us: <span>{phoneNumber}</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <InputField
                  label="Full Name *"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  focused={focusedFields.fullName}
                  required
                />

                {/* Email */}
                <InputField
                  label="Email Address *"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  focused={focusedFields.email}
                  required
                />

                {/* Phone */}
                <div className={styles.formGroup}>
                  <div className={styles.inputContainer}>
                    <div className={styles.phoneInputContainer}>
                      <div
                        className={`${styles.phoneInput} ${
                          focusedFields.phone ? styles.phoneInputFocused : ""
                        }`}
                      >
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
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* City */}
                <InputField
                  label="City *"
                  name="city"
                  type="text"
                  value={formData.city}
                  onChange={handleInputChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  focused={focusedFields.city}
                  required
                />

                {/* User Type */}
                <div className={styles.formGroup}>
                  <label className={styles.radioLabel}>
                    Tell us about yourself *
                  </label>
                  <div className={styles.radioGroup}>
                    <RadioOption
                      name="userType"
                      value="homeowner"
                      label="I am a homeowner looking for a pooja unit or pooja room"
                      checked={formData.userType === "homeowner"}
                      onChange={handleInputChange}
                    />
                    <RadioOption
                      name="userType"
                      value="designer"
                      label="I am an interior designer/consultant seeking solutions for my client"
                      checked={formData.userType === "designer"}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#ff7e2e] py-3 text-white font-semibold shadow-lg hover:scale-105 transition-all"
                >
                  Next
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// 💡 Reusable Input Component
const InputField = ({
  label,
  name,
  type,
  value,
  onChange,
  onFocus,
  onBlur,
  focused,
  required,
}) => (
  <div className="relative">
    <div className="relative">
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => onFocus(name)}
        onBlur={() => onBlur(name)}
        required={required}
        className="peer w-full border-b-2 border-gray-300 focus:border-orange-500 outline-none p-2"
      />
      <label
        htmlFor={name}
        className={`absolute left-2 top-2 text-gray-500 transition-all duration-200 ${
          value || focused ? "-top-3 text-sm text-orange-600" : ""
        }`}
      >
        {label}
      </label>
    </div>
  </div>
);

// 💡 Reusable Radio Option
const RadioOption = ({ name, value, label, checked, onChange }) => (
  <label className="flex items-start space-x-2 cursor-pointer">
    <input
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
    />
    <span>{label}</span>
  </label>
);

export default Hero;
