import Head from 'next/head';
import React from 'react';
import styles from '@main/components/templates/NewsFeedTemplate/NewsFeedTemplate.module.css';
import { Feeds } from './components/Feeds';
import { useInfiniteFeeds } from '@main/hooks/reactQuery/useInfiniteFeeds';
import { Loader } from '@main/components/atoms/Loader';

export const NewsFeedTemplate = () => {
  const { isInitialLoading: areInitialFeedsLoading } = useInfiniteFeeds();

  return (
    <>
      <Head>
        <title>Social Seedlings</title>
        <meta
          name="description"
          content="Nurturing Connections: Social Seedlings - Grow Your Social Network!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Layout for  */}
      <main
        className={styles.main}
        style={{
          justifyContent: areInitialFeedsLoading ? 'center' : 'flex-start'
        }}
      >
        {/* Random user profiles circles */}

        {/* List of random feeds */}

        {areInitialFeedsLoading ? <Loader size="large" /> : <Feeds />}
      </main>
    </>
  );
};
