import React, { useEffect } from 'react';
import { useInfiniteFeeds } from '@main/hooks/reactQuery/useInfiniteFeeds';
import styles from '@main/components/templates/NewsFeedTemplate/components/Feeds/Feeds.module.css';
import { RANDOM_FEEDS } from '@main/constants';
import { FeedItem } from '../FeedItem';

export const Feeds = () => {
  const { data: feeds } = useInfiniteFeeds();

  return (
    <ul className={styles.feed__container}>
      {feeds?.pages.map((page) =>
        page?.map((feed: any) => {
          const isLastFeed =
            feed?.id ===
            feeds?.pages[feeds?.pages.length - 1]?.[
              feeds?.pages[feeds?.pages.length - 1]?.length - 1
            ]?.id;
          console.log(
            '🚀 ~ file: Feeds.tsx:16 ~ page?.map ~ isLastFeed:',
            isLastFeed,
            feed
          );
          return <FeedItem key={feed?.id} feed={feed} />;
        })
      )}
    </ul>
  );
};
