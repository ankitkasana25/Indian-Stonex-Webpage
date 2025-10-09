import { useState, useEffect } from 'react';
import { FaArrowRight, FaTimes } from 'react-icons/fa';

const PoojaRoomJourney = () => {
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
      <div
        className="relative w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/img25.jpg')`,
          backgroundSize: 'cover',
          height: '55vh'
        }}
      >
        {/* Content */}
        <div className="h-full flex flex-col justify-center items-center text-center px-4">
          <h2 className="text-white text-4xl md:text-5xl font-medium mb-8" style={{ fontSize: '1.6rem', color: '#fff' }}>
            Let's Build Your Pooja Temple Together
          </h2>
          <button
            className="flex items-center justify-center gap-2 group hover:bg-hover-theme transition-colors duration-300"
            style={{
              textDecoration: 'none',
              fontSize: '1rem',
              marginTop: '1.87rem',
              fontWeight: 500,
              textTransform: 'uppercase',
              padding: '0.75rem 1.875rem',
              borderRadius: '4px',
              color: '#fff',
              backgroundColor: 'var(--color-theme)',
              border: 'none',
              width: 'max-content',
              cursor: 'pointer'
            }}
            onClick={handleButtonClick}
          >
            Start Now
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Form overlay */}
      {showForm && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }}>
          <div style={{
            position: 'relative',
            background: 'white',
            borderRadius: '8px',
            maxWidth: '500px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto'
          }}>
            <button
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'none',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                zIndex: 1001,
                color: '#666'
              }}
              onClick={handleCloseForm}
            >
              <FaTimes />
            </button>

            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '8px',
              width: '100%',
              position: 'relative'
            }}>
              <h2 style={{
                fontSize: '1.5rem',
                marginBottom: '0.5rem',
                color: '#333',
                textAlign: 'center',
              }}>
                Talk to Our Expert
              </h2>
              <div className="text-sm font-bold text-gray-800 hover:text-gray-900 text-center">
                Contact Us : <span >+91  7014116801</span>
              </div>

              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1.2rem', position: 'relative' }}>
                  <div style={{ position: 'relative', marginTop: '1rem' }}>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus('fullName')}
                      onBlur={() => handleBlur('fullName')}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '1rem'
                      }}
                    />
                    <label
                      htmlFor="fullName"
                      style={{
                        position: 'absolute',
                        left: '0.75rem',
                        top: '0.75rem',
                        fontSize: '1rem',
                        color: '#999',
                        pointerEvents: 'none',
                        transition: 'all 0.2s ease',
                        ...((formData.fullName || focusedFields.fullName) ? {
                          top: '-0.75rem',
                          left: '0.5rem',
                          fontSize: '0.8rem',
                          background: 'white',
                          padding: '0 0.5rem',
                          color: '#1e90ff'
                        } : {})
                      }}
                    >
                      Full Name *
                    </label>
                  </div>
                </div>

                <div style={{ marginBottom: '1.2rem', position: 'relative' }}>
                  <div style={{ position: 'relative', marginTop: '1rem' }}>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={() => handleBlur('email')}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '1rem'
                      }}
                    />
                    <label
                      htmlFor="email"
                      style={{
                        position: 'absolute',
                        left: '0.75rem',
                        top: '0.75rem',
                        fontSize: '1rem',
                        color: '#999',
                        pointerEvents: 'none',
                        transition: 'all 0.2s ease',
                        ...((formData.email || focusedFields.email) ? {
                          top: '-0.75rem',
                          left: '0.5rem',
                          fontSize: '0.8rem',
                          background: 'white',
                          padding: '0 0.5rem',
                          color: '#1e90ff'
                        } : {})
                      }}
                    >
                      Email Address *
                    </label>
                  </div>
                </div>

                <div style={{ marginBottom: '1.2rem', position: 'relative' }}>
                  <div style={{ position: 'relative', marginTop: '1rem' }}>
                    <div style={{
                      position: 'relative'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        border: `1px solid ${focusedFields.phone ? '#1e90ff' : '#ddd'}`,
                        borderRadius: '4px',
                        transition: 'border-color 0.2s ease'
                      }}>
                        <span style={{
                          padding: '0.75rem',
                          background: '#f5f5f5',
                          borderRight: '1px solid #ddd',
                          fontSize: '1rem'
                        }}>
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
                          style={{
                            border: 'none',
                            padding: '0.75rem',
                            fontSize: '1rem',
                            width: '100%',
                            borderRadius: '0 4px 4px 0'
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ marginBottom: '1.2rem', position: 'relative' }}>
                  <div style={{ position: 'relative', marginTop: '1rem' }}>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus('city')}
                      onBlur={() => handleBlur('city')}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '1rem'
                      }}
                    />
                    <label
                      htmlFor="city"
                      style={{
                        position: 'absolute',
                        left: '0.75rem',
                        top: '0.75rem',
                        fontSize: '1rem',
                        color: '#999',
                        pointerEvents: 'none',
                        transition: 'all 0.2s ease',
                        ...((formData.city || focusedFields.city) ? {
                          top: '-0.75rem',
                          left: '0.5rem',
                          fontSize: '0.8rem',
                          background: 'white',
                          padding: '0 0.5rem',
                          color: '#1e90ff'
                        } : {})
                      }}
                    >
                      City *
                    </label>
                  </div>
                </div>

                <div style={{ marginBottom: '1.2rem', position: 'relative' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: 500,
                    color: '#333',
                    fontSize: '0.9rem'
                  }}>
                    Tell us about yourself *
                  </label>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.8rem'
                  }}>
                    <label style={{
                      display: 'flex',
                      alignItems: 'center',
                      position: 'relative',
                      paddingLeft: '2rem',
                      cursor: 'pointer',
                      color: '#333',
                      fontSize: '0.9rem'
                    }}>
                      <input
                        type="radio"
                        name="userType"
                        value="homeowner"
                        checked={formData.userType === 'homeowner'}
                        onChange={handleInputChange}
                        style={{
                          position: 'absolute',
                          left: 0,
                          opacity: 1,
                          width: '20px',
                          height: '20px',
                          cursor: 'pointer'
                        }}
                      />
                      I am a homeowner looking for a pooja unit or pooja room
                    </label>

                    <label style={{
                      display: 'flex',
                      alignItems: 'center',
                      position: 'relative',
                      paddingLeft: '2rem',
                      cursor: 'pointer',
                      color: '#333',
                      fontSize: '0.9rem'
                    }}>
                      <input
                        type="radio"
                        name="userType"
                        value="designer"
                        checked={formData.userType === 'designer'}
                        onChange={handleInputChange}
                        style={{
                          position: 'absolute',
                          left: 0,
                          opacity: 1,
                          width: '20px',
                          height: '20px',
                          cursor: 'pointer'
                        }}
                      />
                      I am an interior designer/consultant seeking solutions for my client
                    </label>
                  </div>
                </div>

                <button type="submit" style={{
                  background: 'var(--color-theme)',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem 2rem',
                  fontSize: '1rem',
                  fontWeight: 600,
                  borderRadius: '4px',
                  cursor: 'pointer',
                  width: '100%',
                  marginTop: '1rem'
                }}>
                  Next
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PoojaRoomJourney;