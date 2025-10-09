import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/ProjectShowcase.module.css';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ProjectShowcase = () => {
  const [activeTab, setActiveTab] = useState('Luxury-Living');
  const sliderRef = useRef(null);

  // Updated project data with temple-related titles
  const projects = [
    {
      id: 1,
      title: 'Shri 1008 Munisuvratnath Jain Temple',
      image: '/img5.png',
      link: '',
      category: 'Corporate'
    },
    {
      id: 2,
      title: 'Shri Adinath Bhagwan Temple Complex',
      image: '/img2.jpg',
      link: '',
      category: 'Corporate'
    },
    {
      id: 3,
      title: 'Community Marble Temple',
      image: '/img4.png',
      link: '',
      category: 'Corporate'
    },
    {
      id: 4,
      title: 'Luxury Villa Home Temple',
      image: '/img12.jpg',
      link: '',
      category: 'Luxury-Living'
    },
    {
      id: 5,
      title: 'Modern Apartment Temple',
      image: '/img10.jpg',
      link: '',
      category: 'Luxury-Living'
    },
    {
      id: 6,
      title: 'Garden Temple Pavilion',
      image: '/img7.png',
      link: '',
      category: 'Luxury-Living'
    },
    {
      id: 7,
      title: 'Jain Temple Complex',
      image: '/img10.jpg',
      category: 'Overseas',
      link: ''
    },
    {
      id: 8,
      title: 'Cultural Center Temple',
      image: '/murti1.jpg',
      category: 'Overseas',
      link: ''
    },
    {
      id: 9,
      title: 'Peace Temple',
      image: '/project5.jpg',
      category: 'Overseas',
      link: ''
    }
  ]

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