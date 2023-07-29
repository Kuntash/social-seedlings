import React from 'react';
import styles from '@main/components/atoms/FeedImage/FeedImage.module.css';
import { FeedImageProps } from './types';
import Image from 'next/legacy/image';

export const FeedImage = (props: FeedImageProps) => {
  const { urls, size, color, blurHash } = props;

  return (
    <div
      className={`${styles.feed__image__container} ${styles?.[size]}
      `}
      style={{ filter: `drop-shadow(0px 0px 5px ${color})` }}
    >
      <Image
        src={urls?.[size]}
        alt="Feed image"
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        blurDataURL={blurHash}
      />
    </div>
  );
};
