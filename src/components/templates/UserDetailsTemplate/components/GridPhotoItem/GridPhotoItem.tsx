import { FeedImage } from '@main/components/atoms/FeedImage';
import React, { useRef } from 'react';
import styles from '@main/components/templates/UserDetailsTemplate/components/GridPhotoItem/GridPhotoItem.module.css';
import { GridPhotoItemProps } from './types';
import { useIntersectionObserver } from '@main/hooks/useIntersectionObserver';

export const GridPhotoItem = (props: GridPhotoItemProps) => {
  const { fetchNextPage, isLastPhoto, photo } = props;

  const lastPhotoRef = useRef<HTMLDivElement | null>(null);

  useIntersectionObserver({
    onEntry: () => {
      fetchNextPage();
    },
    ref: lastPhotoRef,
    shouldAttachObserver: isLastPhoto,
    options: {
      threshold: 0.9
    }
  });

  return (
    <div ref={lastPhotoRef} className={styles.grid__item} key={photo?.id}>
      <FeedImage
        urls={photo?.urls}
        size="small"
        color={photo?.color}
        blurHash={photo?.blur_hash}
        width={200}
        height={200}
      />

      <div className={styles.grid__item__overlay}>
        <div className={styles.grid__photo__description}>
          {photo?.description || photo?.alt_description}
        </div>
      </div>
    </div>
  );
};
