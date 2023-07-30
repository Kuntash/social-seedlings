import React, { useEffect, useRef } from 'react';
import styles from '@main/components/templates/UserDetailsTemplate/components/PhotosViewToggle/PhotosViewToggle.module.css';
import { PhotosViewToggleProps } from './types';
import { ICON_COLLECTIONS } from '@main/components/molecules/IconCollections';

export const PhotosViewToggle = (props: PhotosViewToggleProps) => {
  const { photosViewState, setPhotosViewState } = props;
  const gridRef = useRef<HTMLButtonElement | null>(null);
  const listRef = useRef<HTMLButtonElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const overlayPosition = () => {
    let domRect;
    if (photosViewState === 'grid') {
      domRect = gridRef.current?.getBoundingClientRect();
    } else if (photosViewState === 'list') {
      domRect = listRef.current?.getBoundingClientRect();
    }

    overlayRef.current?.style.setProperty('height', `${domRect?.height}px`);
    overlayRef.current?.style.setProperty('width', `${domRect?.width}px`);
    overlayRef.current?.style.setProperty('top', `${domRect?.top}px`);
    overlayRef.current?.style.setProperty('left', `${domRect?.left}px`);
  };

  useEffect(() => {
    overlayPosition();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [photosViewState]);

  /* To change the position when the viewport size changes */
  useEffect(() => {
    window.addEventListener('resize', overlayPosition);

    return () => {
      window.removeEventListener('resize', overlayPosition);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={styles.photos__view__toggle__container}
      style={{
        alignSelf: photosViewState === 'list' ? 'flex-start' : undefined
      }}
    >
      <div ref={overlayRef} className={styles.active__overlay} />
      <button
        ref={gridRef}
        className={styles.toggle__button}
        onClick={() => {
          setPhotosViewState('grid');
        }}
      >
        {ICON_COLLECTIONS?.grid}
      </button>
      <button
        ref={listRef}
        className={styles.toggle__button}
        onClick={() => {
          setPhotosViewState('list');
        }}
      >
        {ICON_COLLECTIONS?.list}
      </button>
    </div>
  );
};
