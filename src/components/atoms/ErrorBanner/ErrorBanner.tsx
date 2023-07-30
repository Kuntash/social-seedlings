import React from 'react';
import styles from '@main/components/atoms/ErrorBanner/ErrorBanner.module.css';
export const ErrorBanner = () => {
  return (
    <div className={styles.error__banner}>
      {/* Description */}
      <div className={styles.error__description}>
        An error occurred while fetching the data. Please try again later.
      </div>
      {/* Animation */}
      <div className={styles.error__animation__container}>
        <div className={styles.error__left__cross} />
        <div className={styles.error__right__cross} />
      </div>
    </div>
  );
};
