import React from 'react';
import styles from '@main/components/atoms/ProfilePicture/ProfilePicture.module.css';
import { ProfilePictureProps } from './types';
import Image from 'next/legacy/image';

export const ProfilePicture = (props: ProfilePictureProps) => {
  const { urls, size } = props;
  return (
    <div className={`${styles.profile__picture__container} ${styles?.[size]}`}>
      <Image src={urls?.[size]} alt="Profile Picture" layout="fill" />
    </div>
  );
};
