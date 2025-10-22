import React, { useState } from 'react';
import Slider from 'react-slick';
import { FaTimes } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProjectShowcase = () => {
  const [activeTab, setActiveTab] = useState('Luxury-Living');
  const [modalImage, setModalImage] = useState(null);

  const projects = [
    ...Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      title: `Corporate Marble Design ${i + 1}`,
      image: `/gallery${i + 1}.jpg`,
      category: 'Corporate',
    })),
    ...Array.from({ length: 11 }, (_, i) => ({
      id: i + 13,
      title: `Luxury Marble Villa ${i + 1}`,
      image: `/gallery${i + 13}.jpg`,
      category: 'Luxury-Living',
    })),
    ...Array.from({ length: 10 }, (_, i) => ({
      id: i + 24,
      title: `Overseas Marble Project ${i + 1}`,
      image: `/gallery${i + 24}.jpg`,
      category: 'Overseas',
    })),
  ];

  const filteredProjects = projects.filter(
    (project) => project.category === activeTab
  );

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 900, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }, // ✅ one image on mobile
    ],
  };

  const openModal = (image) => setModalImage(image);
  const closeModal = () => setModalImage(null);

  const styles = {
    section: {
      padding: '3rem 1rem',
      background: 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)',
      fontFamily: "'Playfair Display', serif",
      minHeight: '100vh',
    },
    heading: {
      textAlign: 'center',
      fontSize: '2.5rem',
      color: '#646262',
      marginBottom: '2rem',
      fontWeight: 400,
      letterSpacing: '1px',
      textTransform: 'uppercase',
    },
    btnTab: {
      textAlign: 'center',
      marginBottom: '2rem',
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '1rem',
    },
    activeTab: {
      fontSize: '1rem',
      color: '#ff7e2e',
      fontWeight: 700,
      cursor: 'pointer',
      padding: '0.5rem 1rem',
      borderBottom: '2px solid #ff7e2e',
      transition: 'all 0.3s ease',
    },
    inactiveTab: {
      fontSize: '1rem',
      color: '#4a4a4a',
      cursor: 'pointer',
      padding: '0.5rem 1rem',
      transition: 'color 0.3s ease',
    },
    card: {
      padding: '0.5rem',
      background: '#fff',
      borderRadius: '12px',
      boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
      margin: '0.5rem',
      cursor: 'pointer',
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
    },
    caption: {
      marginTop: '0.75rem',
      fontSize: '1rem',
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
      width: '90%',
      maxWidth: '600px',
      background: '#fff',
      borderRadius: '12px',
      padding: '1rem',
      boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
      textAlign: 'center',
    },
    modalClose: {
      position: 'absolute',
      top: '-15px',
      right: '-15px',
      background: '#ff7e2e',
      border: 'none',
      color: '#fff',
      fontSize: '1.2rem',
      cursor: 'pointer',
      padding: '0.5rem',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalImage: {
      maxWidth: '100%',
      maxHeight: '70vh',
      borderRadius: '8px',
      objectFit: 'contain',
      border: '3px solid #ff7e2e',
    },
    slider: {
      margin: '0 auto',
      maxWidth: '1400px',
    },
  };

  return (
    <div style={styles.section}>
      <h2 style={styles.heading}>Explore Projects</h2>

      {/* Tabs */}
      <div style={styles.btnTab}>
        {['Corporate', 'Luxury-Living', 'Overseas'].map((tab) => (
          <span
            key={tab}
            style={activeTab === tab ? styles.activeTab : styles.inactiveTab}
            onClick={() => setActiveTab(tab)}
          >
            {tab.replace('-', ' ')}
          </span>
        ))}
      </div>

      {/* Carousel */}
      <div style={styles.slider}>
        <Slider {...sliderSettings}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              style={styles.card}
              onClick={() => openModal(project.image)}
            >
              <div style={styles.cardImg}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={styles.projectImg}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = 'scale(1.05)')
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = 'scale(1)')
                  }
                />
              </div>
              <div style={styles.caption}>{project.title}</div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Modal */}
      {modalImage && (
        <div style={styles.modalOverlay} onClick={closeModal}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
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
