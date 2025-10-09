import React from 'react';
import styles from '../../styles/DreamTempleBudget.module.css';

const DreamTempleBudget = () => {
  const templeOptions = [
    {
      image: 'https://www.indianstonex.com/_next/image?url=%2F…Fstatic%2Fmedia%2Fsmall.0f334db2.webp&w=2048&q=75',
      price: 'Starting at INR 3.85L',
      title: '3ft Wide Temples'
    },
    {
      image: 'https://www.indianstonex.com/_next/image?url=%2F…static%2Fmedia%2Fmedium.baeb1925.webp&w=2048&q=75',
      price: 'Starting at INR 5.95L',
      title: '4ft Wide Temples'
    },
    {
      image: 'https://www.indianstonex.com/_next/image?url=%2F…Fstatic%2Fmedia%2Flarge.455df67e.webp&w=2048&q=75',
      price: 'Starting at INR 6.95L',
      title: '5ft Wide Temples'
    },
    {
      image: 'https://www.indianstonex.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdreams4.b7bdef8e.webp&w=2048&q=75',
      price: 'Starting at INR 8.95L',
      title: '6ft Wide & Beyond Temples'
    }
  ];

  return (
    <section className={styles.budgetSection}>
      <div className="container-fluid" style={{paddingLeft: '40px', paddingRight: '40px'}}>
        <div className="row">
          <div className={`col-xl-10 mx-auto mb-3 ${styles.headerContainer}`}>
            <h2>Dream Temple for Every Budget</h2>
            <p>
              Transform your space with our exquisite Dream Temples, thoughtfully 
              <br className="d-none d-lg-block" /> designed to suit every style and budget.
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
                  <div className={styles.priceSection}>{temple.price}</div>
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