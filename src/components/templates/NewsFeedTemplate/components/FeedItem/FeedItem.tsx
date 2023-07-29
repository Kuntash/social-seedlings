import React, { useRef } from 'react';
import styles from '@main/components/templates/NewsFeedTemplate/components/FeedItem/FeedItem.module.css';
import { FeedItemProps } from './types';
import { ProfilePicture } from '@main/components/atoms/ProfilePicture';
import { FeedImage } from '@main/components/atoms/FeedImage';
import { useInfiniteFeeds } from '@main/hooks/reactQuery/useInfiniteFeeds';
import { useIntersectionObserver } from '@main/hooks/useIntersectionObserver';
import Link from 'next/link';

/* convert this component to forwardRef */

export const FeedItem = (props: FeedItemProps) => {
  const { feed } = props;
  const { data: feeds, fetchNextPage } = useInfiniteFeeds();

  const isLastFeed =
    feed?.id ===
    feeds?.pages[feeds?.pages.length - 1]?.[
      feeds?.pages[feeds?.pages.length - 1]?.length - 1
    ]?.id;

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
          <Link href={`/${feed?.user?.username}`}>
            <h5 className={styles.user__name}>{feed?.user?.username}</h5>
          </Link>
          <p className={styles.user__location}>{feed?.location?.name}</p>
        </div>

        {/* Posting time  */}
        <div></div>
      </div>

      {/* Feed itme photo */}
      <FeedImage
        size="regular"
        urls={feed?.urls}
        color={feed.color}
        blurHash={feed?.blur_hash}
      />

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
