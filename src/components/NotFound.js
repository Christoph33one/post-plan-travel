import React from 'react'
import NoResults from "../assets/NoResults.jpg";
import styles from "../styles/NotFound.module.css";


const NotFound = () => {
    return (
      <div className={styles.container}>
        <img className={styles.image} src={NoResults} alt="No Results" />
        <div className={styles.message}>
          Sorry, the page you're looking for doesn't exist
        </div>
      </div>
    );
  };
  
  export default NotFound;