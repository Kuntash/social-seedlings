import React from 'react';
import { useInfiniteFeeds } from '@main/hooks/reactQuery/useInfiniteFeeds';
import styles from '@main/components/templates/NewsFeedTemplate/components/Feeds/Feeds.module.css';
import { FeedItem } from '../FeedItem';
import { Loader } from '@main/components/atoms/Loader';

export const Feeds = () => {
  const { data: feeds, isFetchingNextPage, fetchNextPage } = useInfiniteFeeds();

  return (
    <>
      <ul className={styles.feed__container}>
        {feeds?.pages.map((page) =>
          page?.map((feed: any) => {
            const isLastFeed =
              feed?.id ===
              feeds?.pages[feeds?.pages.length - 1]?.[
                feeds?.pages[feeds?.pages.length - 1]?.length - 1
              ]?.id;

            return (
              <FeedItem
                key={feed?.id}
                feed={feed}
                isLastFeed={isLastFeed}
                fetchNextPage={() => {
                  fetchNextPage();
                }}
              />
            );
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
