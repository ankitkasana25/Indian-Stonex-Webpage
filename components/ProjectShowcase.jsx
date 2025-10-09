import React, { useState } from 'react';
import Slider from 'react-slick';
import { FaTimes } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProjectShowcase = () => {
  const [activeTab, setActiveTab] = useState('Luxury-Living');
  const [modalImage, setModalImage] = useState(null);

  const projects = [
    // Corporate (1–12)
    ...Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      title: `Corporate Marble Design ${i + 1}`,
      image: `/gallery${i + 1}.jpg`,
      category: 'Corporate',
    })),
    // Luxury-Living (13–23)
    ...Array.from({ length: 11 }, (_, i) => ({
      id: i + 13,
      title: `Luxury Marble Villa ${i + 1}`,
      image: `/gallery${i + 13}.jpg`,
      category: 'Luxury-Living',
    })),
    // Overseas (24–33)
    ...Array.from({ length: 10 }, (_, i) => ({
      id: i + 24,
      title: `Overseas Marble Project ${i + 1}`,
      image: `/gallery${i + 24}.jpg`,
      category: 'Overseas',
    })),
  ];

  const filteredProjects = projects.filter(project => project.category === activeTab);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 900, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  const openModal = (image) => setModalImage(image);
  const closeModal = () => setModalImage(null);

  // Inline styles with a marble-inspired, luxurious theme and updated heading
  const styles = {
    section: {
      padding: '4rem 2rem',
      background: 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)',
      fontFamily: "'Playfair Display', serif",
      minHeight: '100vh',
    },
    heading: {
      textAlign: 'center',
      fontSize: '3rem',
      color: '#646262ff', // White color inspired by "Indian" in the logo
      marginBottom: '3rem',
      fontWeight: 300,
      letterSpacing: '1px',
      textTransform: 'uppercase',
      textShadow: '0 2px 4px rgba(0,0,0,0.1)',
      padding: '1rem',
      borderRadius: '8px',
    },
    btnTab: {
      textAlign: 'center',
      marginBottom: '2rem',
      display: 'flex',
      justifyContent: 'center',
      gap: '1.5rem',
    },
    activeTab: {
      fontSize: '1.2rem',
      color: '#ff7e2e', // Theme color for active tab
      fontWeight: 700,
      cursor: 'pointer',
      padding: '0.5rem 1rem',
      borderBottom: '2px solid #ff7e2e',
      transition: 'all 0.3s ease',
    },
    inactiveTab: {
      fontSize: '1.2rem',
      color: '#4a4a4a',
      cursor: 'pointer',
      padding: '0.5rem 1rem',
      transition: 'all 0.3s ease',
      ':hover': {
        color: '#ff7e2e',
      },
    },
    card: {
      padding: '1rem',
      background: '#fff',
      borderRadius: '12px',
      boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
      margin: '0.5rem',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer',
      ':hover': {
        transform: 'translateY(-10px)',
        boxShadow: '0 12px 24px rgba(0,0,0,0.2)',
      },
    },
    cardImg: {
      width: '100%',
      height: '250px',
      overflow: 'hidden',
      borderRadius: '10px',
      border: '2px solid #e0e0e0',
    },
    projectImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.3s ease',
      ':hover': {
        transform: 'scale(1.05)',
      },
    },
    caption: {
      marginTop: '1rem',
      fontSize: '1.1rem',
      color: '#1a1a1a',
      fontWeight: 600,
      textAlign: 'center',
      fontFamily: "'Roboto', sans-serif",
    },
    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0,0,0,0.8)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    },
    modalContent: {
      position: 'relative',
      maxWidth: '80%',
      maxHeight: '80%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#fff',
      borderRadius: '12px',
      padding: '1rem',
      boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
    },
    modalClose: {
      position: 'absolute',
      top: '-40px',
      right: '-40px',
      background: '#ff7e2e', // Theme color for close button
      border: 'none',
      color: '#fff',
      fontSize: '1.5rem',
      cursor: 'pointer',
      padding: '0.5rem',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background 0.3s ease',
      ':hover': {
        background: '#cc6624', // Darker shade of theme color
      },
    },
    modalImage: {
      maxWidth: '100%',
      maxHeight: '80vh',
      borderRadius: '8px',
      objectFit: 'contain',
      border: '3px solid #ff7e2e', // Theme color for border
    },
    slider: {
      margin: '0 auto',
      maxWidth: '1400px',
      '.slick-dots li button:before': {
        fontSize: '2px',
        color: '#ff7e2e', // Theme color for dots
      },
      '.slick-dots li.slick-active button:before': {
        color: '#ff7e2e',
      },
      '.slick-prev, .slick-next': {
        background: '#ff7e2e', // Theme color for arrows
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        zIndex: 1,
      },
      '.slick-prev:hover, .slick-next:hover': {
        background: '#cc6624', // Darker shade of theme color
      },
    },
  };

  return (
    <div style={styles.section}>
      <h2 style={styles.heading}>Explore Projects</h2>

      <div style={styles.btnTab}>
        {['Corporate', 'Luxury-Living', 'Overseas'].map(tab => (
          <span
            key={tab}
            style={activeTab === tab ? styles.activeTab : styles.inactiveTab}
            onClick={() => setActiveTab(tab)}
          >
            {tab.replace('-', ' ')}
          </span>
        ))}
      </div>

      <div style={styles.slider}>
        <Slider {...sliderSettings}>
          {filteredProjects.map(project => (
            <div key={project.id} style={styles.card} onClick={() => openModal(project.image)}>
              <div style={styles.cardImg}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={styles.projectImg}
                  onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {modalImage && (
        <div style={styles.modalOverlay} onClick={closeModal}>
          <div style={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button style={styles.modalClose} onClick={closeModal}>
              <FaTimes />
            </button>
            <img src={modalImage} alt="Project" style={styles.modalImage} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectShowcase;