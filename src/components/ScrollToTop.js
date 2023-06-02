import React, { useEffect, useState } from 'react';
import styles from '../styles/ScrollToTop.module.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className={styles.scrollToTop} onClick={scrollToTop} style={{ display: isVisible ? 'block' : 'none' }}>
      <button className={styles.scrollButton}>
      <h3><i className="fas fa-arrow-circle-up"></i></h3>
      </button>
    </div>
  );
};

export default ScrollToTop;
