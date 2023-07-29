import Head from 'next/head';
import React from 'react';
import styles from '@main/components/templates/NewsFeedTemplate/NewsFeedTemplate.module.css';
import { Feeds } from './components/Feeds';

export const NewsFeedTemplate = () => {
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
      <main className={styles.main}>
        {/* Random user profiles circles */}

        {/* List of random feeds */}
        <Feeds />
      </main>
    </>
  );
};
