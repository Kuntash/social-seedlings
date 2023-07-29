import React from 'react';
import styles from '@main/components/atoms/Loader/Loader.module.css';
import { LoaderProps } from './types';

export const Loader = (props: LoaderProps) => {
  const { size } = props;
  return (
    <div className={`${styles.loader} ${styles?.[size]}`}>
      {Array(4)
        .fill(0)
        .map((_, index) => (
          <div className={styles.loader__dot} key={index} />
        ))}
    </div>
  );
};
