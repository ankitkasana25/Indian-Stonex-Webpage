import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/ProjectShowcase.module.css';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ProjectShowcase = () => {
  const [activeTab, setActiveTab] = useState('Luxury-Living');
  const sliderRef = useRef(null);

  // Updated project data with temple-related titles
const projects = [
  // Corporate (1–12)
  ...Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: 'Shri 1008 Munisuvratnath Jain Temple',
    image: `/gallery${i + 1}.jpg`,
    link: '',
    category: 'Corporate',
  })),

  // Luxury-Living (13–23)
  ...Array.from({ length: 11 }, (_, i) => ({
    id: i + 13,
    title: 'Luxury Villa Home Temple',
    image: `/gallery${i + 13}.jpg`,
    link: '',
    category: 'Luxury-Living',
  })),

  // Overseas (24–33)
  ...Array.from({ length: 10 }, (_, i) => ({
    id: i + 24,
    title: 'Jain Temple Complex',
    image: `/gallery${i + 24}.jpg`,
    link: '',
    category: 'Overseas',
  })),
];


  // Filter projects based on active tab
  const filteredProjects = projects.filter(project => project.category === activeTab);

  const scrollLeft = () => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.querySelector(`.${styles.slide}`).offsetWidth;
      const gap = 24;
      sliderRef.current.scrollBy({ left: -(slideWidth + gap), behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.querySelector(`.${styles.slide}`).offsetWidth;
      const gap = 24;
      sliderRef.current.scrollBy({ left: slideWidth + gap, behavior: 'smooth' });
    }
  };

  // Scroll to appropriate card when tab changes
  useEffect(() => {
    if (sliderRef.current) {
      // Scroll to start when tab changes
      sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Explore Our Projects</h2>

        <div className={`${styles.row} ${styles.justifyContentCenter}`}>
          <div className={styles.colXl10}>
            <div className={styles.btnTab}>
              <ul>
                <li
                  className={activeTab === 'Corporate' ? styles.active : ''}
                  onClick={() => handleTabClick('Corporate')}
                >
                  Corporate
                </li>
                <li
                  className={activeTab === 'Luxury-Living' ? styles.active : ''}
                  onClick={() => handleTabClick('Luxury-Living')}
                >
                  Luxury-Living
                </li>
                <li
                  className={activeTab === 'Overseas' ? styles.active : ''}
                  onClick={() => handleTabClick('Overseas')}
                >
                  Overseas
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.mt4}>
          <div className={styles.row}>
            <div className={styles.colMd12}>
              <div className={styles.sliderContainer}>
                <div className={styles.slider} ref={sliderRef}>
                  {filteredProjects.map(project => (
                    <div key={project.id} className={styles.slide}>
                      <div className={styles.cardProject}>
                        <div className={styles.clientCard}>
                          <a href={project.link}>
                            <div className={styles.cardImg}>
                              <img
                                src={project.image}
                                alt={project.title}
                                className={styles.projectImg}
                              />
                            </div>
                          </a>
                          <div className={styles.caption}>
                            <div className={styles.projectTitle}>{project.title}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={styles.sliderControls}>
                  <button className={styles.slickPrev} onClick={scrollLeft}>
                    <FaChevronLeft />
                  </button>
                  <button className={styles.slickNext} onClick={scrollRight}>
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;