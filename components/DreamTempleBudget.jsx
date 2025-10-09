import React from 'react';
import styles from '../styles/DreamTempleBudget.module.css';

const DreamTempleBudget = () => {
  const templeOptions = [
    {
      image: '/project1.jpg',
      price: 'Starting at INR 3.85L',
      title: '2ft Wide Temples'
    },
    {
      image: '/project2.jpg',
      price: 'Starting at INR 5.95L',
      title: '3.5ft Wide Temples'
    },
    {
      image: '/project3.jpg',
      price: 'Starting at INR 6.95L',
      title: '4ft Wide Temples'
    },
    {
      image: '/project4.jpg',
      price: 'Starting at INR 8.95L',
      title: '5.5ft Wide & Beyond Temples'
    }
  ];

  return (
    <section className={styles.budgetSection}>
      <div className="container-fluid" style={{paddingLeft: '40px', paddingRight: '40px'}}>
        <div className="row">
          <div className={`col-xl-10 mx-auto mb-3 ${styles.headerContainer}`}>
            <h2>A Temple for Every Home & Budget</h2>
            <p>
  Explore finely crafted temples,<br className="d-none d-lg-block" /> 
  created to suit every home, space, and budget.
</p>
          </div>
        </div>
        <div className={`row ${styles.budgetRow}`}>
          {templeOptions.map((temple, index) => (
            <div key={index} className={`col-md-3 ${styles.customCol}`}>
              <div className={styles.poojaCard}>
                <div className={styles.cardImg}>
                  <img 
                    src={temple.image} 
                    alt={temple.title}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className={styles.bottomSection}>{temple.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DreamTempleBudget;