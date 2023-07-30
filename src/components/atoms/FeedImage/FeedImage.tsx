import React from 'react';
import styles from '@main/components/atoms/FeedImage/FeedImage.module.css';
import { FeedImageProps } from './types';
import Image from 'next/legacy/image';
import useBlurData from 'use-next-blurhash';

export const FeedImage = (props: FeedImageProps) => {
  const { urls, size, color, layout, width, height, alt, blurHash } = props;

  const [blurDataUrl] = useBlurData(blurHash, 5, 5);
  return (
    <div
      className={`${styles.feed__image__container} ${styles?.[size]}
      `}
      style={{ filter: `drop-shadow(0px 0px 10px ${color})` }}
    >
      <Image
        src={urls?.[size]}
        alt={alt}
        layout={layout}
        placeholder="blur"
        blurDataURL={blurDataUrl}
        {...(width && { width })}
        {...(height && { height })}
        objectFit="cover"
      />
    </div>
  );
};
