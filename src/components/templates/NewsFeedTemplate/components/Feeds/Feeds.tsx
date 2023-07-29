import React from 'react';
import { useInfiniteFeeds } from '@main/hooks/reactQuery/useInfiniteFeeds';
import styles from '@main/components/templates/NewsFeedTemplate/components/Feeds/Feeds.module.css';
import { FeedItem } from '../FeedItem';
import { Loader } from '@main/components/atoms/Loader';

export const Feeds = () => {
  const { data: feeds, isFetchingNextPage } = useInfiniteFeeds();

  return (
    <>
      <ul className={styles.feed__container}>
        {feeds?.pages.map((page) =>
          page?.map((feed: any) => {
            return <FeedItem key={feed?.id} feed={feed} />;
          })
        )}
      </ul>

      {isFetchingNextPage && (
        <div className={styles.pagination__loader__container}>
          <Loader size="small" />
        </div>
      )}
    </>
  );
};
