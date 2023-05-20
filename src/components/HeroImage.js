import React from 'react';
import HeroImageSrc from '../assets/hero-image.jpg'
import styles from '../styles/HomePage.module.css'

const HeroImageComponent = () => {
  return (
    <div className={styles.HomePage}>
      <h1>POST, PLAN & TRAVEL</h1>
      <div className={styles.HeroImage}>
        <img src={HeroImageSrc} alt="Hero Image" className={styles.HeroImageImg} />
      </div>
    </div>
  );
};

export default HeroImageComponent;
