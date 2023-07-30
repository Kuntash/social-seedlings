import React, { useRef } from 'react';
import styles from '@main/components/templates/NewsFeedTemplate/components/FeedItem/FeedItem.module.css';
import { FeedItemProps } from './types';
import { ProfilePicture } from '@main/components/atoms/ProfilePicture';
import { FeedImage } from '@main/components/atoms/FeedImage';
import { useIntersectionObserver } from '@main/hooks/useIntersectionObserver';
import Link from 'next/link';

/* convert this component to forwardRef */

export const FeedItem = (props: FeedItemProps) => {
  const { feed, isLastFeed, fetchNextPage } = props;
  const lastFeedRef = useRef<HTMLLIElement | null>(null);

  useIntersectionObserver({
    onEntry: () => {
      console.log('🚀 ~ file: Feeds.tsx:17 ~ intersection observer activated');
      fetchNextPage();
    },
    ref: lastFeedRef,
    shouldAttachObserver: isLastFeed,
    options: {
      threshold: 0.9
    }
  });

  return (
    <li ref={lastFeedRef} className={styles.feed__item}>
      {/*  Feed item header */}
      <div className={styles.feed__item__header}>
        <ProfilePicture urls={feed?.user?.profile_image} size="small" />

        {/*  User name and location*/}
        <div className={styles.user__details__container}>
          <Link href={`/user/${feed?.user?.username}`}>
            <h5 className={styles.user__name}>{feed?.user?.username}</h5>
          </Link>
          <p className={styles.user__location}>{feed?.location?.name}</p>
        </div>

        {/* Posting time  */}
        <div></div>
      </div>

      {/* Feed item photo */}

      <div className={styles.feed__image__container}>
        <FeedImage
          size="regular"
          urls={feed?.urls}
          color={feed.color}
          blurHash={feed?.blur_hash}
          layout="fill"
          alt={feed?.alt_description}
        />

        <div className={styles.feed__image__overlay}>
          <p className={styles.feed__image__description}>
            {feed?.alt_description ?? 'No description added'}
          </p>
        </div>
      </div>

      <div className={styles?.feed__item__footer}>
        {/* Likes */}
        <p className={styles.feed__likes}>
          {feed?.likes} {feed?.likes > 1 ? 'likes' : 'like'}
        </p>
        {/* Description */}
        <p className={styles.feed__description}>{feed?.description}</p>
      </div>
    </li>
  );
};
