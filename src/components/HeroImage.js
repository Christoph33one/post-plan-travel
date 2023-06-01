// import React from 'react';
import HeroImageSrc from '../assets/hero-image.jpg'
import styles from '../styles/HomePage.module.css'

const HeroImageComponent = () => {
  return (
    <div className={styles.HomePage}>
      <div className={styles.HeroImage}>
        <img src={HeroImageSrc} alt="Hero Image" className={styles.HeroImageImg} />
      </div>
    </div>
  );
};

export default HeroImageComponent;
